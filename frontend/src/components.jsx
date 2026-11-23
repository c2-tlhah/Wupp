import { useState } from "react";
import { links, nav, faqs } from "./content";

const base = import.meta.env.BASE_URL;
export const route = (path = "") => `${base}${path}`;
export const logo = `${base}assets/wupp-logo.png`;

export function Brand() {
  return (
    <a className="brand" href={route()} aria-label="Wupp home">
      <img src={logo} alt="" width="38" height="38" />
      <span>
        Wupp<span className="brand-stop">.</span>
      </span>
    </a>
  );
}

export function Header({ current }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="header-inner">
        <Brand />
        <nav className="main-nav" aria-label="Main navigation">
          {nav.map((item) => (
            <a
              key={item.path}
              href={route(item.path)}
              aria-current={current === item.path ? "page" : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a className="header-cta" href={route("download/")}>
          Download Wupp
        </a>
        <button
          className="menu-button"
          type="button"
          aria-controls="mobile-navigation"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span></span>
          <span></span>
        </button>
      </div>
      <nav
        id="mobile-navigation"
        className="mobile-navigation"
        aria-label="Mobile navigation"
        hidden={!open}
      >
        {nav.map((item) => (
          <a
            key={item.path}
            href={route(item.path)}
            aria-current={current === item.path ? "page" : undefined}
          >
            {item.label}
          </a>
        ))}
        <a className="mobile-download" href={route("download/")}>
          Download Wupp
        </a>
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main layout-width">
        <div className="footer-intro">
          <Brand />
          <p>
            For the conversations you want to keep, and the moments you want to
            keep to yourself.
          </p>
        </div>
        <div className="footer-column">
          <strong>Explore</strong>
          <a href={route("features/")}>All features</a>
          <a href={route("guide/")}>Get started</a>
          <a href={route("releases/")}>Release notes</a>
          <a href={route("download/")}>Download</a>
        </div>
        <div className="footer-column">
          <strong>Project</strong>
          <a href={route("about/")}>About Wupp</a>
          <a href={links.repository} target="_blank" rel="noreferrer">
            Source on GitHub
          </a>
          <a href={links.discussions} target="_blank" rel="noreferrer">
            Discussions
          </a>
          <a href={links.issues} target="_blank" rel="noreferrer">
            Report an issue
          </a>
        </div>
      </div>
      <div className="footer-bottom layout-width">
        <span>
          © {new Date().getFullYear()} Wupp contributors · MIT license
        </span>
        <p>
          Independent project. Not affiliated with, sponsored by, or endorsed by
          WhatsApp LLC or Meta Platforms, Inc.
        </p>
        <a href="#top">Back to top</a>
      </div>
    </footer>
  );
}

export function Layout({ current, children }) {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div id="top">
        <Header current={current} />
        <main id="main">{children}</main>
        <Footer />
      </div>
    </>
  );
}

export function PageHeading({ kind, title, lead, children, className = "" }) {
  return (
    <div className={`page-heading ${className}`}>
      <span className="small-heading">{kind}</span>
      <h1>{title}</h1>
      <p>{lead}</p>
      {children}
    </div>
  );
}

export function FaqList({ subset = faqs }) {
  return (
    <div className="faq-list">
      {subset.map(([question, answer]) => (
        <details key={question}>
          <summary>
            {question}
            <span className="faq-plus" aria-hidden="true"></span>
          </summary>
          <p>{answer}</p>
        </details>
      ))}
    </div>
  );
}

export function PhonePreview({ compact = false }) {
  return (
    <div
      className={`phone-preview ${compact ? "phone-compact" : ""}`}
      aria-label="Illustrative Wupp chat preview"
      role="img"
    >
      <div className="phone-inner">
        <div className="phone-status">
          <span>9:41</span>
          <span>••• ▰</span>
        </div>
        <div className="phone-top">
          <strong>Chats</strong>
          <span>⌕ &nbsp; ⋮</span>
        </div>
        <div className="phone-filters">
          <b>All</b>
          <span>Unread</span>
          <span>Favorites</span>
        </div>
        <div className="phone-chat">
          <span className="avatar peach">M</span>
          <div>
            <strong>Maya</strong>
            <small>See you there 🌿</small>
          </div>
          <time>9:38</time>
        </div>
        <div className="phone-chat">
          <span className="avatar lavender">J</span>
          <div>
            <strong>Jules</strong>
            <small>That photo is perfect</small>
          </div>
          <time>Yesterday</time>
        </div>
        <div className="phone-chat">
          <span className="avatar yellow">✳</span>
          <div>
            <strong>Weekend plans</strong>
            <small>You: Saturday works for me</small>
          </div>
          <time>Yesterday</time>
        </div>
        <div className="phone-chat">
          <span className="avatar sage">A</span>
          <div>
            <strong>Amir</strong>
            <small>Voice message · 0:12</small>
          </div>
          <time>Tuesday</time>
        </div>
        <div className="phone-bottom">
          <span className="active">
            ▤<small>Chats</small>
          </span>
          <span>
            ◉<small>Updates</small>
          </span>
          <span>
            ♧<small>Calls</small>
          </span>
          <span>
            ⚙<small>Settings</small>
          </span>
        </div>
      </div>
    </div>
  );
}

export function External({ href, children, className = "" }) {
  return (
    <a
      className={className}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}
