import { createRequestHandler } from "@react-router/express";
import compression from "compression";
import express from "express";
import { fileURLToPath } from "node:url";
import { dirname, join, resolve } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// At runtime on Vercel, the function runs from /var/task/api/
// build/ is one level up relative to this file
const BUILD_DIR = resolve(__dirname, "..", "build");
const CLIENT_DIR = join(BUILD_DIR, "client");
const SERVER_BUILD = join(BUILD_DIR, "server", "index.js");

const app = express();

app.disable("x-powered-by");
app.use(compression());

// Static assets with immutable cache
app.use(
  "/assets",
  express.static(join(CLIENT_DIR, "assets"), { immutable: true, maxAge: "1y" })
);

// All other public files (images, favicon, robots.txt, sitemap.xml)
app.use(express.static(CLIENT_DIR, { maxAge: "1h" }));

// React Router SSR handler
app.use(
  createRequestHandler({
    build: () => import(SERVER_BUILD),
    mode: process.env.NODE_ENV ?? "production",
  })
);

export default app;
