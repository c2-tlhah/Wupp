# Wupp website

A React and Vite website for the Wupp Android companion app. It builds six real HTML pages, so direct links work on a static host without a router fallback.

## Pages

- `/` — overview and interactive privacy illustration
- `/features/` — searchable catalog of app features
- `/guide/` — installation, QR and phone-code linking, and common questions
- `/releases/` — stable and preview releases
- `/download/` — APK choice, file hashes, and installation guidance
- `/about/` — architecture, local data, safeguards, and project limits

## Run

```powershell
cd frontend
npm ci
npm run dev
```

Open the local URL printed by Vite. Build with `npm run build`, then serve `frontend/dist/` as the site root on any static host. The build renders each React page into HTML so crawlers can read the page before JavaScript runs. React hydrates that HTML for the interactive controls.

The build writes canonical tags, a sitemap, and robots.txt for `https://wuppp.vercel.app`. If the production domain changes, set `SITE_URL` to the new HTTPS origin before building. Keep Vercel's Root Directory at `frontend`, Framework Preset at Vite, and Output Directory at `dist`. After deployment, submit `https://wuppp.vercel.app/sitemap.xml` in Google Search Console.

The root-level IndexNow key file lets the site prove ownership when notifying participating search engines. Run `npm run submit:indexnow` only after the deployment is live; the script checks the key file before submitting the six page URLs. Submission does not guarantee indexing.

The release and download pages read GitHub's public releases API. When that request is unavailable, the site shows bundled stable-release notes and sends download choices to the latest Releases page. Example chat names and the privacy controls on the home page are illustrations; they never access an account.

Content was checked against the Android source, `README.md`, `ARCHITECTURE.md`, `CHANGELOG.md`, and the published v0.3.8 GitHub release. The site uses Wupp's existing app logo, system fonts, and original CSS illustrations.
