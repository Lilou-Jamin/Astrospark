
import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setMenuOpen(false);

  const navLinks = [
    { label: "Accueil", to: "/" },
    { label: "Nos expériences", to: "/experiences" },
    { label: "Contact", to: "/contact" },
  ];

  const linkClass =
    "text-sm font-medium text-text-muted transition hover:text-text focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent";

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">

        <Link
          to="/"
          onClick={closeMenu}
          className="flex items-center gap-3 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          aria-label="AstroSpark - Accueil"
        >
          <div className="flex size-10 items-center justify-center rounded-full bg-primary/15 text-xl">
            ✦
          </div>

          <span className="font-display text-xl tracking-tight">
            Astro<span className="text-accent">Spark</span>
          </span>
        </Link>

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Navigation principale"
        >
          {navLinks.map((link) => {
            const isActive =
              link.to === "/experiences" &&
              location.pathname.startsWith("/experiences");

            return (
              <NavLink
                key={link.label}
                to={link.to}
                className={`${linkClass} ${
                  isActive ? "text-accent" : ""
                }`}
              >
                {link.label}
              </NavLink>
            );
          })}
        </nav>

        <Link
          to="/experiences"
          className="hidden min-h-11 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold transition hover:bg-primary-light focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent md:inline-flex"
        >
          Réserver
        </Link>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex size-11 items-center justify-center rounded-lg border border-white/10 md:hidden"
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          <span className="text-2xl">
            {menuOpen ? "✕" : "☰"}
          </span>
        </button>
      </div>

      {menuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Navigation mobile"
          className="mx-4 rounded-2xl border border-white/10 bg-surface p-5 shadow-card md:hidden"
        >
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                onClick={closeMenu}
                className={linkClass}
              >
                {link.label}
              </Link>
            ))}

            <Link
              to="/experiences"
              onClick={closeMenu}
              className="flex min-h-11 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold transition hover:bg-primary-light"
            >
              Réserver
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
