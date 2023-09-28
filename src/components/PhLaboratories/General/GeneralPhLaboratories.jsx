import CatalogPath from "../../Brand/Line/CatalogPath";
import DescriptionPath from "./DescriptionPath";
import HeadPath from "./HeadPath";
export default function GeneralPhLaboratories({ infoPage }) {
  return (
    <>
      <HeadPath info={infoPage?.first} />
      <DescriptionPath info={infoPage?.second} />
      <CatalogPath info={infoPage?.catalog} />
    </>
  );
}
