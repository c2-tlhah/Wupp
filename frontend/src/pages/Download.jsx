import { useState } from "react";
import { External, PageHeading, route } from "../components";
import { formatDate, releaseAsset, releaseLink, useReleases } from "../github";
import { links } from "../content";

const options = [
  {
    key: "arm64",
    title: "64-bit ARM phone",
    detail: "arm64-v8a",
    description: "The smaller package for supported arm64-v8a phones.",
  },
  {
    key: "universal",
    title: "Universal package",
    detail: "Universal",
    description:
      "An alternative package. The current native engine still needs arm64-v8a.",
  },
];

function fileSize(bytes) {
  return bytes ? `${(bytes / 1048576).toFixed(1)} MB` : null;
}

export function Download() {
  const { latest, loading, offline } = useReleases();
  const [selected, setSelected] = useState("arm64");
  const choice = options.find((item) => item.key === selected);
  const asset = latest.assets?.find((item) =>
    (selected === "arm64" ? /arm64-v8a\.apk$/i : /universal\.apk$/i).test(
      item.name,
    ),
  );
  const downloadUrl = releaseAsset(latest, selected);
  const direct = Boolean(asset);

  return (
    <>
      <section className="download-hero page-hero">
        <div className="layout-width download-hero-grid">
          <PageHeading
            kind="Wupp for Android"
            title="Download Wupp for Android."
            lead="Choose the current stable build for your phone. Downloads come from the project’s GitHub release, with a file hash list alongside them."
          />
          <div className="download-hero-note">
            <span className="download-logo">W</span>
            <div>
              <strong>Free & open source</strong>
              <p>Android 8.0+ on arm64-v8a</p>
            </div>
          </div>
        </div>
      </section>
      <section
        className="download-main layout-width"
        aria-labelledby="download-heading"
      >
        <div className="download-lead">
          <span className="small-heading">Choose your build</span>
          <h2 id="download-heading">One app. Two packages.</h2>
          <p>
            Both current APKs need a 64-bit ARM phone. The Universal package
            does not add support for 32-bit or x86 phones. Choose arm64-v8a for
            the smaller download.
          </p>
        </div>
        <div className="download-workspace">
          <div
            className="build-options"
            role="radiogroup"
            aria-label="Choose Android build"
          >
            {options.map((option) => (
              <label
                className={`build-option ${selected === option.key ? "chosen" : ""}`}
                key={option.key}
              >
                <input
                  type="radio"
                  name="build"
                  value={option.key}
                  checked={selected === option.key}
                  onChange={() => setSelected(option.key)}
                />
                <span className="build-radio" aria-hidden="true"></span>
                <span>
                  <strong>{option.title}</strong>
                  <small>{option.description}</small>
                </span>
                <em>{option.detail}</em>
              </label>
            ))}
          </div>
          <div className="build-result">
            <div className="result-top">
              <span>Latest stable</span>
              <strong>{latest.tag_name.replace(/^v/, "")}</strong>
              <small>{formatDate(latest.published_at)}</small>
            </div>
            <div className="result-file">
              <span className="file-icon">↓</span>
              <div>
                <strong>{asset?.name || `${choice.detail} APK`}</strong>
                <small>
                  {fileSize(asset?.size) || "Available from the latest release"}
                </small>
              </div>
            </div>
            <External className="button primary full" href={downloadUrl}>
              {direct
                ? `Download ${choice.detail} APK`
                : `Open release for ${choice.detail} APK`}
            </External>
            <p className="result-hint">
              {offline
                ? "Live release details are unavailable. The button opens the latest GitHub release."
                : direct
                  ? "This button opens the APK file on GitHub."
                  : loading
                    ? "Checking the latest release on GitHub…"
                    : "The file link is unavailable here. Choose it on the release page."}
            </p>
            <div className="result-links">
              <External href={releaseAsset(latest, "checksum")}>
                View SHA256 file hashes
              </External>
              <External href={releaseLink(latest)}>Read release notes</External>
            </div>
          </div>
        </div>
      </section>
      <section className="download-install">
        <div className="layout-width install-grid">
          <div>
            <span className="small-heading">Once it downloads</span>
            <h2>Install, then link.</h2>
            <p>
              Android may ask you to allow installs from your browser or file
              manager. After installation, Wupp guides you through permissions
              and account linking.
            </p>
            <a className="button light" href={route("guide/")}>
              Follow the setup guide
            </a>
          </div>
          <ol>
            <li>
              <strong>Open the APK</strong>
              <span>Use the file you downloaded from GitHub Releases.</span>
            </li>
            <li>
              <strong>Allow installation</strong>
              <span>
                Approve Android’s install prompt for your browser or file
                manager.
              </span>
            </li>
            <li>
              <strong>Link from your primary app</strong>
              <span>
                Use Linked devices with a QR code or phone number code.
              </span>
            </li>
          </ol>
        </div>
      </section>
      <section className="download-care layout-width">
        <div>
          <span className="small-heading">A few things to know</span>
          <h2>Keep your primary app installed.</h2>
          <p>
            Wupp is a companion. Your main phone still owns the account and is
            needed to verify it and start chats with unknown numbers.
          </p>
        </div>
        <div className="care-box">
          <strong>Check the file if you like</strong>
          <p>
            Every release includes <code>SHA256SUMS.txt</code>. Compare the
            downloaded APK’s SHA-256 hash with the matching line in that file.
          </p>
          <External className="under-link" href={links.releases}>
            Browse every release
          </External>
        </div>
      </section>
    </>
  );
}
