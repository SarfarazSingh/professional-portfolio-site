import { cn } from "@/lib/utils";

export function Reveal({
  children,
  className,
  sequence = false,
}: {
  children: React.ReactNode;
  className?: string;
  sequence?: boolean;
}) {
  return (
    <div
      className={cn("reveal", className)}
      data-reveal-sequence={sequence || undefined}
      data-reveal-state="idle"
      suppressHydrationWarning
    >
      {children}
    </div>
  );
}
