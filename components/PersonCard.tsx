import type { Person } from "@/content/event";

function initials(name: string) {
  return name
    .replace(/^(Prof\.|A\/Prof\.|Dr|Mr|Ms|Mrs)\s+/i, "")
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export default function PersonCard({ person }: { person: Person }) {
  return (
    <article className="rounded-xl border border-line bg-white p-6 transition-colors hover:border-accent-400">
      <div className="grid h-14 w-14 place-items-center rounded-full bg-navy-900 text-base font-semibold text-white">
        {initials(person.name)}
      </div>
      <h3 className="mt-4 text-[15px] font-semibold leading-snug text-navy-950">
        {person.name}
      </h3>
      <p className="mt-1.5 text-sm leading-relaxed text-navy-950/70">
        {person.role}
      </p>
      <p className="mt-1 text-sm text-navy-950/45">{person.org}</p>
    </article>
  );
}
