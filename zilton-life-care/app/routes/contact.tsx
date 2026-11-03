import type { Route } from "./+types/contact";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact Us — Zilton Life Care Private Limited" },
    { name: "description", content: "Get in touch with Zilton Life Care for general, product or business partnership enquiries." },
  ];
}

// ⚠️ Developer 2 owns this route.
export default function ContactPage() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <p className="text-[#46534C] text-sm italic">
        [Contact page — Developer 2 implementation pending]
      </p>
    </div>
  );
}

