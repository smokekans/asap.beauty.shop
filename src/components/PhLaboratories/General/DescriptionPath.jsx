import { Box, Typography } from "@mui/material";

export default function DescriptionPath({ info }) {
  return (
    <>
      <Box
        component="img"
        sx={{
          width: 350,
        }}
        alt={info?.title}
        src={info?.image}
      />
      <Typography variant="h4">{info?.title}</Typography>
      <Typography variant="body2">{info?.text}</Typography>
    </>
  );
}
