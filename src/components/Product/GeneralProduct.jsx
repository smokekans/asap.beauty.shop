import { Box } from "@mui/material";
import ImageSlider from "./ImageSlider";
import FeaturesPath from "./FeaturesPath";
import DescriptionPath from "./DescriptionPath";
import AromaPath from "./AromaPath";
import CatalogPath from "../Brand/Line/CatalogPath";
import InfoProduct from "./InfoProduct";
import FormulaPath from "./FormulaPath";
import ProductDescriptionText from "./ProductDescriptionText";

export default function GeneralProduct({
  data,
  catalogCurrentLine,
  catalogCurrentType,
  currentPosition,
}) {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          py: "calc(0.5/12*100vw)",
        }}
      >
        <ImageSlider data={data} />
        <InfoProduct
          data={data}
          otherVolume={catalogCurrentType}
          currentPosition={currentPosition}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "#f3f2f1",
          p: "calc(0.6/12*100vw)",
        }}
      >
        <ProductDescriptionText
          product={data?.product}
          result={data?.results}
        />
        <Box sx={{ width: "calc(5/12*100vw)" }}>
          <FeaturesPath data={data?.features} name="Особливості" />
          <DescriptionPath data={data?.ingredients} name="Інградієнти" />
          <DescriptionPath data={data?.howtouse} name="Спосіб застосування" />
          <AromaPath data={data?.aroma} name="Аромат" sx={{ mx: "auto" }} />
        </Box>
      </Box>
      {data?.formula && <FormulaPath data={data} />}
      <CatalogPath products={catalogCurrentLine} />
    </Box>
  );
}
