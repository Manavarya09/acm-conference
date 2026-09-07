type Props = {
  eyebrow: string;
  title: string;
  lede?: string;
};

/** Compact dark banner used at the top of every page except the home page. */
export default function PageHero({ eyebrow, title, lede }: Props) {
  return (
    <section className="grid-veil bg-navy-900 text-white">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-400">
          {eyebrow}
        </p>
        <h1 className="rise mt-4 max-w-3xl text-3xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
          {title}
        </h1>
        {lede && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70">
            {lede}
          </p>
        )}
      </div>
    </section>
  );
}
