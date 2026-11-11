import { cn } from "@/lib/utils";
import { event } from "@/lib/content";

/**
 * Event lock-up from the Parent Live Sessions hero: a stacked, condensed-caps
 * title block. The last line names the format ("In the Room") instead of
 * "Masterclass", since this edition is in person.
 */
export default function Lockup({ className }: { className?: string }) {
  return (
    <div
      className={cn("flex flex-col items-center text-center uppercase leading-none text-ivory", className)}
      aria-label={`MiTran Global — ${event.name}, ${event.format}`}
      role="img"
    >
      <span className="font-sans text-[11px] font-semibold tracking-[0.22em]">MiTran Global</span>
      <span className="mt-3 font-lockup text-[2.6rem] font-bold tracking-[0.01em]">Imparting</span>
      <span className="gold-text font-lockup text-[2.6rem] font-bold tracking-[0.01em]">Positivity</span>
      <span className="mt-1 font-sans text-[1.15rem] font-black tracking-[-0.01em]">Masterclass</span>
      <span className="mt-3 rounded-full border border-gold/50 px-3 py-1 font-sans text-[10px] font-bold tracking-[0.24em] text-gold-bright">
        {event.format}
      </span>
    </div>
  );
}
