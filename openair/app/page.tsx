import Image from "next/image";
import { siteData } from "@/lib/site-data";
import { gallery2026 } from "@/lib/gallery-2026";
import EventGallery from "@/components/EventGallery";
import MainMenu from "@/components/MainMenu";
import LegalLinks from "@/components/LegalLinks";

export default function Home() {
  const { event2027, retrospective2026 } = siteData;
  const hero = siteData.assets.hero2027;

  return (
    <main className="min-h-screen bg-black text-white">

      <MainMenu />

      {/* HERO 2027 */}
      <section id="start" className="relative overflow-hidden">

        {/* MASTER KEYVISUAL 2027 */}
        <div className="relative z-20 w-full">
          <Image
            src="https://pub-894f6ed26225410c96c9a46e36ef0199.r2.dev/openair/branding/hero_genderbuebu-openair_1.webp"
            alt="Genderbüebu Open Air 2027 – 06./07. August 2027, Festwiese Stapfen Naters"
            width={2103}
            height={1035}
            priority
            sizes="100vw"
            className="block h-auto w-full"
          />
        </div>

        {/* ZAUN MIT ERINGERKUH */}
        <div
          className="relative z-30 w-full"
          style={{
            marginTop: "-43vw"
          }}
        >
          <Image
            src="https://pub-894f6ed26225410c96c9a46e36ef0199.r2.dev/openair/branding/zaun_mit_Eringerkuh.webp"
            alt=""
            width={1920}
            height={600}
            sizes="100vw"
            className="block h-auto w-full"
          />
        </div>

      </section>

      {/* LINE-UP 2027 */}
      <section id="lineup" className="relative overflow-hidden bg-black text-white">

        {/* BERGLANDSCHAFT */}
        <Image
          src="https://pub-894f6ed26225410c96c9a46e36ef0199.r2.dev/openair/branding/lineup-background.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-bottom"
        />

        {/* dunkle Abstimmung für gute Lesbarkeit */}
        <div className="absolute inset-0 bg-black/20" />

        <div className="relative z-10 mx-auto min-h-[1050px] max-w-7xl px-6 py-24 md:min-h-[1250px] md:px-10 md:py-32 lg:min-h-[1450px] lg:px-14">

          {/* TITEL */}
          <div className="mb-14 text-center">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.5em] text-white/55">
              Genderbüebu Open Air
            </p>

            <h2 className="text-5xl font-black uppercase leading-none tracking-tight md:text-7xl">
              Line-up 2027
            </h2>
          </div>

          {/* LINE-UP SPALTEN */}
          <div className="relative grid gap-16 md:grid-cols-2 md:gap-24">

            {/* FREITAG */}
            <div className="text-center">
              <div className="mb-8">
                <h3 className="text-xl font-black uppercase tracking-[0.05em] md:text-2xl">
                  {event2027.lineup.friday.date}
                </h3>

                <p className="mt-1 text-sm font-medium uppercase tracking-[0.28em] text-white/70">
                  {event2027.lineup.friday.time}
                </p>
              </div>

              <div className="flex flex-col items-center">
                {event2027.lineup.friday.artists.map((artist, index) => (
                  <p
                    key={artist}
                    className={
                      index === 0
                        ? "mb-3 text-4xl font-black uppercase leading-tight md:text-5xl"
                        : index === 1
                          ? "mb-3 text-2xl font-bold uppercase leading-tight md:text-3xl"
                          : index < 5
                            ? "mb-3 text-xl font-bold uppercase leading-tight md:text-2xl"
                            : "mb-2 text-lg font-medium uppercase leading-tight text-white/85 md:text-xl"
                    }
                  >
                    {artist}
                  </p>
                ))}
              </div>
            </div>

            {/* MITTELTRENNER */}
            <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full -translate-x-1/2 md:block">
              <Image
                src="https://pub-894f6ed26225410c96c9a46e36ef0199.r2.dev/openair/branding/edelweissnadel.webp"
                alt=""
                width={1024}
                height={1536}
                className="h-full w-auto object-contain"
              />
            </div>

            {/* SAMSTAG */}
            <div className="text-center">
              <div className="mb-8">
                <h3 className="text-xl font-black uppercase tracking-[0.05em] md:text-2xl">
                  {event2027.lineup.saturday.date}
                </h3>

                <p className="mt-1 text-sm font-medium uppercase tracking-[0.28em] text-white/70">
                  {event2027.lineup.saturday.time}
                </p>
              </div>

              <div className="flex flex-col items-center">
                {event2027.lineup.saturday.artists.map((artist, index) => (
                  <p
                    key={artist}
                    className={
                      index === 0
                        ? "mb-3 text-4xl font-black uppercase leading-tight md:text-5xl"
                        : index < 3
                          ? "mb-3 text-2xl font-bold uppercase leading-tight md:text-3xl"
                          : index < 7
                            ? "mb-3 text-xl font-bold uppercase leading-tight md:text-2xl"
                            : "mb-2 text-lg font-medium uppercase leading-tight text-white/85 md:text-xl"
                    }
                  >
                    {artist}
                  </p>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* RÜCKBLICK 2026 */}
      <section id="rueckblick" className="rueckblick-tannen relative overflow-hidden bg-[#f3f0e8] text-black">

        {/* INTRO */}
        <div className="mx-auto grid max-w-7xl gap-10 px-6 pb-10 pt-20 md:px-10 md:pb-14 md:pt-28 lg:grid-cols-[1.1fr_0.9fr] lg:px-14">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-black/45">
              Open Air 2026
            </p>

            <h2 className="max-w-3xl text-4xl font-black uppercase leading-none tracking-tight sm:text-5xl md:text-6xl">
              {retrospective2026.title}
            </h2>
          </div>

          <div className="flex items-end">
            <p className="max-w-xl text-lg leading-8 text-black/80">
              Zwei Tage Musik, Begegnungen und echte Walliser Open-Air-Stimmung.
              Danke an alle, die 2026 auf der Festwiese Stapfen mit uns gefeiert haben.
              Die schönsten Momente zeigen wir euch hier noch einmal.
            </p>
          </div>
        </div>

        {/* VIDEOS 2026 */}
        <div className="mx-auto max-w-7xl px-6 pb-20 md:px-10 md:pb-24 lg:px-14">
          <div className="mb-8 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-black/45">
              Rückblick in Bewegung
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {retrospective2026.videos.map((video) => (
              <div
                key={video.youtubeId}
                className="relative aspect-video overflow-hidden bg-black"
              >
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}`}
                  title="Genderbüebu Open Air 2026 Video"
                  className="absolute inset-0 h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* GALERIEN */}
        <div className="mx-auto max-w-[1600px] px-3 pb-24 md:px-6 md:pb-32">

          {/* ZIERTRENNER VOR TAG 1 */}
          <div className="mx-auto mb-10 flex max-w-4xl justify-center md:mb-14">
            <Image
              src="https://pub-894f6ed26225410c96c9a46e36ef0199.r2.dev/openair/branding/edelweiss_trenner.webp"
              alt=""
              width={1200}
              height={240}
              sizes="(min-width: 768px) 900px, 90vw"
              className="h-auto w-full max-w-[900px] object-contain"
            />
          </div>

          <EventGallery
            title="Tag 1"
            images={gallery2026.tag1}
          />

          <div className="mx-auto my-2 flex max-w-4xl justify-center md:my-4">
            <Image
              src="https://pub-894f6ed26225410c96c9a46e36ef0199.r2.dev/openair/branding/edelweiss_trenner.webp"
              alt=""
              width={1200}
              height={240}
              sizes="(min-width: 768px) 900px, 90vw"
              className="h-auto w-full max-w-[900px] object-contain"
            />
          </div>

          <EventGallery
            title="Tag 2"
            images={gallery2026.tag2}
          />
        </div>

        {/* ZIERTRENNER VOR DROHNENAUFNAHMEN */}
        <div className="mx-auto max-w-[1600px] px-3">
          <div className="mx-auto my-2 flex max-w-4xl justify-center md:my-4">
            <Image
              src="https://pub-894f6ed26225410c96c9a46e36ef0199.r2.dev/openair/branding/edelweiss_trenner.webp"
              alt=""
              width={1200}
              height={240}
              sizes="(min-width: 768px) 900px, 90vw"
              className="h-auto w-full max-w-[900px] object-contain"
            />
          </div>

        </div>

        {/* DROHNENAUFNAHMEN 2026 */}
        <div className="mx-auto max-w-7xl px-6 pb-24 md:px-10 md:pb-32 lg:px-14">
          <div className="mb-10 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-black/45">
              Open Air aus der Luft
            </p>
            <h3 className="mt-3 text-3xl font-black uppercase tracking-tight md:text-4xl">
              Drohnenaufnahmen
            </h3>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src="https://pub-894f6ed26225410c96c9a46e36ef0199.r2.dev/openair/2026/drohne/genderbuebu-openair-drohne.webp"
                alt="Genderbüebu Open Air 2026 aus der Luft"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>

            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src="https://pub-894f6ed26225410c96c9a46e36ef0199.r2.dev/openair/2026/drohne/genderbuebu-openair-drohne-3.webp"
                alt="Festgelände des Genderbüebu Open Air 2026 aus der Luft"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>

      </section>

      {/* SPONSOREN */}
      <section
        id="sponsoren"
        className="bg-black text-white"
        style={{
          backgroundImage:
            'url("https://pub-894f6ed26225410c96c9a46e36ef0199.r2.dev/openair/branding/wallis_sw.webp")',
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
          <div className="mx-auto max-w-[1600px] px-6 py-20 md:px-10 md:py-28">

            <div className="mb-16 text-center md:mb-20">
              <p className="text-xs font-bold uppercase tracking-[0.32em] text-white/45">
                Gemeinsam stark
              </p>
              <h2 className="mt-3 text-3xl font-black uppercase tracking-tight md:text-4xl">
                Unsere Sponsoren & Partner
              </h2>
            </div>

            {/* PRÄSENTIERT VON */}
            <div className="mb-20 text-center">
              <p className="mb-8 text-xs font-bold uppercase tracking-[0.28em] text-white/45">
                Präsentiert von
              </p>

              <div className="mx-auto relative h-[120px] w-full max-w-[420px] md:h-[150px]">
                <Image
                  src="https://pub-894f6ed26225410c96c9a46e36ef0199.r2.dev/openair/sponsors/presented-by/vaudoise_gruen_praesentiert.webp"
                  alt="Vaudoise"
                  fill
                  sizes="420px"
                  className="object-contain"
                />
              </div>
            </div>

            {/* HAUPTSPONSOREN */}
            <div className="mb-20">
              <p className="mb-10 text-center text-xs font-bold uppercase tracking-[0.28em] text-white/45">
                Hauptsponsoren
              </p>

              <div className="mx-auto grid max-w-[700px] grid-cols-2 items-center gap-10 md:gap-16">
                {[
                  ["air-zermatt.svg", "Air Zermatt"],
                  ["belalp-bahnen.svg", "Belalp Bahnen"],
                ].map(([file, name]) => (
                  <div key={file} className="relative h-[100px] md:h-[130px]">
                    <Image
                      src={`https://pub-894f6ed26225410c96c9a46e36ef0199.r2.dev/openair/sponsors/main/${file}`}
                      alt={name}
                      fill
                      sizes="300px"
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* CO-SPONSOREN */}
            <div className="mb-20">
              <p className="mb-10 text-center text-xs font-bold uppercase tracking-[0.28em] text-white/45">
                Co-Sponsoren
              </p>

              <div className="mx-auto grid max-w-[900px] grid-cols-2 items-center gap-8 md:grid-cols-3 md:gap-12">
                {[
                  ["brennwall.png", "Brennwall"],
                  ["steiner-reisen.png", "Steiner Reisen"],
                  ["weingut-seewer.png", "Weingut Seewer"],
                ].map(([file, name]) => (
                  <div
                    key={file}
                    className={
                      file === "weingut-seewer.png"
                        ? "relative h-[90px] rounded-md bg-[#f4f1e9] p-3 md:h-[110px] md:p-4"
                        : "relative h-[90px] md:h-[110px]"
                    }
                  >
                    <Image
                      src={`https://pub-894f6ed26225410c96c9a46e36ef0199.r2.dev/openair/sponsors/co-sponsors/${file}`}
                      alt={name}
                      fill
                      sizes="280px"
                      className={
                        file === "weingut-seewer.png"
                          ? "object-contain p-3 md:p-4"
                          : "object-contain"
                      }
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* PARTNER */}
            <div>
              <p className="mb-10 text-center text-xs font-bold uppercase tracking-[0.28em] text-white/45">
                Partner
              </p>

              <div className="mx-auto grid max-w-[1100px] grid-cols-2 items-center gap-8 sm:grid-cols-3 md:grid-cols-5 md:gap-10">
                {[
                  ["feldschloesschen.png", "Feldschlösschen"],
                  ["hydro-nico.svg", "Hydro Nico"],
                  ["raclette-du-valais.png", "Raclette du Valais"],
                  ["texon.png", "Texon"],
                  ["tip-top-wc-service.png", "Tip Top WC Service"],
                ].map(([file, name]) => (
                  <div key={file} className="relative h-[80px] md:h-[100px]">
                    <Image
                      src={`https://pub-894f6ed26225410c96c9a46e36ef0199.r2.dev/openair/sponsors/partners/${file}`}
                      alt={name}
                      fill
                      sizes="200px"
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* FOOTER */}
        <footer
          className="relative overflow-hidden bg-[#f3f0e8] text-black"
          style={{
            backgroundImage:
              'url("https://pub-894f6ed26225410c96c9a46e36ef0199.r2.dev/openair/branding/bergkette.webp")',
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center bottom",
            backgroundSize: "100% auto",
          }}
        >
          <div className="relative z-10 mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-20">

            <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-16">

              {/* OPEN AIR */}
              <div>
                <h3 className="text-xl font-black uppercase tracking-[0.08em]">
                  Genderbüebu
                </h3>
                <p className="mt-1 text-sm font-bold uppercase tracking-[0.22em] text-black/55">
                  Open Air
                </p>

                <p className="mt-7 max-w-[300px] text-sm leading-7 text-black/80">
                  Musik, Emotionen und unvergessliche Momente im Herzen des Wallis.
                  Das Genderbüebu Open Air verbindet Schweizer Musik mit einzigartiger
                  Festivalatmosphäre.
                </p>
              </div>

              {/* QUICK LINKS */}
              <div>
                <h3 className="mb-6 text-sm font-black uppercase tracking-[0.12em]">
                  Quick Links
                </h3>

                <nav className="flex flex-col gap-4 text-sm text-black/80">
                  <a href="#home" className="transition-colors hover:text-black">
                    Home
                  </a>
                  <a href="#sponsoren" className="transition-colors hover:text-black">
                    Sponsoren
                  </a>
                  <a href="#impressionen" className="transition-colors hover:text-black">
                    Impressionen
                  </a>
                  <a href="#infos" className="transition-colors hover:text-black">
                    Infos
                  </a>
                </nav>
              </div>

              {/* KONTAKT */}
              <div>
                <h3 className="mb-6 text-sm font-black uppercase tracking-[0.12em]">
                  Kontakt
                </h3>

                <div className="space-y-5 text-sm leading-6 text-black/50">
                  <p>
                    Music &amp; Event VS GmbH<br />
                    Breite-Acker 4<br />
                    3903 Mund
                  </p>

                  <p>
                    <a
                      href="mailto:info@genderbuebu.ch"
                      className="transition-colors hover:text-black"
                    >
                      info@genderbuebu.ch
                    </a>
                  </p>

                </div>
              </div>

              {/* SOCIAL MEDIA */}
              <div>
                <h3 className="mb-6 text-sm font-black uppercase tracking-[0.12em]">
                  Offizielle soziale Medien
                </h3>

                <p className="max-w-[280px] text-sm leading-6 text-black/80">
                  Folge den Genderbüebu und verpasse keine Neuigkeiten rund um das Open Air.
                </p>

                <div className="mt-6 flex items-center gap-4">
                  <a
                    href="https://www.instagram.com/genderbuebu_openair?stkn=cGNmeWpuYmsyOTlt"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Genderbüebu Open Air auf Instagram"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-black/15 text-black/60 transition hover:border-black/40 hover:text-black"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="5" />
                      <circle cx="12" cy="12" r="4" />
                      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                    </svg>
                  </a>

                  <a
                    href="https://www.facebook.com/share/1QQHbHDB2W/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Genderbüebu Open Air auf Facebook"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-black/15 text-black/60 transition hover:border-black/40 hover:text-black"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="h-5 w-5"
                      fill="currentColor"
                    >
                      <path d="M13.5 21v-8h2.8l.4-3h-3.2V8.1c0-.9.3-1.5 1.6-1.5h1.7V3.9c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V10H7.3v3h2.8v8h3.4Z" />
                    </svg>
                  </a>
                </div>
              </div>

            </div>

            {/* FOOTER BOTTOM */}
            <div className="mt-16 flex flex-col gap-5  pt-7 text-xs text-black/40 md:mt-20 md:flex-row md:items-center md:justify-between">
              <p>
                © 2026 Genderbüebu
              </p>

              <LegalLinks />
            </div>

          </div>
        </footer>

    </main>
  );
}
