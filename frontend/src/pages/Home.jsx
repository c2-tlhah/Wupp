import { useState } from "react";
import { External, PhonePreview, route } from "../components";
import { useReleases } from "../github";
import { links } from "../content";

function Switch({ label, hint, checked, onChange }) {
  return (
    <label className="lab-switch">
      <span>
        <strong>{label}</strong>
        <small>{hint}</small>
      </span>
      <input
        type="checkbox"
        name={label.toLowerCase().replaceAll(" ", "-")}
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
      />
      <span className="switch-track" aria-hidden="true"></span>
    </label>
  );
}

function PrivacyLab() {
  const [read, setRead] = useState(true);
  const [typing, setTyping] = useState(false);
  const [played, setPlayed] = useState(false);
  return (
    <section className="lab-section" aria-labelledby="lab-title">
      <div className="layout-width lab-grid">
        <div className="lab-copy">
          <span className="small-heading">Try the idea</span>
          <h2 id="lab-title">
            The same chat.
            <br />
            Your own rules.
          </h2>
          <p>
            This little preview shows the kind of choices Wupp gives you for
            each conversation. Tap a switch to see what changes.
          </p>
          <div className="lab-controls">
            <div className="lab-person">
              <span className="avatar peach">M</span>
              <div>
                <strong>Privacy for Maya</strong>
                <small>Example conversation</small>
              </div>
            </div>
            <Switch
              label="Send read receipts"
              hint="Blue ticks when you read"
              checked={read}
              onChange={setRead}
            />
            <Switch
              label="Show typing"
              hint="Let this chat see you type"
              checked={typing}
              onChange={setTyping}
            />
            <Switch
              label="Send played receipts"
              hint="When you play a voice note"
              checked={played}
              onChange={setPlayed}
            />
          </div>
          <p className="lab-disclaimer">
            Interactive illustration only. These switches do not connect to your
            account.
          </p>
        </div>
        <div className="lab-stage">
          <div className="lab-thread">
            <div className="thread-head">
              <span className="avatar peach">M</span>
              <div>
                <strong>Maya</strong>
                <small>{typing ? "typing…" : "last seen recently"}</small>
              </div>
            </div>
            <div className="thread-time">Today</div>
            <div className="bubble incoming">See you there 🌿</div>
            <div className="bubble outgoing">
              I’ll be there in ten.<span>{read ? "✓✓" : "✓"} · 9:38</span>
            </div>
            <div className="voice-line">
              <span className="voice-play">▶</span>
              <i></i>
              <b>{played ? "Played" : "Voice note"}</b>
            </div>
            <div className="thread-note">
              {read
                ? "Read receipts are on for this chat."
                : "Read receipts are hidden for this chat."}
            </div>
          </div>
          <span className="lab-scribble">
            A choice for one chat
            <br />
            doesn’t have to be for all.
          </span>
        </div>
      </div>
    </section>
  );
}

