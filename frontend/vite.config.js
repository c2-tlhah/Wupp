import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";

const page = (path) => resolve(import.meta.dirname, path, "index.html");

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        home: page("."),
        features: page("features"),
        guide: page("guide"),
        releases: page("releases"),
        download: page("download"),
        about: page("about"),
      },
    },
  },
});
