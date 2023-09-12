import { useLocation } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import findMatching from "../components/hooks/useFindMatching";
import { brands } from "../utils";

export default function BrandPage() {
  const location = useLocation();
  const currentLocation = location.pathname;

  const matchingBrand = findMatching(brands, currentLocation);

  const content = matchingBrand ? matchingBrand.component : <NotFoundPage />;
  return <>{content}</>;
}
