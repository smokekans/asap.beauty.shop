import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { database } from "../firebase/config";
import { useLocation } from "react-router-dom";
import HeadPath from "../components/Brand/HeadPath";
import DescriptionPath from "../components/Line/DescriptionPath";
import FeaturesPath from "../components/Line/FeaturesPath";
import HomeMaintenancePath from "../components/Line/HomeMaintenancePath";
import CatalogPath from "../components/Line/CatalogPath";
import DescriptionWIPath from "../components/Line/DescriptionWIPath";
import FormulaPath from "../components/Brand/FormulaPath";
import { Box } from "@mui/material";
import FeaturesWIPath from "../components/Line/FeaturesWIPath";
import CommitmentPath from "../components/Line/CommitmentPath";

export default function LinePage() {
  const [data, setData] = useState([]);
  const [products, setProducts] = useState([]);
  const location = useLocation();
  const nameLine = location.pathname;
  const regex = /\/([^/]+)\/([^/]+)/;
  const match = nameLine.match(regex);

  useEffect(() => {
    const infoAlfaparfRef = ref(database, `infoPage${location.pathname}`);
    onValue(infoAlfaparfRef, (snapshot) => {
      setData(snapshot.val());
    });

    const productLineRef = ref(database, "catalog");
    onValue(productLineRef, (snapshot) => {
      const catalogData = snapshot.val();
      const nameLine = location.pathname.replace(`/${match[1]}/`, "");

      const currentLines =
        catalogData.filter((item) => item.id === match[1])[0]?.lines || [];

      const selectedLine = currentLines.find(
        (line) =>
          line.category.toLowerCase().replace(/& /g, "").replace(/ /g, "-") ===
          nameLine
      );

      setProducts(selectedLine?.catalog || []);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return (
    <Box>
      <HeadPath data={data?.head} />
      {data?.description && <DescriptionPath data={data?.description} />}
      {data?.descriptionWI && <DescriptionWIPath data={data?.descriptionWI} />}
      {data?.ingredients && (
        <FeaturesPath
          title={data?.ingredients?.title}
          data={data?.ingredients?.ingredients}
        />
      )}
      {data?.aroma && (
        <FeaturesPath title={data?.aroma?.title} data={data?.aroma?.aroma} />
      )}
      {data?.features && (
        <FeaturesPath title="Особливості" data={data?.features} />
      )}
      {data?.formula && <FormulaPath data={data?.formula} />}
      {data?.featuresWI && (
        <FeaturesWIPath title="Особливості" data={data?.featuresWI} />
      )}
      {data?.homeMaintenance && (
        <HomeMaintenancePath
          title={data?.homeMaintenance?.title}
          data={data?.homeMaintenance?.varian}
        />
      )}
      {data?.commitment && <CommitmentPath data={data?.commitment} />}
      <CatalogPath id="catalog" products={products} />
    </Box>
  );
}
