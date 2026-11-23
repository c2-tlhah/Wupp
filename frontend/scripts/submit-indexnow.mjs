const key = "78f1ee749666daed5ffc39ea6db8815c";
const site = new URL(process.env.SITE_URL || "https://wuppp.vercel.app");
if (
  site.protocol !== "https:" ||
  site.pathname !== "/" ||
  site.search ||
  site.hash
) {
  throw new Error("SITE_URL must be an HTTPS origin");
}

const keyLocation = `${site.origin}/${key}.txt`;
const keyResponse = await fetch(keyLocation);
if (!keyResponse.ok || (await keyResponse.text()).trim() !== key) {
  throw new Error(`IndexNow key file is not live at ${keyLocation}`);
}

const paths = ["", "features/", "guide/", "releases/", "download/", "about/"];
const urlList = paths.map((path) => `${site.origin}/${path}`);
const response = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host: site.hostname,
    key,
    keyLocation,
    urlList,
  }),
});

if (response.status !== 200 && response.status !== 202) {
  throw new Error(
    `IndexNow returned ${response.status}: ${await response.text()}`,
  );
}
console.log(
  `IndexNow received ${urlList.length} URLs (HTTP ${response.status}). This does not guarantee indexing.`,
);
