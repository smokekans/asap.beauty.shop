import AromaPath from "./AromaPath";
import CatalogPath from "./CatalogPath";
import DescriptionPath from "./DescriptionPath";
import FeaturesPath from "./FeaturesPath";
import HeadPath from "./HeadPath";
import HomeMaintenance from "./HomeMaintenance";
import IngredientsPath from "./IngredientsPath";

export default function GeneralLine({ infoPage, products }) {
  console.log(products);
  return (
    <>
      <HeadPath data={infoPage?.first} />
      <DescriptionPath data={infoPage?.second} />
      <FeaturesPath data={infoPage?.fifth} />
      <IngredientsPath data={infoPage?.third} />
      <HomeMaintenance data={infoPage?.sixth} />
      <AromaPath data={infoPage?.fourth} />
      <CatalogPath products={products} />
    </>
  );
}
