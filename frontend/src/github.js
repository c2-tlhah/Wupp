import { useEffect, useState } from "react";
import { stableHighlights, links } from "./content";

const api =
  "https://api.github.com/repos/hanzalaramz/Wupp/releases?per_page=30";
const fallback = {
  tag_name: "v0.3.8",
  published_at: "2026-11-23T16:18:41Z",
  html_url: links.latest,
  assets: [],
};

function safeGithubUrl(value) {
  try {
    const url = new URL(value);
    return url.protocol === "https:" && url.hostname === "github.com"
      ? url.href
      : null;
  } catch {
    return null;
  }
}

export function useReleases() {
  const [state, setState] = useState({
    loading: true,
    releases: [],
    offline: false,
  });

  useEffect(() => {
    const controller = new AbortController();
    let active = true;
    const timer = setTimeout(() => controller.abort(), 7000);
    fetch(api, {
      headers: { Accept: "application/vnd.github+json" },
      signal: controller.signal,
    })
      .then((response) => {
        if (!response.ok) throw new Error(`GitHub returned ${response.status}`);
        return response.json();
      })
      .then((value) => {
        if (!Array.isArray(value)) throw new Error("Invalid release list");
        if (active)
          setState({
            loading: false,
            releases: value.filter(
              (release) => release.tag_name && !release.draft,
            ),
            offline: false,
          });
      })
      .catch(() => {
        if (active) setState({ loading: false, releases: [], offline: true });
      })
      .finally(() => clearTimeout(timer));
    return () => {
      active = false;
      clearTimeout(timer);
      controller.abort();
    };
  }, []);

  const latest =
    state.releases.find((release) => !release.prerelease) || fallback;
  return { ...state, latest };
}

export function releaseAsset(release, kind) {
  const expression =
    kind === "arm64"
      ? /arm64-v8a\.apk$/i
      : kind === "universal"
        ? /universal\.apk$/i
        : /^SHA256SUMS\.txt$/i;
  const asset = release.assets?.find((item) => expression.test(item.name));
  return safeGithubUrl(asset?.browser_download_url) || links.latest;
}

export function releaseLink(release) {
  return safeGithubUrl(release?.html_url) || links.latest;
}

export function releaseSummary(release) {
  const known = stableHighlights.find((item) => item.tag === release.tag_name);
  return (
    known || {
      title: "See what changed in this build",
      points: [
        "Read the release notes for the latest changes, fixes, and device details.",
      ],
    }
  );
}

export function formatDate(value) {
  if (!value) return "Date unavailable";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "Date unavailable";
  return new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}

export function fallbackHistory() {
  return stableHighlights.map((item) => ({
    tag_name: item.tag,
    published_at: `${item.date}T12:00:00Z`,
    html_url: `${links.releases}/tag/${item.tag}`,
    prerelease: false,
  }));
}
