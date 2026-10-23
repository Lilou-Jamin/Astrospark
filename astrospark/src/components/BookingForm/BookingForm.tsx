
import { useState, type FormEvent } from "react";
import type { Experience } from "../../types/Experience";

interface BookingFormProps {
  experience: Experience;
}

export function BookingForm({ experience }: BookingFormProps) {
  const [sessionId, setSessionId] = useState("");
  const [participants, setParticipants] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  const sessions = experience.sessions
    .filter((session) => new Date(session.date).getTime() > Date.now())
    .sort(
      (a, b) =>
        new Date(a.date).getTime() - new Date(b.date).getTime()
    );

  const selectedSession = sessions.find(
    (session) => session.id === Number(sessionId)
  );

  const maxParticipants = selectedSession?.availablePlaces ?? 1;
  const totalPrice = experience.price * participants;

  function handleSessionChange(value: string) {
    setSessionId(value);
    setParticipants(1);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (
      !selectedSession ||
      selectedSession.availablePlaces < participants ||
      participants < 1
    ) {
      return;
    }
    setConfirmed(true);
  }

  if (confirmed && selectedSession) {
    return (
      <div
        role="status"
        className="rounded-3xl border border-success/30 bg-surface p-8 text-center shadow-card"
      >
        <div className="text-5xl">✨</div>

        <h2 className="mt-5 text-2xl font-bold">
          Demande simulée !
        </h2>

        <p className="mt-4 leading-7 text-text-muted">
          Merci {name}. Votre demande pour
          {" "}{participants} personne(s) a bien été simulée.
        </p>

        <p className="mt-3 text-sm text-text-muted">
          Aucun e-mail n'a été envoyé et aucune place
          n'a été réellement réservée.
        </p>

        <button
          type="button"
          onClick={() => setConfirmed(false)}
          className="mt-6 rounded-full bg-primary px-6 py-3 font-semibold hover:bg-primary-light"
        >
          Faire une autre demande
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-white/10 bg-surface p-6 shadow-card sm:p-8">
      <div className="border-b border-white/10 pb-6">
        <p className="text-sm text-text-muted">
          À partir de
        </p>

        <p className="mt-1 text-4xl font-bold">
          {experience.price} €
          <span className="ml-2 text-sm font-normal text-text-muted">
            / personne
          </span>
        </p>
      </div>

      <h2 className="mt-7 text-xl font-bold">
        Réserver cette expérience
      </h2>

      <p className="mt-2 text-sm text-text-muted">
        Choisissez votre séance et vos participants.
      </p>

      <form onSubmit={handleSubmit} className="mt-7 space-y-6">
        <div>
          <label
            htmlFor="session"
            className="mb-2 block text-sm font-medium"
          >
            Date de la séance
          </label>

          <select
            id="session"
            required
            value={sessionId}
            onChange={(event) =>
              handleSessionChange(event.target.value)
            }
            className="min-h-12 w-full rounded-xl border border-white/15 bg-surface-light px-4 text-text outline-none focus-visible:border-accent"
          >
            <option value="">Choisir une date</option>

            {sessions.map((session) => (
              <option
                key={session.id}
                value={session.id}
                disabled={session.availablePlaces === 0}
              >
                {new Intl.DateTimeFormat("fr-FR", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                }).format(new Date(session.date))}
                {" — "}
                {session.availablePlaces === 0
                  ? "Complet"
                  : `${session.availablePlaces} places`}
              </option>
            ))}
          </select>

          {sessions.length === 0 && (
            <p className="mt-2 text-sm text-error">
              Aucune séance à venir pour le moment.
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="participants"
            className="mb-2 block text-sm font-medium"
          >
            Nombre de participants
          </label>

          <div className="flex items-center justify-between rounded-xl border border-white/15 bg-surface-light p-2">
            <button
              type="button"
              disabled={!selectedSession || participants <= 1}
              onClick={() =>
                setParticipants((value) => Math.max(1, value - 1))
              }
              aria-label="Retirer un participant"
              className="size-10 rounded-lg bg-white/5 text-xl hover:bg-white/10 disabled:opacity-30"
            >
              −
            </button>

            <span aria-live="polite" className="font-semibold">
              {participants}
            </span>

            <button
              type="button"
              disabled={
                !selectedSession ||
                participants >= maxParticipants
              }
              onClick={() =>
                setParticipants((value) =>
                  Math.min(maxParticipants, value + 1)
                )
              }
              aria-label="Ajouter un participant"
              className="size-10 rounded-lg bg-white/5 text-xl hover:bg-white/10 disabled:opacity-30"
            >
              +
            </button>
          </div>

          {selectedSession && (
            <p className="mt-2 text-xs text-text-muted">
              {selectedSession.availablePlaces} places disponibles
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="booking-name"
            className="mb-2 block text-sm font-medium"
          >
            Nom complet
          </label>

          <input
            id="booking-name"
            type="text"
            autoComplete="name"
            required
            maxLength={100}
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Votre nom"
            className="min-h-12 w-full rounded-xl border border-white/15 bg-surface-light px-4 text-text outline-none placeholder:text-text-muted focus-visible:border-accent"
          />
        </div>

        <div>
          <label
            htmlFor="booking-email"
            className="mb-2 block text-sm font-medium"
          >
            Adresse e-mail
          </label>

          <input
            id="booking-email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="vous@exemple.fr"
            className="min-h-12 w-full rounded-xl border border-white/15 bg-surface-light px-4 text-text outline-none placeholder:text-text-muted focus-visible:border-accent"
          />
        </div>

        <div className="rounded-2xl bg-background p-5">
          <div className="flex justify-between text-sm text-text-muted">
            <span>
              {experience.price} € × {participants}
            </span>
            <span>{totalPrice} €</span>
          </div>

          <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4">
            <span className="font-semibold">Total</span>
            <strong className="text-2xl text-accent">
              {totalPrice} €
            </strong>
          </div>
        </div>

        <button
          type="submit"
          disabled={
            !selectedSession ||
            selectedSession.availablePlaces === 0
          }
          className="min-h-12 w-full rounded-full bg-primary px-6 font-semibold transition hover:bg-primary-light focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent disabled:cursor-not-allowed disabled:opacity-40"
        >
          Confirmer ma demande
        </button>
      </form>
    </div>
  );
}
