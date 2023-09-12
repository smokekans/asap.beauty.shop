import { Typography } from "@mui/material";

export default function FourthPath({ info }) {
  return (
    <>
      <Typography variant="h2" sx={{ fontFamily: "Quicksand" }}>
        {info?.title}
      </Typography>
      <Typography variant="h4">{info?.text}</Typography>
      <Typography variant="h6">{info?.subtext}</Typography>
    </>
  );
}
