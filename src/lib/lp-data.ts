export const LP_DATA = {
  phone: "+420 601 002 989",
  phoneHref: "tel:+420601002989",
  email: "info@voltimo.cz",
  address: "Přeštice, Plzeňsko",
  price: {
    regular: 48_400,
    current: 48_400,
    discount: 0,
    deadline: "31. 8. 2026",
  },
  stats: {
    graduates: "300+",
    successRate: "96 %",
    teacherExperience: "30 let",
  },
  dates: [
    {
      d: "4",
      m: "LED",
      title: "Lednový běh 2027",
      range: "Příprava 4. – 8. 1. · zkoušky 11. – 15. 1. 2027",
      cap: "",
      capLevel: "ok" as "low" | "ok" | "full",
      featured: true,
    },
    {
      d: "1",
      m: "ÚNO",
      title: "Únorový běh 2027",
      range: "Příprava 1. – 5. 2. · zkoušky 8. – 12. 2. 2027",
      cap: "",
      capLevel: "ok" as "low" | "ok" | "full",
      featured: false,
    },
    {
      d: "15",
      m: "BŘE",
      title: "Březnový běh 2027",
      range: "Příprava 15. – 19. 3. · zkoušky 22. – 26. 3. 2027",
      cap: "",
      capLevel: "ok" as "low" | "ok" | "full",
      featured: false,
    },
  ],
} as const;

export type LpDate = (typeof LP_DATA.dates)[number];
