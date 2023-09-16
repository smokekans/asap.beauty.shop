import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { db } from "../firebase/config";
import { useLocation } from "react-router-dom";
import GeneralLine from "../components/Alfaparf/Line/GeneralLine";

export default function AlfaparfLinePage() {
  const [data, setData] = useState([]);
  const [products, setProducts] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const infoAlfaparfRef = ref(db, `infoPage${location.pathname}`);
    onValue(infoAlfaparfRef, (snapshot) => {
      setData(snapshot.val());
    });

    const productLineAlfaparfRef = ref(db, "catalog");
    onValue(productLineAlfaparfRef, (snapshot) => {
      const catalogData = snapshot.val();
      const nameLine = location.pathname.replace("/alfaparf/", "");

      const alfaparfLines =
        catalogData.filter((item) => item.name === "Alfaparf")[0]?.lines || [];

      const selectedLine = alfaparfLines.find(
        (line) => line.category.toLowerCase() === nameLine
      );

      setProducts(selectedLine?.catalog || []);
    });
  }, [location.pathname]);

  return (
    <>
      <GeneralLine infoPage={data} products={products} />
    </>
  );
}
