import { cn } from "@/lib/utils";

export function Reveal({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn("reveal", className)}
      data-reveal-state="idle"
    >
      {children}
    </div>
  );
}
