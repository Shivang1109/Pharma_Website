import { Link } from "react-router";

type ButtonProps = {
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
  "inline-flex items-center justify-center font-semibold transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#087B59] disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-[#087B59] text-white hover:bg-[#066447] active:bg-[#055238]",
  secondary:
    "bg-[#E8F4EE] text-[#087B59] hover:bg-[#d4ecdf] active:bg-[#c0e4cf]",
  outline:
    "border-2 border-[#087B59] text-[#087B59] hover:bg-[#E8F4EE] active:bg-[#d4ecdf]",
  text:
    "text-[#087B59] hover:underline underline-offset-4",
};

const sizes: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "px-4 py-2 text-sm rounded-md",
  md: "px-6 py-3 text-base rounded-lg",
  lg: "px-8 py-4 text-lg rounded-xl",
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

