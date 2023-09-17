import AlfaparfPage from "../pages/AlfaparfPage";
import PhLaboratoriesPage from "../pages/PhLaboratoriesPage";

export const brands = [
  {
    name: "/alfaparf",
    component: <AlfaparfPage />,
  },
  {
    name: "/ph-laboratories",
    component: <PhLaboratoriesPage />,
  },
];

export const linesAlfaparf = [
  { name: "/alfaparf/blonde" },
  { name: "/alfaparf/brunette" },
  { name: "/alfaparf/curls" },
  { name: "/alfaparf/diamond" },
  { name: "/alfaparf/moisture" },
  { name: "/alfaparf/reconstruction" },
  { name: "/alfaparf/scalp" },
  { name: "/alfaparf/smooth" },
  { name: "/alfaparf/volume" },
];

export const linesPhLaboratories = [
  { name: "/ph-laboratories/argan-keratin" },
  { name: "/ph-laboratories/deep-moisture" },
  { name: "/ph-laboratories/ice-blonde" },
  { name: "/ph-laboratories/pure-repair" },
  { name: "/ph-laboratories/pure-straight" },
  { name: "/ph-laboratories/smooth-perfect" },
  { name: "/ph-laboratories/style-finish" },
  { name: "/ph-laboratories/sun-care" },
  { name: "/ph-laboratories/rejuvenating" },
];