export function Home() {
  const { latest } = useReleases();
  return (
    <>
      <section className="home-hero">
        <div className="layout-width hero-grid">
          <div className="hero-copy">
            <span className="small-heading">
              <span className="live-dot"></span> Independent Android companion
            </span>
            <h1>Make room for your kind of messaging.</h1>
            <p className="hero-lead">
              The people stay the same. You get more say in how you show up,
              what you keep, and how your chats feel.
            </p>
            <div className="action-row">
              <a className="button primary" href={route("download/")}>
                Download Wupp
              </a>
              <a className="under-link" href={route("features/")}>
                Explore what it does
              </a>
            </div>
            <p className="hero-fine">
              Android 8.0+ on arm64-v8a <span></span> Free and open source{" "}
              <span></span> Linked to your existing account
            </p>
          </div>
          <div className="hero-scene">
            <div className="scene-arc arc-a"></div>
            <div className="scene-arc arc-b"></div>
            <PhonePreview />
            <div className="floating-setting">
              <span className="setting-glyph">◌</span>
              <div>
                <strong>Ghost Read</strong>
                <small>Just for this chat</small>
              </div>
              <span className="little-on"></span>
            </div>
            <span className="hero-hand">
              Here when you want.
              <br />
              Quiet when you don’t.
            </span>
          </div>
        </div>
      </section>
      <div className="home-proof">
        <div className="layout-width proof-inner">
          <p>
            One linked account. <strong>More room to make it yours.</strong>
          </p>
          <div>
            <span>Privacy by chat</span>
            <span>History on your phone</span>
            <span>Android native</span>
          </div>
        </div>
      </div>
      <PrivacyLab />
      <section
        className="home-stories layout-width"
        aria-labelledby="stories-title"
      >
        <div className="stories-title">
          <span className="small-heading">Thoughtful in the details</span>
          <h2 id="stories-title">For the things you’d rather keep close.</h2>
        </div>
        <div className="story-row">
          <div className="story-illustration archive-art">
            <div className="archive-sheet">
              <span>Message history</span>
              <strong>That message changed.</strong>
              <p>Original: “See you at six.”</p>
              <p>Edited: “See you at seven.”</p>
              <small>Saved on this phone</small>
            </div>
            <div className="archive-seal">↶</div>
          </div>
          <div className="story-copy">
            <span className="small-heading">01 / Remember</span>
            <h3>What was said stays in reach.</h3>
            <p>
              Wupp keeps a local message archive. You can look back at edited
              messages and keep a record of deleted or disappearing ones when
              those options are on.
            </p>
            <a className="under-link" href={route("features/#privacy")}>
              See privacy & history
            </a>
          </div>
        </div>
        <div className="story-row reverse">
          <div className="story-illustration vault-art">
            <div className="vault-wall">
              <div className="tile portrait">✳</div>
              <div className="tile sky">☼</div>
              <div className="tile leaf">❋</div>
              <div className="tile note">♪</div>
            </div>
            <span className="vault-tag">Saved locally</span>
          </div>
          <div className="story-copy">
            <span className="small-heading">02 / Save</span>
            <h3>A place for the things people send.</h3>
            <p>
              Saved statuses, profile photos, and call recordings have their own
              folders in the Media Vault. Chat media can be downloaded to your
              phone, with a separate choice for gallery visibility.
            </p>
            <a className="under-link" href={route("features/#media")}>
              Explore media tools
            </a>
          </div>
        </div>
        <div className="story-row">
          <div className="story-illustration look-art">
            <div className="look-panel">
              <div className="look-circles">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <strong>Make it yours</strong>
              <p>Theme · wallpaper · type</p>
              <div className="look-message">A little more you.</div>
            </div>
          </div>
          <div className="story-copy">
            <span className="small-heading">03 / Make it yours</span>
            <h3>Familiar, with your fingerprints on it.</h3>
            <p>
              Material 3 Expressive motion, frosted surfaces, themes, chat
              wallpapers, font controls, and Sticker Studio make the app feel
              personal without changing who you talk to.
            </p>
            <a className="under-link" href={route("features/#appearance")}>
              Explore the look & feel
            </a>
          </div>
        </div>
      </section>
      <section className="home-next">
        <div className="layout-width next-grid">
          <div>
            <span className="small-heading">Start with what you have</span>
            <h2>Your primary phone stays in charge.</h2>
            <p>
              Wupp links as a companion. Keep the official app installed and
              signed in, then connect with a QR code or phone number link code.
            </p>
            <a className="button light" href={route("guide/")}>
              See the setup guide
            </a>
          </div>
          <div className="next-steps">
            <div>
              <span>1</span>
              <strong>Keep your main app</strong>
              <p>Your existing account stays on your primary phone.</p>
            </div>
            <div>
              <span>2</span>
              <strong>Install Wupp</strong>
              <p>Choose the APK that fits your Android device.</p>
            </div>
            <div>
              <span>3</span>
              <strong>Link your account</strong>
              <p>Use Linked devices in the official app.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="home-news layout-width">
        <div>
          <span className="small-heading">From the workbench</span>
          <h2>Wupp keeps moving.</h2>
          <p>
            The latest stable release is{" "}
            <strong>{latest.tag_name.replace(/^v/, "")}</strong>. See what
            changed and what got smoother.
          </p>
          <a className="under-link" href={route("releases/")}>
            Read what changed
          </a>
        </div>
        <div className="news-mark">
          <span>Latest stable</span>
          <strong>{latest.tag_name.replace(/^v/, "")}</strong>
          <External href={links.latest}>See release on GitHub</External>
        </div>
      </section>
    </>
  );
}
