import type { ReactNode } from "react";

type HtmlDocumentProps = {
  children: ReactNode;
  scriptSrc: string;
  styleHrefs: string[];
};

export function HtmlDocument({ children, scriptSrc, styleHrefs }: HtmlDocumentProps) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#0f172a" />
        <meta name="impact-site-verification" content="ffa22a46-dcea-4025-8480-99175cad749b" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        {styleHrefs.map((href) => <link key={href} rel="stylesheet" href={href} precedence="default" />)}
      </head>
      <body>
        <div id="root">{children}</div>
        <script type="module" src={scriptSrc} />
      </body>
    </html>
  );
}
