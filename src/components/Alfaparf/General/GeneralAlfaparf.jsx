import HeadPath from "../../PhLaboratories/General/HeadPath";
import CatalogAlfaparf from "./CatalogAlfaparf";
import SecondPath from "./SecondPath";
import ThirdPath from "./ThirdPath";

export default function GeneralAlfaparf({ infoPage }) {
  return (
    <>
      <HeadPath data={infoPage?.first} />
      <SecondPath info={infoPage?.second} />
      <ThirdPath data={infoPage?.third} />
      <CatalogAlfaparf info={infoPage?.catalog} />
    </>
  );
}
