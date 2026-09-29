type IconProps = { className?: string };

const base = "shrink-0";

export function HomeIcon({ className = "h-[18px] w-[18px]" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={`${base} ${className}`} aria-hidden>
      <path
        d="M3 11.2 12 4l9 7.2V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-8.8Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ChevronDownIcon({ className = "h-3 w-3" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={`${base} ${className}`} aria-hidden>
      <path d="m5 9 7 7 7-7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IdCardIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={`${base} ${className}`} aria-hidden>
      <rect x="2.5" y="5" width="19" height="14" rx="1.6" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="8.2" cy="11" r="2.1" stroke="currentColor" strokeWidth="1.5" />
      <path d="M4.8 16.4c.5-1.5 1.8-2.3 3.4-2.3s2.9.8 3.4 2.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M14.6 9.6h4.6M14.6 12.4h4.6M14.6 15.2h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function PeopleIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={`${base} ${className}`} aria-hidden>
      <circle cx="9" cy="8" r="3.1" />
      <circle cx="16.6" cy="9.2" r="2.4" />
      <path d="M2.6 18.4c0-3.1 2.9-5 6.4-5s6.4 1.9 6.4 5v.6H2.6v-.6Z" />
      <path d="M16.4 13.6c2.9.1 5 1.7 5 4.3v1.1h-3.8v-1.2c0-1.7-.5-3.1-1.2-4.2Z" />
    </svg>
  );
}

export function MortarboardIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={`${base} ${className}`} aria-hidden>
      <path d="M12 5 2.5 9.4 12 13.8l9.5-4.4L12 5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M6.4 11.4v4.1c0 1.5 2.5 2.7 5.6 2.7s5.6-1.2 5.6-2.7v-4.1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function SearchIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={`${base} ${className}`} aria-hidden>
      <circle cx="10.6" cy="10.6" r="6.1" stroke="currentColor" strokeWidth="1.9" />
      <path d="m15.2 15.2 4.4 4.4" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
    </svg>
  );
}

export function CalendarIcon({ className = "h-[22px] w-[22px]" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={`${base} ${className}`} aria-hidden>
      <path d="M7 2.6a1 1 0 0 1 1 1V5h8V3.6a1 1 0 1 1 2 0V5h1.4A1.6 1.6 0 0 1 21 6.6v2.1H3V6.6A1.6 1.6 0 0 1 4.6 5H6V3.6a1 1 0 0 1 1-1Z" />
      <path d="M3 10.3h18v9.1a1.6 1.6 0 0 1-1.6 1.6H4.6A1.6 1.6 0 0 1 3 19.4v-9.1Zm3 2.5v2.1h2.2v-2.1H6Zm4.9 0v2.1h2.2v-2.1h-2.2Zm4.9 0v2.1H18v-2.1h-2.2ZM6 17v2.1h2.2V17H6Zm4.9 0v2.1h2.2V17h-2.2Z" />
    </svg>
  );
}

export function ClockIcon({ className = "h-[22px] w-[22px]" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={`${base} ${className}`} aria-hidden>
      <path d="M12 2.4a9.6 9.6 0 1 0 0 19.2 9.6 9.6 0 0 0 0-19.2Zm.9 9.9c0 .4-.3.7-.7.7H8.4a.9.9 0 0 1 0-1.8h2.7V6.9a.9.9 0 0 1 1.8 0v5.4Z" />
    </svg>
  );
}

export function TicketIcon({ className = "h-[22px] w-[22px]" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={`${base} ${className}`} aria-hidden>
      <path d="M2.4 7.2A1.6 1.6 0 0 1 4 5.6h16a1.6 1.6 0 0 1 1.6 1.6v2.1a2.4 2.4 0 0 0 0 4.8v2.7A1.6 1.6 0 0 1 20 18.4H4a1.6 1.6 0 0 1-1.6-1.6v-2.7a2.4 2.4 0 0 0 0-4.8V7.2Zm4.4 2.1v5.4h1.7V9.3H6.8Zm3.6 0v5.4h6.8V9.3h-6.8Z" />
    </svg>
  );
}

export function FacebookIcon({ className = "h-[22px] w-[22px]" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={`${base} ${className}`} aria-hidden>
      <path d="M13.4 21v-8.2h2.8l.4-3.2h-3.2V7.5c0-.9.3-1.6 1.6-1.6h1.7V3.1A22 22 0 0 0 14.2 3c-2.5 0-4.2 1.5-4.2 4.3v2.3H7.2v3.2H10V21h3.4Z" />
    </svg>
  );
}

export function XIcon({ className = "h-[19px] w-[19px]" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={`${base} ${className}`} aria-hidden>
      <path d="M17.7 3h3.3l-7.2 8.3L22.3 21h-6.6l-5.2-6.8L4.6 21H1.3l7.7-8.9L1 3h6.8l4.7 6.2L17.7 3Zm-1.2 16h1.8L7.6 4.9H5.6L16.5 19Z" />
    </svg>
  );
}

export function LinkedInIcon({ className = "h-[22px] w-[22px]" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={`${base} ${className}`} aria-hidden>
      <path d="M6.9 20.5H3.3V9h3.6v11.5ZM5.1 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2ZM20.7 20.5h-3.6v-5.6c0-1.3 0-3.1-1.9-3.1s-2.2 1.5-2.2 3v5.7H9.4V9H12v1.6h.1a2.9 2.9 0 0 1 2.6-1.4c2.8 0 3.9 1.8 3.9 4.3l.1 7Z" />
    </svg>
  );
}

export function MailIcon({ className = "h-[22px] w-[22px]" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={`${base} ${className}`} aria-hidden>
      <rect x="2.6" y="5" width="18.8" height="14" rx="1.4" stroke="currentColor" strokeWidth="1.8" />
      <path d="m3.4 6.4 8.6 6.4 8.6-6.4" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}

export function PinIcon({ className = "h-[22px] w-[22px]" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={`${base} ${className}`} aria-hidden>
      <path d="M12 2.4a7.2 7.2 0 0 0-7.2 7.2c0 5.1 6.4 11.4 6.6 11.7a.9.9 0 0 0 1.2 0c.3-.3 6.6-6.6 6.6-11.7A7.2 7.2 0 0 0 12 2.4Zm0 10a2.8 2.8 0 1 1 0-5.6 2.8 2.8 0 0 1 0 5.6Z" />
    </svg>
  );
}
