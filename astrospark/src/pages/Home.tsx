import experiences from "../data/experiences.json";
import { ExperienceCard } from "../components/ExperienceCard/ExperienceCard";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { Benefit } from "../components/Benefit/Benefit";
import { Step } from "../components/Step/Step";

function Home() {
  const experiencesList = experiences.map((experience) => {
    const nextSession = experience.sessions
      .filter((session) => new Date(session.date).getTime() > Date.now())
      .sort(
        (a, b) =>
          new Date(a.date).getTime() - new Date(b.date).getTime()
      )[0];

    return {
      ...experience,
      date: nextSession?.date ?? "À venir",
      availablePlaces: nextSession?.availablePlaces ?? 0,
    };
  });

  return (
    <div className="min-h-screen bg-background text-text">
      <Header />

      <main>
        <section className="relative flex min-h-screen items-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/images/hero-night-sky.webp"
              alt=""
              className="size-full object-cover"
            />

            <div className="absolute inset-0 bg-background/65" />

            <div className="absolute inset-0 bg-linear-to-r from-background via-background/75 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 h-48 bg-linear-to-t from-background to-transparent" />
          </div>


          <div
            className="absolute right-[10%] top-[25%] size-80 rounded-full bg-primary/15 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative mx-auto w-full max-w-7xl px-6 pb-20 pt-36 lg:px-8">

            <div className="max-w-3xl">

              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
                <span>✦</span>
                Explorez l'Univers autrement
              </div>

              <h1 className="text-5xl font-display leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                Le ciel n'a jamais été
                <span className="block bg-linear-to-r from-primary-light to-accent bg-clip-text text-transparent">
                  aussi proche.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-text-muted sm:text-xl">
                Vivez une nuit sous les étoiles et découvrez les merveilles
                de l'Univers accompagné par nos animateurs passionnés.
                Aucune connaissance en astronomie n'est nécessaire.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">

                <a
                  href="#experiences"
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-7 font-semibold shadow-glow transition hover:-translate-y-0.5 hover:bg-primary-light focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                >
                  Découvrir nos expériences
                </a>

                <a
                  href="#about"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 font-semibold backdrop-blur-sm transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                >
                  Découvrir AstroSpark
                </a>
              </div>
            </div>
          </div>
        </section>


        {/* =========================
            INTRO / BENEFITS
        ========================== */}
        <section
          id="about"
          className="border-y border-white/5 bg-background-light py-20"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="grid gap-8 md:grid-cols-3">

              <Benefit
                icon="🔭"
                title="Observez vraiment"
                text="Mettez l'œil au télescope et observez vous-même les objets célestes."
              />

              <Benefit
                icon="🧑‍🚀"
                title="Guidé par des passionnés"
                text="Nos animateurs vous accompagnent et rendent l'astronomie accessible à tous."
              />

              <Benefit
                icon="🌌"
                title="Loin des lumières"
                text="Profitez d'un ciel préservé de la pollution lumineuse pour une expérience exceptionnelle."
              />

            </div>
          </div>
        </section>


        {/* =========================
            EXPERIENCES
        ========================== */}
        <section
          id="experiences"
          className="py-24 sm:py-32"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                  Nos expériences
                </p>

                <h2 className="max-w-2xl text-3xl font-display tracking-tight sm:text-4xl">
                  Choisissez votre prochaine
                  <span className="text-primary-light"> aventure céleste.</span>
                </h2>

                <p className="mt-5 max-w-2xl leading-7 text-text-muted">
                  Que vous découvriez l'astronomie ou que vous soyez déjà
                  passionné, trouvez une expérience adaptée à vos envies.
                </p>
              </div>

              <a
                href="/experiences"
                className="inline-flex min-h-11 items-center font-semibold text-accent hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                Voir toutes les expériences
              </a>
            </div>


            <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
              {experiencesList.map((experience) => (
                <ExperienceCard
                  key={experience.id}
                  experience={experience}
                />
              ))}
            </div>

          </div>
        </section>


        {/* =========================
            HOW IT WORKS
        ========================== */}
        <section className="bg-surface/50 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="mx-auto max-w-2xl text-center">

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                Votre soirée
              </p>

              <h2 className="mt-3 text-3xl font-display sm:text-4xl">
                Une aventure en trois étapes
              </h2>
            </div>

            <div className="mt-16 grid gap-12 md:grid-cols-3">
              <Step
                number="01"
                title="Choisissez"
                text="Trouvez l'expérience adaptée à votre niveau, vos envies et vos disponibilités."
              />

              <Step
                number="02"
                title="Réservez"
                text="Sélectionnez votre séance et réservez vos places en quelques instants."
              />

              <Step
                number="03"
                title="Observez"
                text="Rejoignez-nous sous les étoiles et laissez-vous guider à travers l'Univers."
              />
            </div>
          </div>
        </section>

        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-surface px-6 py-16 text-center shadow-card sm:px-12">
              <div
                className="absolute left-1/2 top-0 size-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl"
                aria-hidden="true"
              />

              <div className="relative">

                <span className="text-4xl" aria-hidden="true">
                  ✨
                </span>

                <h2 className="mx-auto mt-6 max-w-2xl text-3xl font-display sm:text-5xl">
                  Votre prochaine aventure commence
                  <span className="text-accent"> sous les étoiles.</span>
                </h2>

                <p className="mx-auto mt-6 max-w-xl leading-7 text-text-muted">
                  Découvrez nos prochaines soirées d'observation et trouvez
                  celle qui vous ressemble.
                </p>

                <a
                  href="/experiences"
                  className="mt-9 inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-8 font-semibold transition hover:bg-primary-light focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                >
                  Voir les prochaines séances
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

export default Home;