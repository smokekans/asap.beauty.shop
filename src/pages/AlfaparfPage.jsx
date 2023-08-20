import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { db } from "../firebase/config";
import { ref, onValue } from "firebase/database";
import GeneralAlfaparf from "../components/Alfaparf/General/GeneralAlfaparf";

function AlfaparfPage() {
  const [data, setData] = useState(null);

  const getData = () => {
    const starCountRef = ref(db, "infoPage/alfaparf");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      setData(data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Box>
        <GeneralAlfaparf infoPage={data?.general} />
      </Box>
    </>
  );
}

export default AlfaparfPage;
