import {
  ChevronDownIcon,
  HomeIcon,
  IdCardIcon,
  MortarboardIcon,
  PeopleIcon,
  SearchIcon,
} from "@/components/icons";
import {
  faculty,
  mainNav,
  org,
  utilityCentre,
  utilityRight,
} from "@/content/event";

const rightIcons = [IdCardIcon, PeopleIcon, MortarboardIcon];

/**
 * Site chrome: thin black bar, masthead (mark / centred faculty title /
 * apply button), then the centred primary nav. Collapses to the mark plus a
 * menu button below the lg breakpoint.
 */
export default function Header() {
  return (
    <header className="border-b border-rule bg-white">
      <div className="h-[10px] bg-black" />

      {/* Blue utility bar */}
      <div className="bg-utility text-white">
        <div className="mx-auto flex h-[52px] max-w-[1500px] items-center gap-6 px-8">
          <div className="flex shrink-0 items-center gap-5">
            <HomeIcon className="h-[19px] w-[19px]" />
            <button type="button" className="flex items-center gap-2 text-[16px]">
              {org.region}
              <ChevronDownIcon />
            </button>
          </div>

          <ul className="hidden flex-1 justify-center gap-8 text-[16px] lg:flex">
            {utilityCentre.map((item) => (
              <li key={item}>
                <a href="#" className="hover:underline">
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <div className="ml-auto flex shrink-0 items-center gap-7 lg:ml-0">
            {utilityRight.map((item, i) => {
              const Icon = rightIcons[i];
              return (
                <a
                  key={item}
                  href="#"
                  className="hidden items-center gap-2 text-[15px] uppercase tracking-wide lg:flex"
                >
                  <Icon className="h-5 w-5" />
                  {item}
                </a>
              );
            })}
            <button type="button" aria-label="Search">
              <SearchIcon className="h-[21px] w-[21px]" />
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1500px] items-center gap-6 px-8 py-5">
        {/* Mark — placeholder for the chapter's own logo. */}
        <div className="flex shrink-0 items-center gap-3">
          <span
            aria-hidden
            className="grid h-11 w-11 place-items-center rounded-sm bg-navy font-condensed text-base font-bold text-white"
          >
            A
          </span>
          <span className="font-condensed text-[21px] font-medium leading-[1.02] tracking-tight text-navy">
            {org.name}
            <span className="block text-[15px] font-normal text-ink-soft">
              {org.sub}
            </span>
          </span>
        </div>

        <div className="flex-1 text-center">
          <span className="font-condensed text-[21px] font-bold uppercase tracking-[0.01em] text-brand">
            {faculty}
          </span>
        </div>

        <div className="flex shrink-0 items-center gap-4">
          <button
            type="button"
            className="hidden border border-brand px-6 py-3 font-condensed text-[15px] font-bold uppercase tracking-wide text-navy transition-colors hover:bg-blue-pale lg:block"
          >
            Apply to study
          </button>
          <button
            type="button"
            aria-label="Open menu"
            className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] lg:hidden"
          >
            <span className="block h-[3px] w-7 bg-navy" />
            <span className="block h-[3px] w-7 bg-navy" />
            <span className="block h-[3px] w-7 bg-navy" />
          </button>
        </div>
      </div>

      <nav className="hidden pb-4 lg:block">
        <ul className="mx-auto flex max-w-[1500px] justify-center gap-11 px-8">
          {mainNav.map((item) => (
            <li key={item}>
              <a
                href="#"
                className="font-condensed text-[17px] font-bold uppercase tracking-[0.02em] text-ink hover:text-brand"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
