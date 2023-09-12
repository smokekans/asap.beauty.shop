import FifthPath from "./FifthPath";
import FirstPath from "./FirstPath";
import FourthPath from "./FourthPath";
import SecondPath from "./SecondPath";
import SixthPath from "./SixthPath";
import ThirdPath from "./ThirdPath";

export default function GeneralLine({ infoPage, products }) {
  return (
    <>
      <FirstPath info={infoPage?.first} />
      <SecondPath info={infoPage?.second} />
      <ThirdPath info={infoPage?.third} />
      <FourthPath info={infoPage?.fourth} />
      <FifthPath info={infoPage?.fifth} />
      <SixthPath info={infoPage?.sixth} products={products} />
    </>
  );
}
