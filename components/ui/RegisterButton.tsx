import { cn } from "@/lib/utils";
import { isRegistrationOpen, registration } from "@/lib/content";

type Variant = "hero" | "primary" | "ink" | "light";
type Props = {
  /** Look once registrations are open */
  variant?: Variant;
  /** Which surface the notice sits on while registrations are closed */
  surface?: "dark" | "light";
  size?: "md" | "lg";
  className?: string;
  onClick?: () => void;
};

const openLook: Record<Variant, string> = {
  hero: "btn-hero",
  primary: "btn-primary",
  ink: "btn-ink",
  light: "btn-light",
};

/**
 * Every register button on the page.
 *
 * Until `registration.url` is set in lib/content.ts this renders a quiet
 * "Registrations open 20 Nov" notice (not a link). Once the URL is filled in,
 * all of them turn into "Register now" links to the checkout.
 */
export default function RegisterButton({ variant = "primary", surface = "dark", size = "md", className, onClick }: Props) {
  if (isRegistrationOpen) {
    return (
      <a href={registration.url} onClick={onClick} className={cn(openLook[variant], className)}>
        {registration.open}
      </a>
    );
  }
  return (
    <p
      role="status"
      aria-label={`Registrations open on ${registration.opensOn}`}
      className={cn(surface === "dark" ? "status-pill-dark" : "status-pill-light", size === "lg" && "status-pill-lg", className)}
    >
      <span className={cn("relative h-2 w-2 shrink-0 animate-pulse-dot rounded-full", surface === "dark" ? "bg-gold-bright" : "bg-gold-deep")} aria-hidden="true" />
      {registration.soon}
    </p>
  );
}
