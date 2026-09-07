type Props = {
  eyebrow?: string;
  title: string;
  lede?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "left",
}: Props) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-600">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-3 text-2xl font-bold tracking-tight text-navy-950 sm:text-3xl">
        {title}
      </h2>
      {lede && (
        <p className="mt-3 text-[15px] leading-relaxed text-navy-950/65">{lede}</p>
      )}
    </div>
  );
}
