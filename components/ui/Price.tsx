import { formatINR } from "@/lib/content";

export default function Price({ price, was, note = "One-time payment", size = "lg", tone = "ink" }: { price: number; was?: number; note?: string; size?: "lg" | "xl"; tone?: "ink" | "light" }) {
  const main = tone === "light" ? "text-ivory" : "text-ink";
  const muted = tone === "light" ? "text-ivory/60" : "text-ink-soft";
  return (
    <div>
      <p className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <span className={`font-display ${size === "xl" ? "text-6xl" : "text-5xl"} leading-none ${main}`}>{formatINR(price)}</span>
        {was && (
          <s className={`text-xl ${muted}`}>
            <span className="sr-only">was </span>
            {formatINR(was)}
          </s>
        )}
      </p>
      <p className={`mt-2 text-sm ${muted}`}>{note}</p>
    </div>
  );
}
