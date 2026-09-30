const R2_BASE =
  "https://pub-894f6ed26225410c96c9a46e36ef0199.r2.dev/openair";

export const siteData = {
  assets: {
    r2Base: R2_BASE,
    brandLogo: `${R2_BASE}/branding/genderbuebu_openair-logo-white.png`,

    hero2027: {
      bull: `${R2_BASE}/branding/eringer_1.webp`,
      wood: `${R2_BASE}/branding/holzwand_repl.webp`,
      panorama: `${R2_BASE}/branding/panorama.webp`,
      stars: `${R2_BASE}/branding/wallisersterne.webp`,
    },
  },

  event2027: {
    title: "Genderbüebu Openair 2027",
    heroImage: "",
    date: "06. / 07. August 2027",
    location: "Festwiese Stapfen · Naters",

    lineup: {
      releaseAt: "2026-09-27T00:00:00+02:00",

      friday: {
        date: "Freitag, 06. Aug. 2027",
        time: "ab 17 Uhr",
        artists: [
          "Fäaschtbänkler",
          "Hess-Rusch-Hegner",
          "Moser Musig",
          "Salwaldbuebu",
          "Quöllfrisch-Buebe",
          "Churfirste Gruess",
          "Prättigauer Power",
        ],
      },

      saturday: {
        date: "Samstag, 07. Aug. 2027",
        time: "ab 12 Uhr",
        artists: [
          "Genderbüebu",
          "Iten-Grab",
          "Waldhöckler",
          "Trio Vollgas",
          "Schimbrig Power",
          "Tschäggerlibuebe",
          "Kitsch",
          "Echo vom Kontrabass-Shop",
          "& Dä Nötzli mit dä Chlötzli",
          "LT Spitzenblick",
          "Diä lüpfigä Chüetrieber",
          "Nesselbüebu",
        ],
      },
    },

    tickets: {
      url: "https://www.eventfrog.ch/genderbuebu",
      releaseAt: "2026-10-01T00:00:00+02:00",
    },
  },

  retrospective2026: {
    title: "Danke, dass ihr dabei wart!",
    year: 2026,

    images: {
      tag1: `${R2_BASE}/2026/tag-1/`,
      tag2: `${R2_BASE}/2026/tag-2/`,
      drohne: `${R2_BASE}/2026/drohne/`,
    },

    videos: [
      {
        youtubeId: "F03nH-NaCYk",
      },
      {
        youtubeId: "KB4ft0gnrbc",
      },
    ],
  },

  sponsors: {
    presentedBy: [
      {
        name: "Vaudoise",
        logo: `${R2_BASE}/sponsors/presented-by/Vaudoise_ws.webp`,
      },
    ],

    main: [
      {
        name: "Air Zermatt",
        logo: `${R2_BASE}/sponsors/main/air-zermatt.svg`,
      },
      {
        name: "Belalp Bahnen",
        logo: `${R2_BASE}/sponsors/main/belalp-bahnen.svg`,
      },
    ],

    coSponsors: [
      {
        name: "Brennwall",
        logo: `${R2_BASE}/sponsors/co-sponsors/brennwall.png`,
      },
      {
        name: "Steiner Reisen",
        logo: `${R2_BASE}/sponsors/co-sponsors/steiner-reisen.png`,
      },
      {
        name: "Weingut Seewer",
        logo: `${R2_BASE}/sponsors/co-sponsors/weingut-seewer.png`,
      },
    ],

    partners: [
      {
        name: "Feldschlösschen",
        logo: `${R2_BASE}/sponsors/partners/feldschloesschen.png`,
      },
      {
        name: "Hydro-Nico",
        logo: `${R2_BASE}/sponsors/partners/hydronico.webp`,
      },
      {
        name: "Raclette du Valais",
        logo: `${R2_BASE}/sponsors/partners/raclette-du-valais.png`,
      },
      {
        name: "TEXON",
        logo: `${R2_BASE}/sponsors/partners/texon.png`,
      },
      {
        name: "Tip Top WC Service",
        logo: `${R2_BASE}/sponsors/partners/tip-top-wc-service.png`,
      },
    ],
  },
} as const;
