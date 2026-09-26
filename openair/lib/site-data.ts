const R2_BASE =
  "https://pub-894f6ed26225410c96c9a46e36ef0199.r2.dev/openair";

export const siteData = {
  assets: {
    r2Base: R2_BASE,
    brandLogo: `${R2_BASE}/branding/genderbuebu_openair-logo-white.png`,
  },

  event2027: {
    title: "Genderbüebu Openair 2027",
    heroImage: "",
    date: "",
    ticketUrl: "",
    ticketReleaseAt: "2026-10-01T00:00:00+02:00",
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
        logo: `${R2_BASE}/sponsors/presented-by/vaudoise.svg`,
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
        logo: `${R2_BASE}/sponsors/partners/hydro-nico.svg`,
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
