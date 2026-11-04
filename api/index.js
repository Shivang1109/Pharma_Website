import { createRequestHandler } from "@react-router/express";
import compression from "compression";
import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BUILD_PATH = path.resolve(__dirname, "../build/server/index.js");
const CLIENT_PATH = path.resolve(__dirname, "../build/client");

const app = express();

app.use(compression());

// Serve static assets with long-lived cache headers
app.use(
  "/assets",
  express.static(path.join(CLIENT_PATH, "assets"), {
    immutable: true,
    maxAge: "1y",
  })
);

// Serve everything else in build/client (images, favicon, robots.txt, etc.)
app.use(express.static(CLIENT_PATH, { maxAge: "1h" }));

// SSR handler — use explicit path pattern compatible with path-to-regexp v8
app.use(
  createRequestHandler({
    build: () => import(BUILD_PATH),
  })
);

export default app;
