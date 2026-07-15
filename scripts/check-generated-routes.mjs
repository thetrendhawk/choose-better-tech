import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { APP_ROUTES } from "../src/routes.manifest.mjs";
import { buildVercelConfig } from "./generate-vercel-routes.mjs";

const stable = (value) =>
  JSON.stringify(value, (_key, val) =>
    val && typeof val === "object" && !Array.isArray(val)
      ? Object.fromEntries(Object.keys(val).sort().map((k) => [k, val[k]]))
      : val
  );

const rootDir = dirname(dirname(fileURLToPath(import.meta.url)));
let committed;
try {
  committed = JSON.parse(readFileSync(join(rootDir, "vercel.json"), "utf8"));
} catch (error) {
  console.error("check:generated-routes FAILED — vercel.json is missing or not valid JSON:", error.message);
  process.exit(1);
}

if (stable(buildVercelConfig(APP_ROUTES)) !== stable(committed)) {
  console.error("check:generated-routes FAILED — committed vercel.json does not match the route manifest.");
  console.error("Run `npm run generate:routes` and commit the result.");
  process.exit(1);
}
console.log("check:generated-routes OK — vercel.json matches the route manifest.");
