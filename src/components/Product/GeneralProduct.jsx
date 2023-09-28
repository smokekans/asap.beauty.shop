import { Box, Container } from "@mui/material";
import ImageSlider from "./ImageSlider";
import FeaturesPath from "./FeaturesPath";
import DescriptionPath from "./DescriptionPath";
import AromaPath from "./AromaPath";
import CatalogPath from "../Brand/Line/CatalogPath";
import InfoProduct from "./InfoProduct";
import FormulaPath from "./FormulaPath";

export default function GeneralProduct({
  data,
  catalogCurrentLine,
  catalogCurrentType,
  currentPosition,
}) {
  return (
    <Container sx={{ mt: 6 }}>
      <Box sx={{ display: "flex" }}>
        <ImageSlider data={data} />
        <InfoProduct
          data={data}
          otherVolume={catalogCurrentType}
          currentPosition={currentPosition}
        />
      </Box>

      <FeaturesPath data={data?.features} name="Особливості" />
      <DescriptionPath data={data?.ingredients} name="Інградієнти" />
      <DescriptionPath data={data?.howtouse} name="Спосіб застосування" />
      <AromaPath data={data?.aroma} name="Аромат" sx={{ mx: "auto" }} />
      {data?.formula && <FormulaPath data={data} />}
      <CatalogPath products={catalogCurrentLine} />
    </Container>
  );
}
