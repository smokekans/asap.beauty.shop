import { Box, Typography } from "@mui/material";

export default function DescriptionPath({ data }) {
  return (
    <Box
      sx={{
        px: "calc(0.5/12*100vw)",
        pt: "calc(0.5/12*100vw)",
      }}
    >
      <Typography
        variant="body2"
        sx={{
          textDecoration: "underline",
          fontSize: 18,
          fontFamily: "Comfortaa",
          mb: 3,
        }}
      >
        {data?.title}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontSize: 14,
          fontFamily: "Comfortaa",
        }}
      >
        {data?.text}
      </Typography>
    </Box>
  );
}
