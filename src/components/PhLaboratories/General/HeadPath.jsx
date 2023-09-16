import { Box, Typography } from "@mui/material";

export default function HeadPath({ info }) {
  return (
    <>
      <Box
        component="img"
        sx={{
          width: 1,
        }}
        alt={info?.title}
        src={info?.image}
      />
      <Typography variant="h4" sx={{ fontFamily: "Quicksand" }}>
        {info?.title}
      </Typography>
      <Typography variant="body2">{info?.text}</Typography>
    </>
  );
}
