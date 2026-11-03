import { Link } from "react-router";

export type ButtonProps = {
  children: React.ReactNode;
  /** Internal route — renders a <Link> */
  to?: string;
  /** External URL — renders an <a> */
  href?: string;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "outline" | "text";
  size?: "sm" | "md" | "lg";
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
};

const base =
  "inline-flex items-center justify-center font-semibold tracking-wide transition-all duration-200 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#07845E] disabled:opacity-40 disabled:pointer-events-none select-none active:scale-[0.99]";

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-[#07845E] text-white hover:bg-[#05684A] active:bg-[#04523B] shadow-[0_2px_12px_rgba(7,132,94,0.18)] hover:shadow-[0_4px_16px_rgba(7,132,94,0.28)] hover:-translate-y-0.5",
  secondary:
    "bg-[#DFF1E9] text-[#123D32] hover:bg-[#cde9dd] active:bg-[#bdd9cc] hover:-translate-y-0.5",
  outline:
    "border border-[#E4EBE6] text-[#123D32] bg-white hover:border-[#07845E]/60 hover:bg-[#F2F7F4] hover:-translate-y-0.5 shadow-2xs",
  text:
    "text-[#07845E] hover:text-[#05684A] underline-offset-4 hover:underline",
};

const sizes: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "px-4 py-2 text-xs font-semibold rounded-lg",
  md: "px-5 py-2.5 text-sm font-semibold rounded-xl",
  lg: "px-7 py-3.5 text-base font-semibold rounded-xl",
};

export function Button({
  children,
  to,
  href,
  type = "button",
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
  onClick,
}: ButtonProps) {
  const cls = [base, variants[variant], sizes[size], className].join(" ");

  if (to) {
    return (
      <Link to={to} className={cls} aria-disabled={disabled}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={cls}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={cls}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

/**
 * Convenience wrapper for the primary luxury action button
 */
export function PrimaryButton(props: Omit<ButtonProps, "variant">) {
  return <Button {...props} variant="primary" />;
}

/**
 * Convenience wrapper for the secondary soft sage action button
 */
export function SecondaryButton(props: Omit<ButtonProps, "variant">) {
  return <Button {...props} variant="secondary" />;
}

