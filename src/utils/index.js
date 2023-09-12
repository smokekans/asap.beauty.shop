import AlfaparfPage from "../pages/AlfaparfPage";
import PhLaboratoriesPage from "../pages/PhLaboratoriesPage";

export const brands = [
  {
    name: "/alfaparf",
    component: <AlfaparfPage />,
  },
  {
    name: "/phlaboratories",
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
  { name: "/phlaboratories/argan-keratin" },
  { name: "/phlaboratories/deep-moisture" },
  { name: "/phlaboratories/ice-blonde" },
  { name: "/phlaboratories/leave-in" },
  { name: "/phlaboratories/pure-repair" },
  { name: "/phlaboratories/pure-straight" },
  { name: "/phlaboratories/smooth-perfect" },
  { name: "/phlaboratories/style-finish" },
  { name: "/phlaboratories/sun-care" },
];
