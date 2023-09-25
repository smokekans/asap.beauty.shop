import HeadPath from "../../Brand/Line/HeadPath";
import AromaPath from "./AromaPath";
import CatalogPath from "../../Brand/Line/CatalogPath";
import DescriptionPath from "./DescriptionPath";
import FeaturesPath from "./FeaturesPath";
import HomeMaintenancePath from "./HomeMaintenancePath";
import IngredientsPath from "./IngredientsPath";

export default function GeneralLine({ infoPage, products }) {
  return (
    <>
      <HeadPath data={infoPage?.first} />
      <DescriptionPath data={infoPage?.second} />
      <FeaturesPath data={infoPage?.fifth} />
      <IngredientsPath data={infoPage?.third} />
      <HomeMaintenancePath data={infoPage?.sixth} />
      <AromaPath data={infoPage?.fourth} />
      <CatalogPath id="catalog" products={products} />
    </>
  );
}
