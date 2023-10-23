import { Box, Typography } from "@mui/material";

export default function DescriptionPath({ data }) {
  return (
    <Box
      sx={{
        backgroundImage: `url(${data?.image})`,
        backgroundSize: "contain",
        backgroundPosition: "top right",
        height: "600px",
        backgroundRepeat: "no-repeat",
        width: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        px: "calc(0.5/12*100vw)",
        pt: "calc(0.5/12*100vw)",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontFamily: "Comfortaa",
        }}
      >
        {data?.title}
      </Typography>
      <Typography
        variant="body2"
        sx={{
          fontFamily: "Comfortaa",
          width: "60vw",
        }}
      >
        {data?.text}
      </Typography>
    </Box>
  );
}
