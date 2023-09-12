import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { db } from "../firebase/config";
import { ref, onValue } from "firebase/database";
import GeneralAlfaparf from "../components/Alfaparf/General/GeneralAlfaparf";

function AlfaparfPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const infoAlfaparfRef = ref(db, "infoPage/alfaparf");
    onValue(infoAlfaparfRef, (snapshot) => {
      const data = snapshot.val();
      setData(data);
    });
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
