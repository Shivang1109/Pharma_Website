import type { Route } from "./+types/products";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Products — Zilton Life Care Private Limited" },
    { name: "description", content: "Browse our product categories: Critical Care Injection, Nutrition IV and Nutrition Sachet." },
  ];
}

// ⚠️ Developer 2 owns this route.
// This is a placeholder scaffold so navigation and builds work.
// Do not add product content here — implementation is in Developer 2's branch.
export default function ProductsPage() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <p className="text-[#46534C] text-sm italic">
        [Products page — Developer 2 implementation pending]
      </p>
    </div>
  );
}

