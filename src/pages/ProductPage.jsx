import { useEffect, useState } from "react";
import GeneralProduct from "../components/Product/GeneralProduct";
import { onValue, ref } from "firebase/database";
import { db } from "../firebase/config";
import { useLocation } from "react-router-dom";

export default function ProductPage() {
  const [data, setData] = useState({});
  const [catalogCurrentLine, setCatalogCurrentLine] = useState({});
  const [catalogCurrentType, setCatalogCurrentType] = useState({});
  const [currentPosition, setCurrentPosition] = useState("");

  const location = useLocation();

  useEffect(() => {
    const productLineRef = ref(db, "catalog");
    onValue(productLineRef, (snapshot) => {
      const catalogData = snapshot.val();
      const nameLine = location.pathname;
      const regex = /\/([^/]+)\/([^/]+)\/([^/]+)\/([^/]+)\/([^/]+)/;
      const match = nameLine.match(regex);
      setCurrentPosition(match);

      const lines =
        catalogData.filter(
          (item) => item.name.toLowerCase().replace(/ /g, "-") === match[1]
        )[0]?.lines || {};
      const selectedLine = lines.find(
        (line) =>
          line.category.toLowerCase().replace(/& /g, "").replace(/ /g, "-") ===
          match[2]
      );

      const selectedProduct = selectedLine?.catalog[match[3]].find(
        (item) =>
          item.volume.replace(/ /g, "-") === match[5] &&
          item.product.toLowerCase().replace(/& /g, "").replace(/ /g, "-") ===
            match[4]
      );

      setData(selectedProduct);
      setCatalogCurrentType(selectedLine?.catalog[match[3]]);
      setCatalogCurrentLine(selectedLine?.catalog);
    });
  }, [location.pathname]);

  return (
    <GeneralProduct
      data={data}
      catalogCurrentLine={catalogCurrentLine}
      catalogCurrentType={catalogCurrentType}
      currentPosition={currentPosition}
    />
  );
}
