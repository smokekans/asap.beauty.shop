import CatalogPath from "../../Brand/Line/CatalogPath";
import HeadPath from "../../Brand/Line/HeadPath";
import FifthPath from "./FifthPath";
import FourthPath from "./FourthPath";
import SecondPath from "./SecondPath";
import ThirdPath from "./ThirdPath";

export default function GeneralLine({ infoPage, products }) {
  return (
    <>
      <HeadPath data={infoPage?.first} />
      <SecondPath info={infoPage?.second} />
      <ThirdPath info={infoPage?.third} />
      <FourthPath info={infoPage?.fourth} />
      <FifthPath info={infoPage?.fifth} />
      <CatalogPath id="catalog" products={products} />
    </>
  );
}
