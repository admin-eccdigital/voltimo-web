export const LP_DATA = {
  phone: "+420 601 002 989",
  phoneHref: "tel:+420601002989",
  email: "info@voltimo.cz",
  address: "Přeštice, Plzeňsko",
  price: {
    regular: 50_000,
    current: 40_000,
    discount: 10_000,
    deadline: "31. 8. 2026",
  },
  stats: {
    graduates: "300+",
    successRate: "96 %",
    teacherExperience: "30 let",
  },
  dates: [
    {
      d: "21",
      m: "ZÁŘ",
      title: "Zářijový běh",
      range: "Příprava 21. – 25. 9. · zkoušky 28. 9. – 2. 10. 2026",
      cap: "Plná kapacita",
      capLevel: "full" as "low" | "ok" | "full",
      featured: true,
    },
    {
      d: "12",
      m: "ŘÍJ",
      title: "Říjnový běh",
      range: "Příprava 12. – 16. 10. · zkoušky 19. – 23. 10. 2026",
      cap: "",
      capLevel: "ok" as "low" | "ok" | "full",
      featured: false,
    },
    {
      d: "9",
      m: "LIS",
      title: "Listopadový běh",
      range: "Příprava 9. – 13. 11. · zkoušky 16. – 20. 11. 2026",
      cap: "",
      capLevel: "ok" as "low" | "ok" | "full",
      featured: false,
    },
  ],
} as const;

export type LpDate = (typeof LP_DATA.dates)[number];
