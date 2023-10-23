import CatalogLinePath from "./CatalogLinePath";
import HeadPath from "./HeadPath";
import DescriptionPath from "./DescriptionPath";

export default function GeneralPhLaboratories({ infoPage }) {
  return (
    <>
      <HeadPath data={infoPage?.first} />
      <DescriptionPath data={infoPage?.second} />
      <CatalogLinePath id="catalog" products={infoPage?.catalog} />
    </>
  );
}
