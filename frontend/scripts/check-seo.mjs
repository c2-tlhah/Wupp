import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

const origin = new URL(process.env.SITE_URL || "https://wuppp.vercel.app")
  .origin;
const paths = ["", "features/", "guide/", "releases/", "download/", "about/"];
const urls = paths.map((path) => `${origin}/${path}`);

for (const [index, path] of paths.entries()) {
  const html = await readFile(resolve("dist", path, "index.html"), "utf8");
  assert.match(
    html,
    /<main id="main">/,
    `${path || "home"} has no rendered content`,
  );
  assert.equal(
    (html.match(/<h1(?:\s|>)/g) || []).length,
    1,
    `${path || "home"} needs one H1`,
  );
  assert.equal((html.match(/<meta name="description"/g) || []).length, 1);
  assert.equal((html.match(/rel="canonical"/g) || []).length, 1);
  assert.ok(
    html.includes(`href="${urls[index]}"`),
    `Wrong canonical for ${path}`,
  );
  assert.match(html, /<title>[^<]*Wupp[^<]*<\/title>/);
  assert.ok(
    html.length > 4_000,
    `${path || "home"} looks like an empty app shell`,
  );
  assert.doesNotMatch(html, /view[ -]?once/i, `Unsupported claim on ${path}`);
}

const home = await readFile(resolve("dist", "index.html"), "utf8");
const jsonLd = home.match(
  /<script type="application\/ld\+json">([^<]+)<\/script>/,
);
assert.ok(jsonLd, "Homepage structured data is missing");
const types = JSON.parse(jsonLd[1])["@graph"].map((item) => item["@type"]);
assert.deepEqual(types, ["WebSite", "SoftwareApplication"]);

const features = await readFile(
  resolve("dist", "features", "index.html"),
  "utf8",
);
for (const feature of [
  "Anti-delete archive",
  "Edit history",
  "Status saver",
  "Chat media downloads",
  "Material 3 Expressive",
]) {
  assert.ok(features.includes(feature), `Missing feature: ${feature}`);
}

const sitemap = await readFile(resolve("dist", "sitemap.xml"), "utf8");
for (const url of urls) assert.ok(sitemap.includes(`<loc>${url}</loc>`));
assert.equal((sitemap.match(/<url>/g) || []).length, paths.length);

const robots = await readFile(resolve("dist", "robots.txt"), "utf8");
assert.ok(robots.includes(`Sitemap: ${origin}/sitemap.xml`));
const llms = await readFile(resolve("dist", "llms.txt"), "utf8");
assert.ok(llms.includes(`${origin}/features/`));
const indexNowKey = "78f1ee749666daed5ffc39ea6db8815c";
assert.equal(
  (await readFile(resolve("dist", `${indexNowKey}.txt`), "utf8")).trim(),
  indexNowKey,
);

console.log(
  `SEO output checked: ${paths.length} rendered pages, metadata, schema, sitemap, robots.txt, llms.txt, IndexNow key`,
);
