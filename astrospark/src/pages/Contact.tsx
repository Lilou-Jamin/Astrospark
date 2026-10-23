
import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";

type ContactForm = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialForm: ContactForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState<ContactForm>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  function updateField(
    field: keyof ContactForm,
    value: string
  ) {
    setForm((previous) => ({
      ...previous,
      [field]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    setSubmitted(true);
  }

  function resetForm() {
    setForm(initialForm);
    setSubmitted(false);
  }

  const inputClass =
    "min-h-12 w-full rounded-xl border border-white/10 bg-surface-light px-4 text-text outline-none transition placeholder:text-text-muted/60 focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-accent/20";

  const labelClass = "mb-2 block text-sm font-medium";

  return (
    <div>
        <Header />
        <main className="min-h-screen bg-background text-text">
        <section className="relative overflow-hidden border-b border-white/10 bg-background-light">
            <div className="pointer-events-none absolute -right-24 -top-24 size-96 rounded-full bg-primary/15 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 left-0 size-72 rounded-full bg-accent/10 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-36 lg:px-8 lg:pb-24">

            <p className="mt-10 text-sm font-semibold tracking-[0.2em] text-accent uppercase">
                ✦ Contactez-nous
            </p>

            <h1 className="mt-5 max-w-3xl font-display text-4xl sm:text-5xl lg:text-6xl">
                Une question ?
                <span className="block text-primary-light">
                Parlons étoiles.
                </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-text-muted">
                Besoin d'un renseignement sur une expérience,
                une réservation ou le matériel nécessaire ?
                Notre équipe est à votre écoute.
            </p>
            </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-8 px-6 py-16 lg:grid-cols-[minmax(0,1.3fr)_minmax(300px,0.7fr)] lg:px-8">
            <div className="rounded-3xl border border-white/10 bg-surface p-6 shadow-card sm:p-10">
            {submitted ? (
                <div
                role="status"
                className="flex min-h-96 flex-col items-center justify-center text-center"
                >
                <span className="text-6xl">✨</span>

                <h2 className="mt-6 font-display text-3xl">
                    Message préparé !
                </h2>

                <p className="mt-4 max-w-md leading-7 text-text-muted">
                    Merci {form.name}. Votre formulaire a été
                    validé avec succès.
                </p>

                <p className="mt-2 text-sm text-text-muted">
                    Ceci est une démonstration : aucun message
                    n'a réellement été envoyé.
                </p>

                <button
                    type="button"
                    onClick={resetForm}
                    className="mt-8 rounded-full bg-primary px-7 py-3 font-semibold transition hover:bg-primary-light"
                >
                    Écrire un autre message
                </button>
                </div>
            ) : (
                <>
                <h2 className="font-display text-2xl sm:text-3xl">
                    Envoyez-nous un message
                </h2>

                <p className="mt-3 text-sm leading-7 text-text-muted">
                    Remplissez ce formulaire pour nous faire part
                    de votre demande.
                </p>

                <form
                    onSubmit={handleSubmit}
                    className="mt-8 space-y-6"
                >
                    <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                        <label
                        htmlFor="contact-name"
                        className={labelClass}
                        >
                        Nom complet *
                        </label>

                        <input
                        id="contact-name"
                        type="text"
                        autoComplete="name"
                        required
                        minLength={2}
                        maxLength={100}
                        value={form.name}
                        onChange={(event) =>
                            updateField("name", event.target.value)
                        }
                        placeholder="Votre nom"
                        className={inputClass}
                        />
                    </div>

                    <div>
                        <label
                        htmlFor="contact-email"
                        className={labelClass}
                        >
                        Adresse e-mail *
                        </label>

                        <input
                        id="contact-email"
                        type="email"
                        autoComplete="email"
                        required
                        maxLength={254}
                        value={form.email}
                        onChange={(event) =>
                            updateField("email", event.target.value)
                        }
                        placeholder="vous@exemple.fr"
                        className={inputClass}
                        />
                    </div>
                    </div>

                    <div>
                    <label
                        htmlFor="contact-subject"
                        className={labelClass}
                    >
                        Sujet de votre demande *
                    </label>

                    <select
                        id="contact-subject"
                        required
                        value={form.subject}
                        onChange={(event) =>
                        updateField("subject", event.target.value)
                        }
                        className={inputClass}
                    >
                        <option value="" disabled>
                        Sélectionnez un sujet
                        </option>
                        <option value="reservation">
                        Question sur une réservation
                        </option>
                        <option value="experience">
                        Informations sur une expérience
                        </option>
                        <option value="equipment">
                        Matériel et préparation
                        </option>
                        <option value="group">
                        Sortie de groupe
                        </option>
                        <option value="other">
                        Autre demande
                        </option>
                    </select>
                    </div>

                    <div>
                    <label
                        htmlFor="contact-message"
                        className={labelClass}
                    >
                        Votre message *
                    </label>

                    <textarea
                        id="contact-message"
                        required
                        minLength={10}
                        maxLength={2000}
                        rows={6}
                        value={form.message}
                        onChange={(event) =>
                        updateField("message", event.target.value)
                        }
                        placeholder="Bonjour, je souhaiterais avoir des renseignements concernant..."
                        className={`${inputClass} resize-y py-4`}
                    />

                    <p className="mt-2 text-right text-xs text-text-muted">
                        {form.message.length} / 2000 caractères
                    </p>
                    </div>

                    <p className="text-xs leading-6 text-text-muted">
                    Les champs marqués d'un * sont obligatoires.
                    </p>

                    <button
                    type="submit"
                    className="flex min-h-12 w-full items-center justify-center gap-3 rounded-full bg-primary px-8 font-semibold transition hover:bg-primary-light focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:w-auto"
                    >
                    Envoyer mon message
                    <span aria-hidden="true">↗</span>
                    </button>
                </form>
                </>
            )}
            </div>

            <aside className="space-y-6">
            <div className="rounded-3xl border border-white/10 bg-surface p-7">
                <h2 className="font-display text-2xl">
                Retrouvez-nous
                </h2>

                <div className="mt-8 space-y-8">
                <div className="flex items-start gap-4">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-xl text-accent">
                    ⌖
                    </span>

                    <div>
                    <h3 className="font-semibold">
                        Notre observatoire
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-text-muted">
                        Ardennes, France
                        <br />
                        Adresse exacte communiquée lors
                        de la réservation.
                    </p>
                    </div>
                </div>

                <div className="flex items-start gap-4">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-xl text-accent">
                    ✉
                    </span>

                    <div>
                    <h3 className="font-semibold">
                        Adresse e-mail
                    </h3>
                    <p className="mt-2 text-sm text-text-muted">
                        contact@astrospark.example
                    </p>
                    </div>
                </div>

                <div className="flex items-start gap-4">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-xl text-accent">
                    ◷
                    </span>

                    <div>
                    <h3 className="font-semibold">
                        Nos horaires
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-text-muted">
                        Séances organisées selon le calendrier
                        et les conditions météorologiques.
                    </p>
                    </div>
                </div>
                </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-primary/10 p-8">
                <div className="pointer-events-none absolute -right-12 -top-12 size-40 rounded-full bg-primary/20 blur-3xl" />

                <div className="relative">
                <span className="text-3xl">✦</span>

                <h2 className="mt-5 font-display text-2xl">
                    Prêt à explorer ?
                </h2>

                <p className="mt-4 text-sm leading-7 text-text-muted">
                    Découvrez nos expériences astronomiques
                    et trouvez votre prochaine aventure.
                </p>

                <Link
                    to="/experiences"
                    className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full border border-primary/40 px-6 text-sm font-semibold transition hover:bg-primary/20"
                >
                    Voir les expériences →
                </Link>
                </div>
            </div>
            </aside>
        </section>

        <section className="border-t border-white/10 bg-background-light">
            <div className="mx-auto max-w-4xl px-6 py-20 lg:px-8">
            <div className="text-center">
                <p className="text-sm font-semibold tracking-widest text-accent uppercase">
                Questions fréquentes
                </p>

                <h2 className="mt-4 font-display text-3xl sm:text-4xl">
                Avant de lever les yeux au ciel...
                </h2>
            </div>

            <div className="mt-10 space-y-4">
                {[
                {
                    question: "Faut-il apporter son propre télescope ?",
                    answer:
                    "Non, le matériel d'observation est fourni. Certaines activités peuvent toutefois permettre d'utiliser votre propre équipement.",
                },
                {
                    question: "Les expériences sont-elles accessibles aux débutants ?",
                    answer:
                    "Oui ! Plusieurs expériences sont spécialement conçues pour les personnes qui découvrent l'astronomie.",
                },
                {
                    question: "Que se passe-t-il si le ciel est couvert ?",
                    answer:
                    "Les observations dépendent de la météo. En cas de conditions défavorables, l'équipe vous informera des possibilités de report.",
                },
                {
                    question: "Peut-on venir en famille ?",
                    answer:
                    "Oui, certaines activités sont adaptées aux familles. Consultez le public recommandé sur chaque fiche d'expérience.",
                },
                ].map((item) => (
                <details
                    key={item.question}
                    className="group rounded-2xl border border-white/10 bg-surface p-6"
                >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                    {item.question}
                    <span
                        aria-hidden="true"
                        className="text-xl text-accent transition group-open:rotate-45"
                    >
                        +
                    </span>
                    </summary>

                    <p className="mt-4 leading-7 text-text-muted">
                    {item.answer}
                    </p>
                </details>
                ))}
            </div>
            </div>
        </section>
        </main>
        <Footer />
    </div>
  );
}
