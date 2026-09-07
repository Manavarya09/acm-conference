import {
  ChevronDownIcon,
  HomeIcon,
  IdCardIcon,
  MortarboardIcon,
  PeopleIcon,
  SearchIcon,
} from "@/components/icons";
import { faculty, org } from "@/content/event";

/**
 * Reproduces the reference page's three-band site chrome:
 * dark utility bar, white masthead with wordmark + menu, grey faculty band.
 */
export default function Header() {
  return (
    <header>
      {/* Utility bar */}
      <div className="bg-navy-bar text-white">
        <div className="mx-auto flex h-11 max-w-[1200px] items-center justify-between px-5">
          <div className="flex items-center gap-5">
            <HomeIcon />
            <button
              type="button"
              className="flex items-center gap-2 font-condensed text-[17px] tracking-wide"
            >
              {org.region}
              <ChevronDownIcon />
            </button>
          </div>
          <div className="flex items-center gap-6 text-white/90">
            <IdCardIcon />
            <PeopleIcon />
            <MortarboardIcon />
            <SearchIcon />
          </div>
        </div>
      </div>

      {/* Masthead */}
      <div className="border-b border-rule bg-white">
        <div className="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between px-5">
          <div className="flex items-center gap-3">
            <span
              aria-hidden
              className="grid h-10 w-10 place-items-center rounded-sm bg-navy font-condensed text-sm font-bold text-white"
            >
              A
            </span>
            <span className="font-condensed text-[22px] font-medium leading-[1.05] tracking-tight text-navy">
              {org.name}
              <span className="block text-[15px] font-normal text-ink-soft">
                {org.sub}
              </span>
            </span>
          </div>
          <button
            type="button"
            aria-label="Open menu"
            className="flex h-10 w-10 flex-col items-center justify-center gap-[5px]"
          >
            <span className="block h-[3px] w-7 bg-navy" />
            <span className="block h-[3px] w-7 bg-navy" />
            <span className="block h-[3px] w-7 bg-navy" />
          </button>
        </div>
      </div>

      {/* Faculty band */}
      <div className="bg-grey-band">
        <div className="mx-auto max-w-[1200px] px-5 py-4 text-center">
          <span className="font-condensed text-[22px] font-bold uppercase tracking-[0.02em] text-brand">
            {faculty}
          </span>
        </div>
      </div>
    </header>
  );
}
