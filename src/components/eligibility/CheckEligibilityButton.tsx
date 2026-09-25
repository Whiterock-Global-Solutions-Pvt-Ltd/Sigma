import type { ReactNode } from "react";
import Button from "@/components/ui/Button";

type Variant = "primary" | "secondary" | "outline" | "ghost" | "white";
type Size = "md" | "lg";

type CheckEligibilityButtonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children?: ReactNode;
  onOpen?: () => void;
};

export default function CheckEligibilityButton({
  variant = "secondary",
  size = "md",
  className = "",
  children,
  onOpen,
}: CheckEligibilityButtonProps) {
  return (
    <Button href="/check-eligibility" variant={variant} size={size} className={className} onClick={onOpen}>
      {children ?? "Check Eligibility"}
    </Button>
  );
}
