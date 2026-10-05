import Image from "next/image";
import { org, utilityLinks } from "@/content/event";

export default function Footer() {
  return (
    <footer className="bg-navy-bar text-white/75">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-12 lg:px-20 py-12">
        <div className="flex flex-wrap items-center gap-x-8 gap-y-6">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-sm bg-white">
              <Image src="/logos/wicode27-mark.webp" alt="WiCoDE27 logo" width={32} height={32} />
            </span>
            <span className="font-condensed text-[22px] font-medium leading-[1.05] text-white">
              {org.name}
              <span className="block text-[15px] font-normal text-white/70">
                {org.sub}
              </span>
            </span>
          </div>
          <span className="bg-white px-4 py-3">
            <Image
              src="/logos/acm-dubai.png"
              alt="ACM Dubai Professional Chapter"
              width={319}
              height={104}
              className="h-12 w-auto"
            />
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
            Organised by the ACM-W Dubai Professional Chapter and the ACM
            Dubai Professional Chapter, hosted at BITS Pilani, Dubai Campus.
          </p>
          <p className="mt-2">
            © 2026 Women in Computing Conference.
          </p>
        </div>
      </div>
    </footer>
  );
}
