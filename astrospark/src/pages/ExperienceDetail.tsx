
import { useParams, Link } from "react-router-dom";
import experiencesData from "../data/experiences.json";
import type { Experience } from "../types/Experience";
import { BookingForm } from "../components/BookingForm/BookingForm";
import { Header } from "../components/Header/Header";

const experiences = experiencesData as Experience[];

export function ExperienceDetail() {
  const { id } = useParams();

  const experience = experiences.find(
    (item) => item.id === Number(id)
  );

  if (!experience) {
    return (
      <main className="min-h-screen bg-background px-6 py-32 text-center text-text">
        <h1 className="text-3xl font-bold">
          Expérience introuvable
        </h1>
        <Link
          to="/experiences"
          className="mt-6 inline-block text-accent underline"
        >
          Retour aux expériences
        </Link>
      </main>
    );
  }

  return (
    <div>
      <Header />
  
      <main className="min-h-screen bg-background text-text">
        <section className="relative min-h-115 overflow-hidden">
          <img
            src={experience.image}
            alt=""
            className="absolute inset-0 size-full object-cover"
          />

          <div className="absolute inset-0 bg-linear-to-t from-background via-background/60 to-background/20" />

          <div className="relative mx-auto flex min-h-115 max-w-7xl flex-col justify-end px-6 pb-16 pt-32 lg:px-8">
            <Link
              to="/experiences"
              className="mb-8 w-fit text-sm text-text-muted transition hover:text-accent"
            >
              ← Toutes les expériences
            </Link>

            <div className="mb-5 flex flex-wrap gap-3">
              {[experience.category, experience.level, experience.audience].map(
                (label) => (
                  <span
                    key={label}
                    className="rounded-full border border-white/20 bg-background/70 px-4 py-2 text-xs font-medium backdrop-blur"
                  >
                    {label}
                  </span>
                )
              )}
            </div>

            <h1 className="font-display text-4xl font-bold sm:text-6xl">
              {experience.title}
            </h1>

            <p className="mt-5 max-w-2xl text-lg text-text-muted">
              {experience.description}
            </p>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[minmax(0,1fr)_380px] lg:px-8">
          <div>
            <h2 className="font-display text-3xl font-bold">
              À propos de cette expérience
            </h2>

            <p className="mt-6 leading-8 text-text-muted">
              {experience.longDescription ?? experience.description}
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <InfoCard
                icon="⏱"
                label="Durée"
                value={`${experience.duration} minutes`}
              />
              <InfoCard
                icon="🔭"
                label="Niveau"
                value={experience.level}
              />
              <InfoCard
                icon="👥"
                label="Public"
                value={experience.audience}
              />
            </div>

            <div className="mt-14">
              <h2 className="font-display text-2xl font-bold">
                Au programme
              </h2>

              <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                {(experience.highlights ?? [
                  "Découverte de l'astronomie",
                  "Accompagnement par nos animateurs",
                  "Observation avec du matériel adapté",
                ]).map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-surface p-5"
                  >
                    <span className="text-accent">✦</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-14 rounded-2xl border border-primary/20 bg-primary/10 p-6">
              <h2 className="text-lg font-semibold">
                ✨ Bon à savoir
              </h2>
              <p className="mt-3 text-sm leading-7 text-text-muted">
                Le matériel d'observation est fourni. Prévoyez
                des vêtements chauds : les soirées peuvent être
                fraîches, même en été. Les observations dépendent
                des conditions météorologiques.
              </p>
            </div>
          </div>

          {/* RÉSERVATION */}
          <aside id="reservation" className="self-start lg:sticky lg:top-8">
            <BookingForm experience={experience} />
          </aside>
        </section>
      </main>
    </div>
  );
}

function InfoCard({
  icon,
  label,
  value,
}: {
  icon: string;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-surface p-5">
      <span className="text-2xl">{icon}</span>
      <p className="mt-3 text-sm text-text-muted">{label}</p>
      <p className="mt-1 font-semibold">{value}</p>
    </div>
  );
}
