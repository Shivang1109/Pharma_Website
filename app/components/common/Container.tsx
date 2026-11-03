type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

/**
 * Site-wide max-width wrapper with consistent horizontal padding.
 * All page sections should use this to stay within the design grid.
 */
export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div
      className={[
        "mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

