import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  alternate?: boolean;
}

export default function Section({
  id,
  children,
  className = "",
  alternate = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-16 md:py-24 px-4 sm:px-6 lg:px-8 ${
        alternate ? "bg-muted/50" : "bg-background"
      } ${className}`}
    >
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
}
