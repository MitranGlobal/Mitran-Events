import { cn } from "@/lib/utils";
import { REGISTER_LABEL, REGISTER_URL } from "@/lib/content";

type Variant = "hero" | "primary" | "ink" | "light";

const looks: Record<Variant, string> = {
  hero: "btn-hero",
  primary: "btn-primary",
  ink: "btn-ink",
  light: "btn-light",
};

/** Every "Register now" on the page goes to the MiTran Hub checkout (REGISTER_URL in lib/content.ts). */
export default function RegisterButton({
  variant = "primary",
  className,
  onClick,
}: {
  variant?: Variant;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <a href={REGISTER_URL} onClick={onClick} className={cn(looks[variant], className)}>
      {REGISTER_LABEL}
    </a>
  );
}
