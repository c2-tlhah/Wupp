import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { Layout } from "./components";
import { Home } from "./pages/Home";
import { Features } from "./pages/Features";
import { Guide } from "./pages/Guide";
import { Releases } from "./pages/Releases";
import { Download } from "./pages/Download";
import { About } from "./pages/About";
import "./styles.css";
import "./styles-pages.css";
import "./styles-extra.css";

const pages = {
  "": Home,
  "features/": Features,
  "guide/": Guide,
  "releases/": Releases,
  "download/": Download,
  "about/": About,
};

const base = import.meta.env.BASE_URL;
const pagePath = window.location.pathname
  .slice(base.length)
  .replace(/^\/+|\/+$/g, "");
const current = pagePath ? `${pagePath}/` : "";
const Page = pages[current] || Home;

const root = document.getElementById("root");
const app = (
  <React.StrictMode>
    <Layout current={current}>
      <Page />
    </Layout>
  </React.StrictMode>
);

if (root.hasChildNodes()) hydrateRoot(root, app);
else createRoot(root).render(app);
