import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import React from "react";
import { renderToString } from "react-dom/server";
import { createServer } from "vite";

const site = new URL(process.env.SITE_URL || "https://wuppp.vercel.app");
if (
  site.protocol !== "https:" ||
  site.pathname !== "/" ||
  site.search ||
  site.hash
) {
  throw new Error(
    "SITE_URL must be an HTTPS origin, for example https://wuppp.vercel.app",
  );
}
const origin = site.origin;
const image = `${origin}/assets/wupp-logo.png`;
const pages = [
  {
    path: "",
    component: "Home",
    title: "Wupp | Android Companion App with Privacy and Local History",
    description:
      "Wupp is an independent Android companion for your existing WhatsApp account. Explore Ghost Mode, anti-delete, edit history, status saving, and more.",
  },
  {
    path: "features/",
    component: "Features",
    title: "Wupp Features | Ghost Mode, Anti-Delete, Edit History and More",
    description:
      "Explore Wupp's Android features: privacy controls, anti-delete, edit history, status and chat media downloads, calls, Material 3 Expressive, and themes.",
  },
  {
    path: "guide/",
    component: "Guide",
    title: "Set Up Wupp | Android Install and Account Linking Guide",
    description:
      "Learn how to install Wupp on an arm64-v8a Android phone and link your existing account with a QR code or phone number link code.",
  },
  {
    path: "releases/",
    component: "Releases",
    title: "Wupp Releases | Android App Updates and Changelog",
    description:
      "Read Wupp's latest stable and preview release notes, including Android app features, fixes, and links to the full GitHub changelog.",
  },
  {
    path: "download/",
    component: "Download",
    title: "Download Wupp for Android | Official GitHub APK",
    description:
      "Download the latest Wupp Android APK from the project's GitHub releases. Choose an arm64-v8a or universal package and check its SHA-256 hash.",
  },
  {
    path: "about/",
    component: "About",
    title: "About Wupp | Independent Android Companion App",
    description:
      "Learn how Wupp works as a linked Android companion, what stays on your phone, and the limits and risks of using an independent client.",
  },
];

const escapeHtml = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;");

function structuredData(page, url) {
  if (page.path) return "";
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${url}#website`,
        name: "Wupp",
        url,
        description: page.description,
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${url}#app`,
        name: "Wupp",
        url,
        image,
        description: page.description,
        applicationCategory: "CommunicationApplication",
        operatingSystem: "Android 8.0 or newer (arm64-v8a)",
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        downloadUrl: "https://github.com/hanzalaramz/Wupp/releases/latest",
      },
    ],
  };
  return `<script type="application/ld+json">${JSON.stringify(data).replaceAll("<", "\\u003c")}</script>`;
}

function headTags(page, url) {
  return [
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="Wupp" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:title" content="${escapeHtml(page.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(page.description)}" />`,
    `<meta property="og:image" content="${image}" />`,
    `<meta name="twitter:card" content="summary" />`,
    `<meta name="twitter:title" content="${escapeHtml(page.title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(page.description)}" />`,
    `<meta name="twitter:image" content="${image}" />`,
    structuredData(page, url),
  ]
    .filter(Boolean)
    .join("\n    ");
}

const vite = await createServer({
  appType: "custom",
  logLevel: "error",
  server: { middlewareMode: true },
});

try {
  const { Layout } = await vite.ssrLoadModule("/src/components.jsx");
  for (const page of pages) {
    const module = await vite.ssrLoadModule(`/src/pages/${page.component}.jsx`);
    const Page = module[page.component];
    const body = renderToString(
      React.createElement(
        Layout,
        { current: page.path },
        React.createElement(Page),
      ),
    );
    const file = resolve("dist", page.path, "index.html");
    let html = await readFile(file, "utf8");
    if (!html.includes('<div id="root"></div>')) {
      throw new Error(`Missing React root in ${file}`);
    }
    const url = `${origin}/${page.path}`;
    html = html
      .replace(/\s*<meta\s+property="og:(?:title|description)"[\s\S]*?\/>/g, "")
      .replace(
        /<title>[\s\S]*?<\/title>/,
        `<title>${escapeHtml(page.title)}</title>\n    ${headTags(page, url)}`,
      )
      .replace(
        /<meta\s+name="description"\s+content="[^"]*"\s*\/>/,
        `<meta name="description" content="${escapeHtml(page.description)}" />`,
      )
      .replace('<div id="root"></div>', `<div id="root">${body}</div>`);
    await writeFile(file, html);
  }

  const urls = pages
    .map((page) => `  <url><loc>${origin}/${page.path}</loc></url>`)
    .join("\n");
  await writeFile(
    resolve("dist", "sitemap.xml"),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
  );
  await writeFile(
    resolve("dist", "robots.txt"),
    `User-agent: *\nAllow: /\n\nSitemap: ${origin}/sitemap.xml\n`,
  );
  await writeFile(
    resolve("dist", "llms.txt"),
    `# Wupp

Wupp is an independent, open-source Android companion app for an existing WhatsApp account. It links through the primary app's Linked devices feature. It is not affiliated with WhatsApp or Meta.

## Official pages

- [Home](${origin}/): What Wupp is and its main privacy, history, and design choices.
- [Features](${origin}/features/): The current feature catalog, including anti-delete, edit history, status saving, chat media downloads, calling, and Material 3 Expressive.
- [Get started](${origin}/guide/): Android requirements and QR or phone-code linking steps.
- [Releases](${origin}/releases/): Stable and preview release notes.
- [Download](${origin}/download/): APK choices and file hash guidance.
- [About](${origin}/about/): Architecture, local data, safeguards, and limitations.
- [Source code](https://github.com/hanzalaramz/Wupp): Android app source and issue tracker.

## Key limits

The current APKs require Android 8.0 or newer on an arm64-v8a phone. Keep the official app installed and signed in on the primary phone. Video calling is beta. An unofficial companion client can carry account restriction risk.
`,
  );
  console.log(`Prerendered ${pages.length} pages for ${origin}`);
} finally {
  await vite.close();
}
