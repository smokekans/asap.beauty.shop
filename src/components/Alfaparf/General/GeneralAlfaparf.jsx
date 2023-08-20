import CatalogAlfaparf from "./CatalogAlfaparf";
import FirstPath from "./FirstPath";
import SecondPath from "./SecondPath";
import ThirdPath from "./ThirdPath";

export default function GeneralAlfaparf({ infoPage }) {
  return (
    <>
      <FirstPath info={infoPage?.first} />
      <SecondPath info={infoPage?.second} />
      <ThirdPath info={infoPage?.third} />
      <CatalogAlfaparf info={infoPage?.catalog} />
    </>
  );
}
