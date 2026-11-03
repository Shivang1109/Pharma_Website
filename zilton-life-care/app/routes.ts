import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about",          "routes/about.tsx"),
  route("products",       "routes/products.tsx"),
  route("quality",        "routes/quality.tsx"),
  route("contact",        "routes/contact.tsx"),
  route("privacy-policy", "routes/privacy-policy.tsx"),
  route("disclaimer",     "routes/disclaimer.tsx"),
  route("terms",          "routes/terms.tsx"),
] satisfies RouteConfig;
