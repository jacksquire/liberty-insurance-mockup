import { writeFile } from "node:fs/promises";
import { createRequire } from "node:module";

const require = createRequire(
  "/Users/Work/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/package.json"
);
const { chromium } = require("playwright");

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({
  viewport: { width: 1440, height: 1200 },
  deviceScaleFactor: 1,
});

await page.goto("http://127.0.0.1:8000", { waitUntil: "networkidle" });
await page.screenshot({ path: "liberty-desktop.png", fullPage: true });

await page.setViewportSize({ width: 390, height: 1200 });
await page.goto("http://127.0.0.1:8000", { waitUntil: "networkidle" });
await page.screenshot({ path: "liberty-mobile.png", fullPage: true });

const audit = await page.evaluate(() => {
  const width = document.documentElement.clientWidth;
  const overflowing = [...document.querySelectorAll("body *")]
    .filter((element) => {
      const rect = element.getBoundingClientRect();
      return rect.width > 0 && rect.right > width + 1;
    })
    .map((element) => ({
      tag: element.tagName.toLowerCase(),
      className: element.className,
      right: Math.round(element.getBoundingClientRect().right),
    }))
    .slice(0, 10);

  return {
    title: document.title,
    height: document.documentElement.scrollHeight,
    overflowing,
  };
});

await writeFile("render-audit.json", JSON.stringify(audit, null, 2));
await browser.close();
