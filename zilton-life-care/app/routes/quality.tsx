import type { Route } from "./+types/quality";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Quality Assurance — Zilton Life Care Private Limited" },
    { name: "description", content: "Our quality philosophy and commitment to verified, reliable pharmaceutical products." },
  ];
}

// ⚠️ Developer 2 owns this route.
export default function QualityPage() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <p className="text-[#46534C] text-sm italic">
        [Quality page — Developer 2 implementation pending]
      </p>
    </div>
  );
}

