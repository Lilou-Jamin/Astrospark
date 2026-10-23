
import { useMemo, useState } from "react";
import { Header } from "../components/Header/Header";
import experiencesData from "../data/experiences.json";
import { ExperienceCard } from "../components/ExperienceCard/ExperienceCard";
import type { Experience } from "../types/Experience";
import { Footer } from "../components/Footer/Footer";

type SortOption = "date" | "price-asc" | "price-desc" | "name";

const experiences = experiencesData as Experience[];

export default function Experiences() {
  const [search, setSearch] = useState("");
  const [audience, setAudience] = useState("all");
  const [level, setLevel] = useState("all");
  const [sortBy, setSortBy] = useState<SortOption>("date");

  // Génération automatique des choix de filtres
  const audiences = [...new Set(experiences.map((e) => e.audience))];
  const levels = [...new Set(experiences.map((e) => e.level))];

  // Récupère la prochaine séance à venir
  function getNextSession(experience: Experience) {
    return experience.sessions
      .filter((session) => new Date(session.date).getTime() > Date.now())
      .sort(
        (a, b) =>
          new Date(a.date).getTime() - new Date(b.date).getTime()
      )[0];
  }

  const filteredExperiences = useMemo(() => {
    const normalizedSearch = search.trim().toLocaleLowerCase("fr");

    const results = experiences.filter((experience) => {
      const matchesSearch =
        experience.title.toLocaleLowerCase("fr").includes(normalizedSearch) ||
        experience.description
          .toLocaleLowerCase("fr")
          .includes(normalizedSearch);

      const matchesAudience =
        audience === "all" || experience.audience === audience;

      const matchesLevel =
        level === "all" || experience.level === level;

      return matchesSearch && matchesAudience && matchesLevel;
    });

    return results.sort((a, b) => {
      switch (sortBy) {
        case "price-asc":
          return a.price - b.price;

        case "price-desc":
          return b.price - a.price;

        case "name":
          return a.title.localeCompare(b.title, "fr");

        case "date":
        default: {
          const dateA = getNextSession(a)?.date;
          const dateB = getNextSession(b)?.date;

          return (
            (dateA ? new Date(dateA).getTime() : Infinity) -
            (dateB ? new Date(dateB).getTime() : Infinity)
          );
        }
      }
    });
  }, [search, audience, level, sortBy]);

  const hasActiveFilters =
    search !== "" || audience !== "all" || level !== "all";

  function resetFilters() {
    setSearch("");
    setAudience("all");
    setLevel("all");
    setSortBy("date");
  }

  return (
    <div>
        <Header />
        <main className="min-h-screen bg-background text-text">
        <section className="relative overflow-hidden border-b border-white/10 bg-background-light">
            <div className="pointer-events-none absolute -right-24 -top-24 size-96 rounded-full bg-primary/15 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-32 left-0 size-80 rounded-full bg-accent/10 blur-3xl" />

            <div className="mt-24 relative mx-auto max-w-7xl px-6 pb-20 pt-16 lg:px-8 lg:pb-24 lg:pt-24">
            <div className="mb-5 flex items-center gap-3 text-sm font-semibold tracking-[0.2em] text-accent uppercase">
                <span className="h-px w-8 bg-accent" />
                Nos expériences
            </div>

            <h1 className="max-w-4xl font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Explorez l'univers
                <span className="block text-primary-light">
                avec nous.
                </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-text-muted">
                Que vous soyez curieux, passionné ou simplement
                émerveillé par les étoiles, trouvez l'expérience
                astronomique qui vous correspond.
            </p>
            </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
            <div className="rounded-3xl border border-white/10 bg-surface p-6 shadow-card lg:p-8">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                <h2 className="text-xl font-bold">
                    Trouvez votre expérience
                </h2>
                <p className="mt-1 text-sm text-text-muted">
                    Affinez votre recherche selon vos envies.
                </p>
                </div>

                {hasActiveFilters && (
                <button
                    type="button"
                    onClick={resetFilters}
                    className="self-start text-sm font-medium text-accent transition hover:text-accent-soft"
                >
                    Réinitialiser les filtres
                </button>
                )}
            </div>

            <div className="mt-7">
                <label htmlFor="experience-search" className="sr-only">
                Rechercher une expérience
                </label>

                <input
                id="experience-search"
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Rechercher une expérience..."
                className="min-h-12 w-full rounded-xl border border-white/10 bg-surface-light px-5 text-text outline-none transition placeholder:text-text-muted focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-accent/20"
                />
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <div>
                <label
                    htmlFor="filter-audience"
                    className="mb-2 block text-sm font-medium text-text-muted"
                >
                    Public
                </label>

                <select
                    id="filter-audience"
                    value={audience}
                    onChange={(event) => setAudience(event.target.value)}
                    className="min-h-12 w-full rounded-xl border border-white/10 bg-surface-light px-4 text-text outline-none focus-visible:border-accent"
                >
                    <option value="all">Tous les publics</option>
                    {audiences.map((value) => (
                    <option key={value} value={value}>
                        {value}
                    </option>
                    ))}
                </select>
                </div>

                <div>
                <label
                    htmlFor="filter-level"
                    className="mb-2 block text-sm font-medium text-text-muted"
                >
                    Niveau
                </label>

                <select
                    id="filter-level"
                    value={level}
                    onChange={(event) => setLevel(event.target.value)}
                    className="min-h-12 w-full rounded-xl border border-white/10 bg-surface-light px-4 text-text outline-none focus-visible:border-accent"
                >
                    <option value="all">Tous les niveaux</option>
                    {levels.map((value) => (
                    <option key={value} value={value}>
                        {value}
                    </option>
                    ))}
                </select>
                </div>

                <div>
                <label
                    htmlFor="sort-experiences"
                    className="mb-2 block text-sm font-medium text-text-muted"
                >
                    Trier par
                </label>

                <select
                    id="sort-experiences"
                    value={sortBy}
                    onChange={(event) =>
                    setSortBy(event.target.value as SortOption)
                    }
                    className="min-h-12 w-full rounded-xl border border-white/10 bg-surface-light px-4 text-text outline-none focus-visible:border-accent"
                >
                    <option value="date">Prochaine date</option>
                    <option value="price-asc">Prix croissant</option>
                    <option value="price-desc">Prix décroissant</option>
                    <option value="name">Nom A → Z</option>
                </select>
                </div>
            </div>
            </div>

            <div className="mt-12 flex flex-wrap items-center justify-between gap-4">
            <div aria-live="polite">
                <h2 className="font-display text-2xl font-bold">
                Toutes nos expériences
                </h2>

                <p className="mt-2 text-sm text-text-muted">
                {filteredExperiences.length} expérience
                {filteredExperiences.length > 1 ? "s" : ""} trouvée
                {filteredExperiences.length > 1 ? "s" : ""}
                </p>
            </div>
            </div>

            {filteredExperiences.length > 0 ? (
            <div className="mt-8 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
                {filteredExperiences.map((experience) => (
                <ExperienceCard
                    key={experience.id}
                    experience={experience}
                />
                ))}
            </div>
            ) : (
            <div className="mt-8 rounded-3xl border border-white/10 bg-surface px-6 py-20 text-center">
                <div className="text-5xl">🔭</div>

                <h3 className="mt-5 text-2xl font-bold">
                Aucune expérience trouvée
                </h3>

                <p className="mx-auto mt-3 max-w-md text-text-muted">
                Essayez de modifier vos critères pour découvrir
                d'autres expériences astronomiques.
                </p>

                <button
                type="button"
                onClick={resetFilters}
                className="mt-7 rounded-full bg-primary px-7 py-3 font-semibold transition hover:bg-primary-light"
                >
                Effacer les filtres
                </button>
            </div>
            )}
        </section>
    </main>
    <Footer />
    </div>
  );
}
