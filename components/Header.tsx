import Image from "next/image";
import {
  HomeIcon,
  IdCardIcon,
  MortarboardIcon,
  PeopleIcon,
} from "@/components/icons";
import {
  brand,
  org,
  sectionNav,
  utilityCentre,
  utilityRight,
} from "@/content/event";

const rightIcons = [IdCardIcon, PeopleIcon, MortarboardIcon];

/**
 * Thin black bar and blue utility bar (these scroll away), then one sticky bar:
 * mark and conference lockup, the section links and a single Register button.
 * Below lg the links fold into a <details> menu, so no client-side JavaScript
 * is needed.
 */
export default function Header() {
  return (
    <>
      <div className="h-[10px] bg-black" />

      {/* Blue utility bar */}
      <div className="bg-utility text-white">
        <div className="mx-auto flex h-[52px] max-w-[1500px] items-center gap-6 px-6 sm:px-12 lg:px-20">
          <div className="flex shrink-0 items-center gap-5">
            <a href="#top" aria-label="Back to top">
              <HomeIcon className="h-[19px] w-[19px]" />
            </a>
            <a
              href={org.regionHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[16px] hover:underline"
            >
              {org.region}
            </a>
          </div>

          <ul className="hidden flex-1 justify-center gap-8 text-[16px] lg:flex">
            {utilityCentre.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whitespace-nowrap hover:underline"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="ml-auto flex shrink-0 items-center gap-7 lg:ml-0">
            {utilityRight.map((item, i) => {
              const Icon = rightIcons[i];
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="hidden items-center gap-2 text-[15px] uppercase tracking-wide hover:underline lg:flex"
                >
                  <Icon className="h-5 w-5" />
                  {item.label}
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-30 border-b border-rule bg-white">
        <div className="mx-auto flex h-[76px] max-w-[1500px] items-center gap-6 px-6 sm:px-12 lg:px-20">
          {/* Mark — placeholder for the chapter's own logo. */}
          <a href="#top" className="flex shrink-0 items-center gap-3">
            <Image
              src="/logos/wicode27-mark.webp"
              alt="WiCoDE27 logo"
              width={44}
              height={44}
              preload
              className="h-11 w-11"
            />
            <span className="font-condensed text-[21px] font-medium leading-[1.02] tracking-tight text-navy">
              {brand.name}
              <span className="block text-[15px] font-normal text-ink-soft">
                {brand.sub}
              </span>
            </span>
          </a>

          <nav className="ml-auto hidden lg:block" aria-label="Sections">
            <ul className="flex gap-8">
              {sectionNav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="whitespace-nowrap font-condensed text-[17px] font-bold uppercase tracking-[0.02em] text-ink hover:text-brand"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href="#register"
            className="ml-auto hidden bg-brand px-6 py-3 font-condensed text-[15px] font-bold uppercase tracking-wide text-white transition-colors hover:bg-navy sm:block lg:ml-0"
          >
            Register
          </a>

          <details className="menu relative ml-auto sm:ml-0 lg:hidden">
            <summary
              aria-label="Open menu"
              className="flex h-10 w-10 cursor-pointer list-none flex-col items-center justify-center gap-[5px]"
            >
              <span className="block h-[3px] w-7 bg-navy" />
              <span className="block h-[3px] w-7 bg-navy" />
              <span className="block h-[3px] w-7 bg-navy" />
            </summary>
            <ul className="absolute right-0 top-12 w-60 border border-rule bg-white py-2 shadow-lg">
              {sectionNav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="block px-5 py-2.5 font-condensed text-[17px] font-bold uppercase text-ink hover:bg-blue-pale"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="px-5 pb-2 pt-3 sm:hidden">
                <a
                  href="#register"
                  className="block bg-brand px-4 py-2.5 text-center font-condensed text-[15px] font-bold uppercase tracking-wide text-white"
                >
                  Register
                </a>
              </li>
            </ul>
          </details>
        </div>
      </header>
    </>
  );
}
