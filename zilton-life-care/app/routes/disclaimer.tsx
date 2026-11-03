import type { Route } from "./+types/disclaimer";
export function meta({}: Route.MetaArgs) {
  return [{ title: "Disclaimer — Zilton Life Care" }];
}
// ⚠️ Developer 2 owns this route.
export default function DisclaimerPage() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <p className="text-[#46534C] text-sm italic">[Disclaimer — Developer 2 implementation pending]</p>
    </div>
  );
}

