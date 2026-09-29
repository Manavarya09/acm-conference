import { org, utilityLinks } from "@/content/event";

export default function Footer() {
  return (
    <footer className="bg-navy-bar text-white/75">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-12 lg:px-20 py-12">
        <div className="flex items-center gap-3">
          <span
            aria-hidden
            className="grid h-10 w-10 place-items-center rounded-sm bg-white font-condensed text-sm font-bold text-navy"
          >
            A
          </span>
          <span className="font-condensed text-[22px] font-medium leading-[1.05] text-white">
            {org.name}
            <span className="block text-[15px] font-normal text-white/70">
              {org.sub}
            </span>
          </span>
        </div>

        <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
          {utilityLinks.map((link) => (
            <li
              key={link}
              className="font-condensed text-[15px] uppercase tracking-wide text-white/80"
            >
              {link}
            </li>
          ))}
        </ul>

        <div className="mt-10 border-t border-white/15 pt-6 text-[13px] leading-relaxed">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
            eiusmod tempor incididunt ut labore.
          </p>
          <p className="mt-2">
            © 2026 Lorem Ipsum. ABN 00 000 000 000. LRM Provider Number 00000A.
          </p>
        </div>
      </div>
    </footer>
  );
}
