// Prerender delle pagine pubbliche: dopo `vite build` apre ogni pagina in Chrome
// (headless, prefers-reduced-motion) e salva l'HTML già disegnato in dist/.
// Così motori e crawler AI leggono testo, H1, meta e JSON-LD senza eseguire JS.
// React poi riparte da zero (createRoot), quindi non c'è hydration da allineare.
import { preview } from "vite";
import { chromium } from "playwright-core";
import { writeFileSync, mkdirSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const dist = resolve(rootDir, "dist");

// "/" per ultima: finché non è sovrascritta, il fallback del server resta l'index.html di Vite.
const ROUTES = [
  { path: "/faq", out: "faq/index.html" },
  { path: "/privacy", out: "privacy/index.html" },
  { path: "/cookies", out: "cookies/index.html" },
  { path: "/lavori/terrazza-partenopea", out: "lavori/terrazza-partenopea/index.html" },
  { path: "/pagina-non-esistente", out: "404.html" },
  { path: "/", out: "index.html" },
];

const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

const server = await preview({ root: rootDir, logLevel: "warn", preview: { port: 4179, strictPort: true } });
const base = "http://localhost:4179";
const browser = await chromium.launch(existsSync(CHROME) ? { executablePath: CHROME } : {});
const context = await browser.newContext({ viewport: { width: 1440, height: 900 }, reducedMotion: "reduce" });

try {
  for (const r of ROUTES) {
    const page = await context.newPage();
    await page.goto(base + r.path, { waitUntil: "networkidle" });
    await page.waitForTimeout(1500);
    const html = await page.evaluate(() => {
      // Con React 19 i tag di Helmet vengono portati nell'head accanto a quelli di
      // index.html: tieni una sola copia. Il <title> della pagina React lo mette per
      // primo; meta e canonical della pagina arrivano dopo quelli di index.html.
      const titles = [...document.head.querySelectorAll("title")];
      titles.slice(1).forEach((el) => el.remove());
      const groups = new Map();
      for (const el of document.head.querySelectorAll('meta[name], meta[property], link[rel="canonical"]')) {
        const key = el.getAttribute("name") || el.getAttribute("property") || "canonical";
        if (key === "viewport") continue;
        if (!groups.has(key)) groups.set(key, []);
        groups.get(key).push(el);
      }
      for (const els of groups.values()) els.slice(0, -1).forEach((el) => el.remove());
      return "<!doctype html>\n" + document.documentElement.outerHTML;
    });
    if (!/<h1[\s>]/i.test(html)) throw new Error(`Nessun H1 in ${r.path}`);
    const file = resolve(dist, r.out);
    mkdirSync(dirname(file), { recursive: true });
    writeFileSync(file, html);
    console.log(`prerender ${r.path} → dist/${r.out}`);
    await page.close();
  }
} finally {
  await browser.close();
  await new Promise((ok) => server.httpServer.close(ok));
}
