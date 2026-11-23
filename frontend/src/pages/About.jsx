import { External, PageHeading, route } from "../components";
import { links } from "../content";

export function About() {
  return (
    <>
      <section className="about-hero page-hero">
        <div className="layout-width about-hero-grid">
          <PageHeading
            kind="A little context"
            title="Wupp is a companion with its own point of view."
            lead="It brings your existing conversations into a native Android app with more personal controls. It is an independent open-source project, built alongside the official app."
          />
          <div className="about-art" aria-hidden="true">
            <div className="about-ribbon ribbon-one"></div>
            <div className="about-ribbon ribbon-two"></div>
            <span>W</span>
          </div>
        </div>
      </section>
      <section className="about-mission layout-width">
        <div>
          <span className="small-heading">Why it exists</span>
          <h2>A bit more choice in a familiar place.</h2>
        </div>
        <p>
          Some days you want to be easy to reach. Others, you want to read
          quietly, keep a record, or make your chat space feel more like home.
          Wupp puts those choices closer to hand while keeping the people and
          conversations you already have.
        </p>
      </section>
      <section className="about-how">
        <div className="layout-width">
          <div className="about-section-title">
            <span className="small-heading">How it works</span>
            <h2>One linked session. A lot happens on your phone.</h2>
            <p>
              Wupp uses a Rust bridge for the encrypted companion connection and
              a Kotlin and Jetpack Compose app for the Android interface.
            </p>
          </div>
          <div className="architecture-diagram">
            <div className="arch-box primary-phone">
              <span>01</span>
              <strong>Your primary phone</strong>
              <p>
                Holds the account, handles verification, and keeps the linked
                session active.
              </p>
            </div>
            <div className="arch-connector" aria-hidden="true">
              <span>Linked devices</span>
            </div>
            <div className="arch-box wupp-phone">
              <span>02</span>
              <strong>Wupp on Android</strong>
              <p>
                Shows chats, stores local history and media, and handles the
                companion connection.
              </p>
            </div>
            <div className="arch-connector" aria-hidden="true">
              <span>Encrypted protocol</span>
            </div>
            <div className="arch-box server-box">
              <span>03</span>
              <strong>WhatsApp servers</strong>
              <p>
                Carry messages, media, status updates, and calls for the linked
                account.
              </p>
            </div>
          </div>
          <div className="about-local-note">
            <strong>What stays on your phone</strong>
            <p>
              Decrypted chat history, downloaded media, session keys, and
              preferences are stored locally. Wupp says it sends no telemetry,
              analytics, or crash dumps to a developer server.
            </p>
          </div>
        </div>
      </section>
      <section className="about-safeguards layout-width">
        <div>
          <span className="small-heading">Connection care</span>
          <h2>Built to avoid noisy sync.</h2>
          <p>
            The app spaces out background work. These limits help with
            connection stability, but they do not make unofficial-client use
            risk-free.
          </p>
        </div>
        <div className="safeguard-list">
          <div>
            <strong>10-minute pause</strong>
            <p>Global contact, group, and channel sweeps have a cooldown.</p>
          </div>
          <div>
            <strong>Small avatar batches</strong>
            <p>
              UI avatar requests wait briefly, group together, and cache missing
              photos for hours.
            </p>
          </div>
          <div>
            <strong>Rate-limit backoff</strong>
            <p>Background loops pause when the server signals a rate limit.</p>
          </div>
          <div>
            <strong>Unknown-number guard</strong>
            <p>
              A first message to an unknown number is blocked when Wupp has no
              local chat history.
            </p>
          </div>
        </div>
      </section>
      <section className="about-honest">
        <div className="layout-width honest-grid">
          <div>
            <span className="small-heading">The honest part</span>
            <h2>Independent means there are trade-offs.</h2>
          </div>
          <div>
            <p>
              Wupp is not affiliated with WhatsApp or Meta. Using an unofficial
              companion client or privacy modifications may violate WhatsApp’s
              terms and can lead to account restrictions. Video calling is still
              beta and may be unstable.
            </p>
            <p>
              The primary app remains necessary for verification and first chats
              with unknown numbers. Keep it installed and check in regularly.
            </p>
            <a className="under-link" href={route("guide/")}>
              Read the setup guide
            </a>
          </div>
        </div>
      </section>
      <section className="about-open layout-width">
        <div>
          <span className="small-heading">Open by design</span>
          <h2>See the work for yourself.</h2>
          <p>
            Wupp is released under the MIT license. Read the source, inspect the
            connection notes, report a problem, or join a discussion.
          </p>
        </div>
        <div className="open-links">
          <External href={links.repository}>Source code</External>
          <External href={links.architecture}>Connection architecture</External>
          <External href={links.issues}>Report an issue</External>
          <External href={links.discussions}>Community discussions</External>
          <External href={links.license}>MIT license</External>
        </div>
      </section>
    </>
  );
}
