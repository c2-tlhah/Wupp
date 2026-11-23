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

Open the local URL printed by Vite. Build with `npm run build`, then serve `frontend/dist/` as the site root on any static host.

The release and download pages read GitHub's public releases API. When that request is unavailable, the site shows bundled stable-release notes and sends download choices to the latest Releases page. Example chat names and the privacy controls on the home page are illustrations; they never access an account.

Content was checked against the Android source, `README.md`, `ARCHITECTURE.md`, `CHANGELOG.md`, and the published v0.3.8 GitHub release. The site uses Wupp's existing app logo, system fonts, and original CSS illustrations.
