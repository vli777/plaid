"use client";

export interface NavLink {
  label: string;
  href: string;
}

export interface HeaderProps {
  title: string;
  cta?: {
    label: string;
    href: string;
  };
  className?: string;
}

export default function Header({ title, cta, className = "" }: HeaderProps) {
  return (
    <header
      className={`
        flex items-center justify-between
        px-8 py-4 my-6
        ${className}
      `}
    >
      <div className="flex items-center">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          className="mr-2"
          aria-hidden="true"
        >
          <circle cx="8" cy="8" r="6" fill="currentColor" />
        </svg>
        <h1 className="font-bold text-md">{title}</h1>
      </div>

      {cta && (
        <a
          href={cta.href}
          className="text-sm font-bold underline underline-offset-6"
        >
          {cta.label}
        </a>
      )}
    </header>
  );
}
