import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { db } from "../firebase/config";
import { Box } from "@mui/material";
import GeneralPhLaboratories from "../components/PhLaboratories/General/GeneralPhLaboratories";

export default function PhLaboratoriesPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const infoPhLaboratoriesRef = ref(db, "infoPage/ph-laboratories");
    onValue(infoPhLaboratoriesRef, (snapshot) => {
      const data = snapshot.val();
      setData(data);
    });
  }, []);

  return (
    <>
      <Box>
        <GeneralPhLaboratories infoPage={data?.general} />
      </Box>
    </>
  );
}
