/* global document */
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { join, resolve } from "node:path";
import { chromium } from "playwright";
import { createRouteTestServer } from "./route-test-server.mjs";

const cases = [
  ["home", "/"],
  ["hub", "/password-managers"],
  ["guide", "/guides/how-to-choose-software"],
  ["review", "/reviews/totalav-review"],
  ["comparison", "/comparisons/incogni-vs-deleteme"],
  ["policy", "/privacy"],
  ["404", "/not-a-real-page"]
];
const viewports = [
  ["desktop", { width: 1440, height: 1000 }],
  ["mobile", { width: 390, height: 844 }]
];
const baselineDir = resolve("tests", "visual-baselines");
const update = process.env.UPDATE_VISUAL_BASELINES === "1";
await mkdir(baselineDir, { recursive: true });

const server = createRouteTestServer();
await new Promise((resolveListen) => server.listen(0, "127.0.0.1", resolveListen));
const address = server.address();
if (!address || typeof address === "string") throw new Error("Could not start route test server.");
const origin = `http://127.0.0.1:${address.port}`;
const browser = await chromium.launch({ channel: "chrome", headless: true });

try {
  for (const [viewportName, viewport] of viewports) {
    const context = await browser.newContext({ viewport, deviceScaleFactor: 1 });
    await context.route("https://www.googletagmanager.com/**", (route) =>
      route.fulfill({ status: 200, contentType: "text/javascript", body: "" }));
    const page = await context.newPage();
    for (const [name, route] of cases) {
      await page.goto(origin + route, { waitUntil: "networkidle" });
      await page.evaluate(() => document.fonts.ready);
      await page.addStyleTag({ content: "*,*::before,*::after{animation:none!important;transition:none!important;caret-color:transparent!important}" });
      const actual = await page.screenshot({ animations: "disabled", fullPage: false });
      const baselinePath = join(baselineDir, `${name}-${viewportName}.png`);
      if (update) {
        await writeFile(baselinePath, actual);
      } else {
        const expected = await readFile(baselinePath).catch(() => null);
        if (!expected) throw new Error(`Missing visual baseline: ${baselinePath}`);
        if (!expected.equals(actual)) throw new Error(`Visual regression: ${name}-${viewportName}.png`);
      }
    }
    await context.close();
  }
  console.log(`${update ? "Updated" : "Matched"} ${cases.length * viewports.length} reviewed visual baselines.`);
} finally {
  await browser.close();
  await new Promise((resolveClose, rejectClose) => server.close((error) => error ? rejectClose(error) : resolveClose()));
}
