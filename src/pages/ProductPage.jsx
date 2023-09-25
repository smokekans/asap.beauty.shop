import { useEffect, useState } from "react";
import Product from "../components/Product/Product";
import { onValue, ref } from "firebase/database";
import { db } from "../firebase/config";
import { useLocation } from "react-router-dom";

export default function ProductPage() {
  const [data, setData] = useState({});
  const [catalogCurrentLine, setCatalogCurrentLine] = useState({});

  const location = useLocation();

  useEffect(() => {
    const productLineRef = ref(db, "catalog");
    onValue(productLineRef, (snapshot) => {
      const catalogData = snapshot.val();
      const nameLine = location.pathname;
      const regex = /\/([^/]+)\/([^/]+)\/([^/]+)\/([^/]+)\/([^/]+)/;
      const match = nameLine.match(regex);

      const lines =
        catalogData.filter(
          (item) => item.name.toLowerCase().replace(/ /g, "-") === match[1]
        )[0]?.lines || {};
      const selectedLine = lines.find(
        (line) =>
          line.category.toLowerCase().replace(/& /g, "").replace(/ /g, "-") ===
          match[2]
      );
      console.log(selectedLine);
      const selectedProduct = selectedLine?.catalog[match[3]].find(
        (item) => item.volume.replace(/ /g, "-") === match[5]
      );
      setData(selectedProduct);
      setCatalogCurrentLine(selectedLine?.catalog);
      console.log("=================selectedLine.catalog===================");
      console.log(selectedLine.catalog);
      console.log("====================================");
    });
  }, [location.pathname]);

  return (
    <>
      <Product data={data} catalogCurrentLine={catalogCurrentLine} />
    </>
  );
}
