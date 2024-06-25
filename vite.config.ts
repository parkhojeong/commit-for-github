import { defineConfig, PluginOption } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { createHtmlPlugin } from "vite-plugin-html";
import copyTemplate from "./plugins/copy-template";
import makeManifest from "./plugins/make-manifest";

const root = resolve(__dirname, "src");
const pagesDir = resolve(root, "pages");
const assetsDir = resolve(root, "assets");
const outDir = resolve(__dirname, "dist");
const publicDir = resolve(__dirname, "public");

const customPlugins: PluginOption[] = [copyTemplate(), makeManifest()];

export default defineConfig({
  resolve: {
    alias: {
      "@src": root,
      "@assets": assetsDir,
      "@pages": pagesDir,
    },
  },
  plugins: [
    react(),
    ...customPlugins,
    createHtmlPlugin({
      minify: false,
      pages: [
        {
          entry: resolve(pagesDir, "Options", "index.tsx"),
          filename: "options.js",
          template: "public/options.html",
        },
        {
          entry: resolve(pagesDir, "Panel", "index.tsx"),
          filename: "panel.js",
          template: "public/panel.html",
        },
        {
          entry: resolve(pagesDir, "Popup", "index.tsx"),
          filename: "popup.js",
          template: "public/popup.html",
        },
        {
          entry: resolve(pagesDir, "Devtools", "index.ts"),
          filename: "devtools.js",
          template: "public/devtools.html",
        },
      ],
    }),
  ],
  publicDir,
  build: {
    outDir,
    watch: {
      include: "src",
    },
    minify: false,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        // css
        ContentStyle: resolve(pagesDir, "Content", "content.style.css"),
        // ts
        Content: resolve(pagesDir, "Content", "index.ts"),
        Background: resolve(pagesDir, "Background", "index.ts"),
      },
      output: {
        entryFileNames: (chunk) => {
          if (chunk.name === "ContentStyle") {
            return `content.styles.css`;
          }
          return `${chunk.name}.js`;
        },
      },
      external: ["chrome"],
    },
  },
});
