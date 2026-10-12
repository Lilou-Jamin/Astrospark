export function Footer() {
  return (
    <footer
        id="contact"
        className="border-t border-white/5 bg-background-light"
      >
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <div className="text-xl font-display">
                Astro<span className="text-accent">Spark</span>
              </div>

              <p className="mt-4 max-w-sm text-sm leading-6 text-text-muted">
                Des expériences astronomiques accessibles à tous pour
                découvrir, observer et comprendre notre Univers.
              </p>
            </div>

            <div>
              <h2 className="font-semibold">
                Explorer
              </h2>

              <ul className="mt-4 space-y-3 text-sm text-text-muted">
                <li>
                  <a href="#experiences" className="hover:text-text">
                    Nos expériences
                  </a>
                </li>

                <li>
                  <a href="#about" className="hover:text-text">
                    L'observatoire
                  </a>
                </li>

                <li>
                  <a href="#contact" className="hover:text-text">
                    Contact
                  </a>
                </li>
              </ul>
            </div>


            <div>
              <h2 className="font-semibold">
                Une question ?
              </h2>

              <p className="mt-4 text-sm text-text-muted">
                contact@astrospark.fr
              </p>

              <p className="mt-2 text-sm text-text-muted">
                03 00 00 00 00
              </p>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-4 border-t border-white/5 pt-8 text-sm text-text-muted sm:flex-row sm:items-center sm:justify-between">
            <div className="flex gap-6">
              <a href="/mentions-legales" className="hover:text-text">
                Mentions légales
              </a>

              <a href="/confidentialite" className="hover:text-text">
                Confidentialité
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
}