import { useEffect, useState } from "react";
import { External, FaqList, PageHeading, route } from "../components";
import { faqs, links } from "../content";
import { queryValue, updateQuery } from "../query";

export function Guide() {
  const [method, setMethod] = useState("qr");
  useEffect(() => {
    if (queryValue("method") === "code") setMethod("code");
  }, []);
  const chooseMethod = (value) => {
    setMethod(value);
    updateQuery("method", value === "qr" ? "" : value);
  };
  return (
    <>
      <section className="guide-hero page-hero">
        <div className="layout-width guide-hero-grid">
          <PageHeading
            kind="Before your first chat"
            title="Link Wupp to your account."
            lead="Wupp links to the account you already use. Your primary phone stays in charge, and setup takes just a few clear steps."
          />
          <div className="guide-hero-art" aria-hidden="true">
            <div className="guide-phone">
              <div>Primary phone</div>
              <span>Linked devices</span>
              <strong>Link a device</strong>
              <i>⌁</i>
            </div>
            <div className="guide-connector"></div>
            <div className="guide-wupp">
              <span>W</span>
              <strong>Wupp</strong>
              <small>Ready to link</small>
            </div>
          </div>
        </div>
      </section>
      <section className="guide-prereq layout-width">
        <div>
          <span className="small-heading">First, a quick check</span>
          <h2>What you’ll need</h2>
        </div>
        <ul>
          <li>An arm64-v8a Android phone running 8.0 or newer</li>
          <li>
            The official app installed and signed in on your primary phone
          </li>
          <li>A connection on both phones while linking</li>
          <li>The latest Wupp APK from GitHub Releases</li>
        </ul>
        <a className="under-link" href={route("download/")}>
          Choose an APK
        </a>
      </section>
      <section
        className="guide-steps layout-width"
        aria-labelledby="setup-title"
      >
        <div className="guide-steps-heading">
          <span className="small-heading">The setup path</span>
          <h2 id="setup-title">From download to first chat.</h2>
          <p>
            Follow these in order. You can return to the official app whenever
            Wupp asks for a primary-phone action.
          </p>
        </div>
        <div className="setup-timeline">
          <article>
            <span className="timeline-number">1</span>
            <div>
              <h3>Install the APK</h3>
              <p>
                Download a build from the latest stable release. Both current
                APKs need an arm64-v8a phone. Open the file and allow your
                browser or file manager to install it when Android asks.
              </p>
              <a href={route("download/")}>Compare the builds</a>
            </div>
          </article>
          <article>
            <span className="timeline-number">2</span>
            <div>
              <h3>Finish first-launch setup</h3>
              <p>
                Wupp walks you through notification, media, and
                background-running permissions. Battery restrictions can stop
                live messages, so follow the in-app guide if alerts are delayed.
              </p>
            </div>
          </article>
          <article>
            <span className="timeline-number">3</span>
            <div>
              <h3>Choose how to link</h3>
              <p>
                On Wupp’s login screen, choose a QR code or a phone number link
                code. Then use Linked devices in your primary app.
              </p>
              <div
                className="method-tabs"
                role="group"
                aria-label="Linking method"
              >
                <button
                  type="button"
                  aria-pressed={method === "qr"}
                  aria-controls="method-panel"
                  onClick={() => chooseMethod("qr")}
                >
                  Scan a QR code
                </button>
                <button
                  type="button"
                  aria-pressed={method === "code"}
                  aria-controls="method-panel"
                  onClick={() => chooseMethod("code")}
                >
                  Use a phone code
                </button>
              </div>
              <div className="method-panel" id="method-panel">
                {method === "qr" ? (
                  <>
                    <strong>With a QR code</strong>
                    <ol>
                      <li>Keep the QR code open in Wupp.</li>
                      <li>
                        Open the official app on your primary phone and go to
                        Linked devices.
                      </li>
                      <li>Tap Link a device and scan Wupp’s code.</li>
                    </ol>
                  </>
                ) : (
                  <>
                    <strong>With a phone number code</strong>
                    <ol>
                      <li>
                        Choose phone number linking in Wupp and enter your
                        account number.
                      </li>
                      <li>
                        Open Linked devices in the official app and choose the
                        phone-number linking option.
                      </li>
                      <li>Enter the code shown in Wupp before it expires.</li>
                    </ol>
                  </>
                )}
              </div>
            </div>
          </article>
          <article>
            <span className="timeline-number">4</span>
            <div>
              <h3>Let the first sync finish</h3>
              <p>
                Chats and contacts can take a moment to appear. Wupp spaces out
                background requests to avoid bursts. Once the header shows a
                live connection, you’re ready.
              </p>
            </div>
          </article>
        </div>
      </section>
      <section className="guide-boundaries">
        <div className="layout-width boundaries-grid">
          <div>
            <span className="small-heading">
              Your primary phone still matters
            </span>
            <h2>A companion, not a replacement.</h2>
            <p>
              Keep the official app installed. It remains the account holder and
              is still needed for verification and new chats with unknown
              numbers.
            </p>
          </div>
          <div className="boundary-list">
            <div>
              <strong>14-day check-in</strong>
              <p>
                Linked devices need the primary phone to check in. Wupp warns
                you before the window runs out.
              </p>
            </div>
            <div>
              <strong>New numbers</strong>
              <p>
                Start a first chat with an unknown number on your primary phone.
                Wupp blocks that first send when it has no local history.
              </p>
            </div>
            <div>
              <strong>Device support</strong>
              <p>
                The current native engine needs a 64-bit ARM phone. The
                Universal APK does not add 32-bit or x86 support.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        className="guide-faq layout-width"
        aria-labelledby="guide-faq-title"
      >
        <div>
          <span className="small-heading">Good to know</span>
          <h2 id="guide-faq-title">A few things people ask.</h2>
          <p>
            Still stuck? The project’s Discussions are a good place for setup
            questions.
          </p>
          <External className="under-link" href={links.discussions}>
            Visit community discussions
          </External>
        </div>
        <FaqList subset={faqs} />
      </section>
    </>
  );
}
