import { useState } from "react";
import { External, PageHeading, route } from "../components";
import {
  formatDate,
  fallbackHistory,
  releaseLink,
  releaseSummary,
  useReleases,
} from "../github";
import { links, stableHighlights } from "../content";

function ReleaseEntry({ release, latest = false }) {
  const summary = releaseSummary(release);
  const preview = release.prerelease;
  return (
    <article className="release-entry">
      <div className="entry-meta">
        <span className={preview ? "entry-type preview" : "entry-type"}>
          {latest ? "Latest stable" : preview ? "Preview build" : "Stable"}
        </span>
        <time dateTime={release.published_at?.slice(0, 10)}>
          {formatDate(release.published_at)}
        </time>
      </div>
      <div className="entry-body">
        <div className="entry-title">
          <span>{release.tag_name.replace(/^v/, "")}</span>
          <h3>{preview ? "A build for early testing" : summary.title}</h3>
        </div>
        {preview ? (
          <p>
            Preview builds may change quickly. Check the release notes for
            fixes, testing details, and known limits.
          </p>
        ) : (
          <ul>
            {summary.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        )}
        <External className="under-link" href={releaseLink(release)}>
          Read release notes
        </External>
      </div>
    </article>
  );
}

export function Releases() {
  const { releases, latest, loading, offline } = useReleases();
  const [filter, setFilter] = useState("stable");
  const [limit, setLimit] = useState(6);
  const stable = releases.filter((release) => !release.prerelease);
  const historical = stableHighlights
    .filter((item) => !stable.some((release) => release.tag_name === item.tag))
    .map((item) =>
      fallbackHistory().find((release) => release.tag_name === item.tag),
    );
  const collection =
    filter === "stable"
      ? [...stable, ...historical].sort(
          (a, b) => new Date(b.published_at) - new Date(a.published_at),
        )
      : releases.filter((release) => release.prerelease);
  const shown = collection.slice(0, limit);
  const latestSummary = releaseSummary(latest);

  return (
    <>
      <section className="release-hero page-hero">
        <div className="layout-width release-hero-grid">
          <PageHeading
            kind="A living project"
            title="What’s new with Wupp."
            lead="Each release makes daily messaging a little steadier, clearer, or more personal. Here’s the story so far."
          />
          <div className="release-stamp">
            <span>Current stable</span>
            <strong>{latest.tag_name.replace(/^v/, "")}</strong>
            <small>{formatDate(latest.published_at)}</small>
          </div>
        </div>
      </section>
      <section className="release-feature layout-width">
        <div className="release-feature-number">
          <span>Latest stable release</span>
          <strong>{latest.tag_name.replace(/^v/, "")}</strong>
          <small>{formatDate(latest.published_at)}</small>
        </div>
        <div>
          <span className="small-heading">Now available</span>
          <h2>{latestSummary.title}</h2>
          <ul>
            {latestSummary.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <External className="button light" href={releaseLink(latest)}>
            See this release on GitHub
          </External>
        </div>
      </section>
      <section
        className="release-history layout-width"
        aria-labelledby="history-title"
      >
        <div className="history-head">
          <div>
            <span className="small-heading">The release shelf</span>
            <h2 id="history-title">Browse earlier builds.</h2>
            <p>
              Stable releases are for everyday use. Preview builds are for
              people who want to test what’s next.
            </p>
          </div>
          <div
            className="release-filter"
            role="group"
            aria-label="Release type"
          >
            <button
              type="button"
              aria-pressed={filter === "stable"}
              onClick={() => {
                setFilter("stable");
                setLimit(6);
              }}
            >
              Stable releases
            </button>
            <button
              type="button"
              aria-pressed={filter === "preview"}
              onClick={() => {
                setFilter("preview");
                setLimit(6);
              }}
            >
              Preview builds
            </button>
          </div>
        </div>
        {offline && (
          <p className="data-note">
            GitHub release data is unavailable right now. Showing the release
            notes bundled with this website.
          </p>
        )}
        {loading && (
          <p className="data-note">Checking GitHub for newer releases…</p>
        )}
        {shown.length ? (
          <div className="release-list">
            {shown.map((release) => (
              <ReleaseEntry
                key={release.tag_name}
                release={release}
                latest={
                  release.tag_name === latest.tag_name && !release.prerelease
                }
              />
            ))}
          </div>
        ) : (
          <div className="release-empty">
            <h3>No preview list right now.</h3>
            <p>Open GitHub Releases to see all available builds.</p>
            <External className="under-link" href={links.releases}>
              See all releases
            </External>
          </div>
        )}
        {collection.length > shown.length && (
          <button
            className="show-more"
            type="button"
            onClick={() => setLimit((value) => value + 6)}
          >
            Show more releases
          </button>
        )}
      </section>
      <section className="release-next">
        <div className="layout-width">
          <h2>Want the full change history?</h2>
          <p>
            The project changelog includes every published build and the details
            behind each fix.
          </p>
          <External className="button primary" href={links.changelog}>
            Read the full changelog
          </External>
          <a className="under-link" href={route("download/")}>
            Get the latest stable APK
          </a>
        </div>
      </section>
    </>
  );
}
