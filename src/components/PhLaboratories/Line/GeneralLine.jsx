import HeadPath from "../../Brand/Line/HeadPath";
import CatalogPath from "../../Brand/Line/CatalogPath";
import DescriptionPath from "./DescriptionPath";
import FeaturesPath from "./FeaturesPath";
import HomeMaintenancePath from "./HomeMaintenancePath";

export default function GeneralLine({ infoPage, products }) {
  return (
    <>
      <HeadPath data={infoPage?.first} />
      <DescriptionPath data={infoPage?.second} />
      <FeaturesPath title="Особливості" data={infoPage?.fifth} />
      <FeaturesPath
        title={infoPage?.fourth?.title}
        data={infoPage?.fourth?.aroma}
      />
      <HomeMaintenancePath
        title={infoPage?.sixth?.title}
        data={infoPage?.sixth?.varian}
      />
      <FeaturesPath
        title={infoPage?.third?.title}
        data={infoPage?.third?.ingredients}
      />

      <CatalogPath id="catalog" products={products} />
    </>
  );
}
