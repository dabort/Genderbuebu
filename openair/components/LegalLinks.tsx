"use client";

import { useEffect, useState } from "react";

type OverlayType = "impressum" | "datenschutz" | "infoblatt" | null;

const INFO_PDF =
  "https://pub-894f6ed26225410c96c9a46e36ef0199.r2.dev/openair/branding/genderbuebu_openair_2027_lineup_plakat_A4_hoch.pdf";

export default function LegalLinks() {
  const [active, setActive] = useState<OverlayType>(null);

  const close = () => setActive(null);

  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [active]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <>
      <div className="flex flex-wrap gap-x-6 gap-y-3">
        <button
          type="button"
          onClick={() => setActive("impressum")}
          className="transition-colors hover:text-black"
        >
          Impressum
        </button>

        <button
          type="button"
          onClick={() => setActive("datenschutz")}
          className="transition-colors hover:text-black"
        >
          Datenschutz
        </button>

        <button
          type="button"
          onClick={() => setActive("infoblatt")}
          className="transition-colors hover:text-black"
        >
          Infoblatt
        </button>
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[200] overflow-y-auto bg-black/95 text-white backdrop-blur-md"
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={close}
            aria-label="Fenster schließen"
            className="fixed right-5 top-5 z-[210] flex h-12 w-12 items-center justify-center border border-white/30 bg-black/60 transition hover:bg-white/10 md:right-8 md:top-8 md:h-14 md:w-14"
          >
            <span className="relative block h-7 w-7">
              <span className="absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 rotate-45 bg-white" />
              <span className="absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 -rotate-45 bg-white" />
            </span>
          </button>

          <div className="mx-auto max-w-4xl px-6 py-20 md:px-10 md:py-28">
            {active === "impressum" && (
              <article>
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-white/45">
                  Rechtliche Informationen
                </p>

                <h2 className="mb-12 text-4xl font-black uppercase md:text-6xl">
                  Impressum
                </h2>

                <div className="space-y-10 text-base leading-8 text-white/75">
                  <section>
                    <h3 className="mb-3 font-bold uppercase text-white">
                      Betreiberin und verantwortlich für den Inhalt
                    </h3>

                    <p>
                      Music &amp; Event VS GmbH<br />
                      Breitu Acher 4<br />
                      3903 Mund<br />
                      Schweiz
                    </p>

                    <p className="mt-4">
                      E-Mail:{" "}
                      <a
                        href="mailto:info@genderbuebu.ch"
                        className="text-white underline underline-offset-4"
                      >
                        info@genderbuebu.ch
                      </a>
                    </p>
                  </section>

                  <section>
                    <h3 className="mb-3 font-bold uppercase text-white">
                      Handelsregister
                    </h3>

                    <p>
                      UID: CHE-465.276.992<br />
                      Handelsregister-Nr.: CH-600.4.019.616-8<br />
                      Handelsregisteramt des Kantons Wallis
                    </p>
                  </section>

                  <section>
                    <h3 className="mb-3 font-bold uppercase text-white">
                      Webseite / technische Umsetzung
                    </h3>

                    <p>
                      Daniel Borter<br />
                      <a
                        href="https://webbox.one"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white underline underline-offset-4"
                      >
                        webbox.one
                      </a>
                    </p>
                  </section>
                </div>
              </article>
            )}

            {active === "datenschutz" && (
              <article>
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-white/45">
                  Datenschutz
                </p>

                <h2 className="mb-12 text-4xl font-black uppercase md:text-6xl">
                  Datenschutzerklärung
                </h2>

                <div className="space-y-10 text-base leading-8 text-white/75">
                  <section>
                    <h3 className="mb-3 text-xl font-bold text-white">
                      1. Verantwortliche Stelle
                    </h3>
                    <p>
                      Verantwortlich für die Bearbeitung von Personendaten im
                      Zusammenhang mit dieser Website und dem Genderbüebu Open Air ist:
                    </p>
                    <p className="mt-4">
                      Music &amp; Event VS GmbH<br />
                      Breitu Acher 4<br />
                      3903 Mund<br />
                      Schweiz<br />
                      E-Mail: info@genderbuebu.ch
                    </p>
                  </section>

                  <section>
                    <h3 className="mb-3 text-xl font-bold text-white">
                      2. Allgemeines
                    </h3>
                    <p>
                      Wir bearbeiten Personendaten im Einklang mit dem
                      schweizerischen Datenschutzrecht, insbesondere dem
                      Bundesgesetz über den Datenschutz (DSG), soweit dieses auf
                      die jeweilige Bearbeitung anwendbar ist.
                    </p>
                  </section>

                  <section>
                    <h3 className="mb-3 text-xl font-bold text-white">
                      3. Bearbeitung von Personendaten
                    </h3>
                    <p>
                      Wir bearbeiten Personendaten nur soweit dies für den
                      Betrieb dieser Website, die Kommunikation mit
                      Besucherinnen und Besuchern, die Organisation und
                      Durchführung des Genderbüebu Open Air sowie für damit
                      zusammenhängende Dienstleistungen erforderlich ist.
                    </p>
                  </section>

                  <section>
                    <h3 className="mb-3 text-xl font-bold text-white">
                      4. Kontaktaufnahme
                    </h3>
                    <p>
                      Bei einer Kontaktaufnahme per E-Mail bearbeiten wir die
                      übermittelten Angaben zur Bearbeitung und Beantwortung der
                      Anfrage sowie für allfällige damit zusammenhängende
                      Anschlussfragen.
                    </p>
                  </section>

                  <section>
                    <h3 className="mb-3 text-xl font-bold text-white">
                      5. Server- und Zugriffsdaten
                    </h3>
                    <p>
                      Beim Aufruf der Website können technisch erforderliche
                      Zugriffsdaten verarbeitet werden. Dazu können insbesondere
                      IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene
                      Seiten oder Dateien, Browser- und Geräteinformationen
                      sowie technische Protokolldaten gehören. Diese Daten
                      dienen insbesondere dem sicheren und zuverlässigen
                      Betrieb der Website sowie der Fehleranalyse.
                    </p>
                  </section>

                  <section>
                    <h3 className="mb-3 text-xl font-bold text-white">
                      6. Externe Inhalte und Dienste
                    </h3>
                    <p>
                      Auf dieser Website können Inhalte oder Ressourcen externer
                      Anbieter eingebunden oder verlinkt sein. Beim Abruf solcher
                      Inhalte kann eine technische Verbindung zu den jeweiligen
                      Anbietern hergestellt werden. Für deren Datenbearbeitung
                      gelten ergänzend die Datenschutzbestimmungen der
                      jeweiligen Anbieter.
                    </p>
                  </section>

                  <section>
                    <h3 className="mb-3 text-xl font-bold text-white">
                      7. Foto- und Videoaufnahmen am Open Air
                    </h3>
                    <p>
                      Im Rahmen des Genderbüebu Open Air werden Foto- und
                      Videoaufnahmen zur Dokumentation und Berichterstattung
                      über die Veranstaltung sowie für die Kommunikation des
                      Veranstalters erstellt. Dabei können Besucherinnen und
                      Besucher erkennbar abgebildet werden.
                    </p>

                    <p className="mt-4">
                      Bei der Veröffentlichung und Verwendung solcher Aufnahmen
                      berücksichtigen wir die anwendbaren Persönlichkeits- und
                      Datenschutzrechte. Bei gezielten Aufnahmen einzelner
                      Personen oder Situationen, bei denen die abgebildete
                      Person im Mittelpunkt steht, werden die Umstände der
                      Aufnahme und die erforderlichen Rechte besonders
                      berücksichtigt.
                    </p>

                    <p className="mt-4">
                      Personen, die Fragen zu einer veröffentlichten Aufnahme
                      haben oder aus nachvollziehbaren Gründen eine Überprüfung
                      beziehungsweise Entfernung einer bestimmten Aufnahme
                      wünschen, können sich unter info@genderbuebu.ch an uns
                      wenden. Die Anfrage wird unter Berücksichtigung der
                      jeweiligen Umstände und der anwendbaren Rechte geprüft.
                    </p>
                  </section>

                  <section>
                    <h3 className="mb-3 text-xl font-bold text-white">
                      8. Urheberrechte an Fotos und Videos
                    </h3>
                    <p>
                      Die auf dieser Website veröffentlichten Fotos, Videos,
                      Grafiken und sonstigen Inhalte sind urheberrechtlich
                      geschützt, soweit die gesetzlichen Voraussetzungen erfüllt
                      sind. Eine Verwendung, Vervielfältigung, Bearbeitung oder
                      Weiterveröffentlichung durch Dritte ist ohne entsprechende
                      Berechtigung nicht gestattet.
                    </p>
                  </section>

                  <section>
                    <h3 className="mb-3 text-xl font-bold text-white">
                      9. Bekanntgabe an Dritte
                    </h3>
                    <p>
                      Personendaten können an Dienstleister weitergegeben werden,
                      soweit dies für den Betrieb der Website oder die Erbringung
                      der jeweiligen Leistungen erforderlich ist. Dabei achten
                      wir auf einen angemessenen Schutz der Personendaten.
                    </p>
                  </section>

                  <section>
                    <h3 className="mb-3 text-xl font-bold text-white">
                      10. Datensicherheit
                    </h3>
                    <p>
                      Wir treffen angemessene technische und organisatorische
                      Massnahmen, um Personendaten vor unbefugtem Zugriff,
                      Verlust, Missbrauch oder unzulässiger Bearbeitung zu
                      schützen.
                    </p>
                  </section>

                  <section>
                    <h3 className="mb-3 text-xl font-bold text-white">
                      11. Rechte betroffener Personen
                    </h3>
                    <p>
                      Betroffene Personen können im Rahmen des anwendbaren
                      Datenschutzrechts insbesondere Auskunft über die
                      Bearbeitung ihrer Personendaten verlangen sowie je nach
                      den gesetzlichen Voraussetzungen weitere Rechte geltend
                      machen. Entsprechende Anfragen können an
                      info@genderbuebu.ch gerichtet werden.
                    </p>
                  </section>

                  <section>
                    <h3 className="mb-3 text-xl font-bold text-white">
                      12. Änderungen
                    </h3>
                    <p>
                      Diese Datenschutzerklärung kann angepasst werden, wenn sich
                      die Website, eingesetzte Dienste oder rechtliche
                      Anforderungen ändern. Es gilt die jeweils auf dieser
                      Website veröffentlichte Fassung.
                    </p>
                  </section>

                  <p className="border-t border-white/15 pt-8 text-sm text-white/45">
                    Stand: September 2026
                  </p>
                </div>
              </article>
            )}

            {active === "infoblatt" && (
              <article>
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-white/45">
                  Genderbüebu Open Air 2027
                </p>

                <h2 className="mb-8 text-4xl font-black uppercase md:text-6xl">
                  Infoblatt
                </h2>

                <div className="mb-6 flex flex-wrap gap-4">
                  <a
                    href={INFO_PDF}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-white/30 px-5 py-3 text-sm font-bold uppercase tracking-[0.12em] transition hover:bg-white hover:text-black"
                  >
                    PDF separat öffnen
                  </a>
                </div>

                <div className="overflow-hidden border border-white/15 bg-white">
                  <iframe
                    src={INFO_PDF}
                    title="Genderbüebu Open Air 2027 Infoblatt"
                    className="h-[75vh] w-full"
                  />
                </div>
              </article>
            )}
          </div>
        </div>
      )}
    </>
  );
}
