import type { Experience } from "../../types/Experience";
import styles from "./ExperienceCard.module.scss";
import { Link } from "react-router-dom";

interface ExperienceCardProps {
  experience: Experience;
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <article
      className={`${styles.card} group overflow-hidden border border-white/8 shadow-card`}
    >
      <div className="relative aspect-4/3 overflow-hidden">
        <img
          src={experience.image}
          alt=""
          className="size-full object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent" />

        <span className="absolute left-5 top-5 rounded-full border border-white/10 bg-background/70 px-3 py-1.5 text-xs font-semibold backdrop-blur">
          {experience.audience}
        </span>
      </div>

      <div className="p-6">

        <div className="flex items-center gap-2 text-sm text-accent">
          <span>{experience.icon}</span>
          <span>{experience.level}</span>
        </div>

        <h3 className="mt-3 text-xl font-display">
          {experience.title}
        </h3>

        <p className="mt-3 line-clamp-3 text-sm leading-6 text-text-muted">
          {experience.description}
        </p>

        <div className="mt-6 flex items-center gap-4 border-t border-white/5 pt-5 text-sm text-text-muted">

          <span>
            ⏱ {experience.duration} min
          </span>

          <span className="ml-auto">
            À partir de{" "}
            <strong className="text-lg text-text">
              {experience.price} €
            </strong>
          </span>

        </div>

        <Link
          to={`/experiences/${experience.id}`}
          className="mt-6 flex min-h-11 w-full items-center justify-center rounded-full border border-white/10 font-semibold transition hover:border-primary/50 hover:bg-primary/10"
        >
          Découvrir l'expérience
        </Link>

      </div>
    </article>
  );
}