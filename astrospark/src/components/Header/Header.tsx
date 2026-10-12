export function Header() {
  return (
      <header className="absolute inset-x-0 top-0 z-50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">

          <a
            href="/"
            className="flex items-center gap-3 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            aria-label="AstroSpark - Accueil"
          >
            <div className="flex size-10 items-center justify-center rounded-full bg-primary/15 text-xl">
              ✦
            </div>

            <span className="text-xl font-display tracking-tight">
              Astro<span className="text-accent">Spark</span>
            </span>
          </a>

          <nav
            className="hidden items-center gap-8 md:flex"
            aria-label="Navigation principale"
          >
            <a
              href="#experiences"
              className="text-sm font-medium text-text-muted transition hover:text-text focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              Nos expériences
            </a>

            <a
              href="#about"
              className="text-sm font-medium text-text-muted transition hover:text-text focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              L'observatoire
            </a>

            <a
              href="#contact"
              className="text-sm font-medium text-text-muted transition hover:text-text focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              Contact
            </a>
          </nav>

          <a
            href="#experiences"
            className="hidden min-h-11 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold transition hover:bg-primary-light focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent md:inline-flex"
          >
            Réserver
          </a>

          <button
            type="button"
            className="flex size-11 items-center justify-center rounded-lg border border-white/10 md:hidden"
            aria-label="Ouvrir le menu"
          >
            ☰
          </button>
        </div>
      </header>
  );
}