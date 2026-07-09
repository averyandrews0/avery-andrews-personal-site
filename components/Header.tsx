import { navItems } from "./site-data";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-void/90 backdrop-blur">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-lilac focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-void"
      >
        Skip to content
      </a>
      <nav
        className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8"
        aria-label="Primary navigation"
      >
        <a
          href="#home"
          className="font-serif text-xl font-semibold text-white hover:text-lilac"
          aria-label="Avery Andrews home"
        >
          Avery Andrews
        </a>
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-slate-300">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md py-1 text-slate-300 transition hover:text-lilac focus-visible:text-lilac"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
