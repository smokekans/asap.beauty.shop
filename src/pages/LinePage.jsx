import { useLocation } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import AlfaparfLinePage from "./AlfaparfLinePage";
import PhLaboratoriesLinePage from "./PhLaboratoriesLinePage";
import findMatching from "../components/hooks/useFindMatching";
import { linesAlfaparf, linesPhLaboratories } from "../utils";

export default function LinePage() {
  const location = useLocation();
  const currentLocation = location.pathname;

  const matchingAlfaparf = findMatching(linesAlfaparf, currentLocation);
  const matchingPhLaboratories = findMatching(
    linesPhLaboratories,
    currentLocation
  );

  let content;
  if (matchingAlfaparf) {
    content = <AlfaparfLinePage />;
  } else if (matchingPhLaboratories) {
    content = <PhLaboratoriesLinePage />;
  } else {
    content = <NotFoundPage />;
  }

  return <>{content}</>;
}
