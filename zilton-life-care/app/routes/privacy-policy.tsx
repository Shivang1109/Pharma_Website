import type { Route } from "./+types/privacy-policy";
export function meta({}: Route.MetaArgs) {
  return [{ title: "Privacy Policy — Zilton Life Care" }];
}
// ⚠️ Developer 2 owns this route.
export default function PrivacyPolicyPage() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <p className="text-[#46534C] text-sm italic">[Privacy Policy — Developer 2 implementation pending]</p>
    </div>
  );
}

