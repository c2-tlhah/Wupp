import { useEffect, useState } from "react";
import { PageHeading, route } from "../components";
import { featureGroups } from "../content";
import { queryValue, updateQuery } from "../query";

export function Features() {
  const [search, setSearch] = useState("");
  useEffect(() => setSearch(queryValue("q") || ""), []);
  const query = search.trim().toLowerCase();
  const visible = featureGroups
    .map((group) => ({
      ...group,
      items: group.items.filter(([title, description]) =>
        `${title} ${description}`.toLowerCase().includes(query),
      ),
    }))
    .filter((group) => group.items.length);
  const resultCount = visible.reduce(
    (total, group) => total + group.items.length,
    0,
  );

  const changeSearch = (value) => {
    setSearch(value);
    updateQuery("q", value.trim());
  };

  return (
    <>
      <section className="feature-intro page-hero">
        <div className="layout-width feature-intro-grid">
          <PageHeading
            kind="Everyday tools, in full"
            title="The details make it Wupp."
            lead="From the quiet privacy switches to the little chat shortcuts, here’s what the Android app can do."
          />
          <div className="feature-intro-art" aria-hidden="true">
            <div className="feature-loop"></div>
            <div className="feature-note top">
              <span>◌</span>
              <strong>Ghost Mode</strong>
              <small>Presence, your way</small>
            </div>
            <div className="feature-note bottom">
              <span>↶</span>
              <strong>Edit history</strong>
              <small>Earlier version saved</small>
            </div>
            <div className="feature-note side">
              <span>▦</span>
              <strong>Media Vault</strong>
              <small>On your phone</small>
            </div>
          </div>
        </div>
      </section>
      <section
        className="feature-featured layout-width"
        aria-label="Feature highlights"
      >
        <div>
          <span className="highlight-symbol">◌</span>
          <strong>Privacy that can change with the chat</strong>
          <p>
            Set global choices, then make an exception for one person or group.
          </p>
        </div>
        <div>
          <span className="highlight-symbol">↶</span>
          <strong>History that stays local</strong>
          <p>
            Anti-delete, edit history, and a searchable record of changed
            messages.
          </p>
        </div>
        <div>
          <span className="highlight-symbol">✳</span>
          <strong>Android with personality</strong>
          <p>Material 3 Expressive, themes, wallpapers, fonts, and stickers.</p>
        </div>
      </section>
      <section
        className="catalog-section layout-width"
        aria-labelledby="catalog-title"
      >
        <div className="catalog-heading">
          <div>
            <span className="small-heading">Feature directory</span>
            <h2 id="catalog-title">Find the thing you came for.</h2>
            <p>
              Search the catalog or browse by the part of the app you use most.
            </p>
          </div>
          <div className="feature-search">
            <label htmlFor="feature-query">Search features</label>
            <div>
              <span aria-hidden="true">⌕</span>
              <input
                id="feature-query"
                name="feature-search"
                type="search"
                autoComplete="off"
                placeholder="Try “anti-delete” or “Material”…"
                value={search}
                onChange={(event) => changeSearch(event.target.value)}
              />
            </div>
            <small aria-live="polite">
              {resultCount} {resultCount === 1 ? "feature" : "features"}{" "}
              {query ? "found" : "listed"}
            </small>
          </div>
        </div>
        <div className="catalog-layout">
          <nav className="catalog-nav" aria-label="Feature categories">
            {visible.map((group) => (
              <a key={group.id} href={`#${group.id}`}>
                {group.title}
              </a>
            ))}
          </nav>
          <div className="catalog-content">
            {visible.length ? (
              visible.map((group) => (
                <section
                  className={`feature-group group-${group.color}`}
                  id={group.id}
                  key={group.id}
                >
                  <div className="group-head">
                    <div>
                      <span className="group-mark" aria-hidden="true">
                        {group.id === "privacy"
                          ? "◌"
                          : group.id === "chats"
                            ? "▤"
                            : group.id === "media"
                              ? "▦"
                              : group.id === "calls"
                                ? "♧"
                                : group.id === "appearance"
                                  ? "✳"
                                  : "◎"}
                      </span>
                      <h3>{group.title}</h3>
                    </div>
                    <p>{group.lead}</p>
                  </div>
                  <div className="feature-items">
                    {group.items.map(([title, description]) => (
                      <article key={title}>
                        <h4>{title}</h4>
                        <p>{description}</p>
                      </article>
                    ))}
                  </div>
                </section>
              ))
            ) : (
              <div className="no-results">
                <h3>No features found for “{search}”</h3>
                <p>
                  Try a shorter word, or clear the search to see every feature.
                </p>
                <button type="button" onClick={() => changeSearch("")}>
                  Show all features
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
      <section className="feature-end">
        <div className="layout-width">
          <div>
            <span className="small-heading">A linked companion</span>
            <h2>Curious about the trade-offs?</h2>
            <p>
              Wupp offers extra controls, but it still depends on your primary
              app and an unofficial linked connection. Read the setup guide
              before you install.
            </p>
          </div>
          <a className="button primary" href={route("guide/")}>
            Read the setup guide
          </a>
        </div>
      </section>
    </>
  );
}
