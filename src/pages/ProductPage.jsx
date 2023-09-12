import { useEffect, useState } from "react";
import Product from "../components/Product/Product";
import { onValue, ref } from "firebase/database";
import { db } from "../firebase/config";
import { useLocation } from "react-router-dom";

export default function ProductPage() {
  const [data, setData] = useState({});
  const location = useLocation();

  useEffect(() => {
    const productLineAlfaparfRef = ref(db, "catalog");
    onValue(productLineAlfaparfRef, (snapshot) => {
      const catalogData = snapshot.val();
      const nameLine = location.pathname;
      const regex = /\/([^/]+)\/([^/]+)\/([^/]+)\/([^/]+)/;
      const match = nameLine.match(regex);

      const alfaparfLines =
        catalogData.filter((item) => item.name.toLowerCase() === match[1])[0]
          ?.lines || [];
      const selectedLine = alfaparfLines.find(
        (line) => line.category.toLowerCase() === match[2]
      );

      const selectedProduct = selectedLine?.catalog[match[3]].find(
        (product) => {
          return (
            product.product.toLowerCase().replace(/-/g, " ") ===
            match[4].replace(/-/g, " ")
          );
        }
      );

      setData(selectedProduct);
    });
  }, [location.pathname]);

  return (
    <>
      <Product data={data} />
    </>
  );
}
