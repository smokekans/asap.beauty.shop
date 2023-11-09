import { useEffect, useState } from "react";
import CatalogLinePath from "../components/Brand/CatalogLinePath";
import DescriptionPath from "../components/Brand/DescriptionPath";
import HeadPath from "../components/Brand/HeadPath";
import { onValue, ref } from "firebase/database";
import { database } from "../firebase/config";
import { useLocation } from "react-router-dom";
import FormulaPath from "../components/Brand/FormulaPath";
import AssortmentPath from "../components/Brand/AssortmentPath";
import CatalogAlfaparfLinePath from "../components/Brand/CatalogAlfaparfLinePath";

export default function BrandPage() {
  const [data, setData] = useState(null);
  const location = useLocation();
  const nameLine = location.pathname;
  const regex = /\/([^/]+)/;
  const match = nameLine.match(regex);

  useEffect(() => {
    const infoRef = ref(database, `infoPage/${match[1]}`);
    onValue(infoRef, (snapshot) => {
      const data = snapshot.val();
      setData(data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return (
    <>
      <HeadPath data={data?.general?.head} />
      {data?.general?.description && (
        <DescriptionPath data={data?.general?.description} />
      )}
      {data?.general?.formula && <FormulaPath data={data?.general?.formula} />}
      {data?.general?.assortment && (
        <AssortmentPath data={data?.general?.assortment} />
      )}
      {data?.general?.catalog && (
        <CatalogLinePath
          id="catalog"
          products={data?.general?.catalog}
          nameBrand={match[1]}
        />
      )}
      {data?.general?.lines && (
        <CatalogAlfaparfLinePath
          id="catalog"
          products={data?.general?.lines}
          nameBrand={match[1]}
        />
      )}
    </>
  );
}
