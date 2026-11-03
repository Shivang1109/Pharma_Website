type SectionHeadingProps = {
  /** Small label above the title */
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

/**
 * Reusable section heading used across all pages.
 * Provides consistent eyebrow → title → description hierarchy.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={["flex flex-col gap-3", alignClass, className].join(" ")}>
      {eyebrow && (
        <span className="text-sm font-semibold uppercase tracking-widest text-[#087B59]">
          {eyebrow}
        </span>
      )}
      <h2 className="font-heading text-3xl font-bold text-[#173B30] sm:text-4xl leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-1 max-w-2xl text-base text-[#46534C] leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}

