import type { Route } from "./+types/terms";
export function meta({}: Route.MetaArgs) {
  return [{ title: "Terms of Use — Zilton Life Care" }];
}
// ⚠️ Developer 2 owns this route.
export default function TermsPage() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <p className="text-[#46534C] text-sm italic">[Terms of Use — Developer 2 implementation pending]</p>
    </div>
  );
}

