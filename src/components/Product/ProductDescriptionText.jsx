import { Box, Typography } from "@mui/material";

export default function ProductDescriptionText({ product, result }) {
  return (
    <Box sx={{ width: "calc(4.5/12*100vw)" }}>
      <Typography
        variant="h4"
        sx={{
          fontFamily: "Comfortaa",
          fontSize: 34,
        }}
      >
        {product}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontSize: 18,
          fontFamily: "Comfortaa",
        }}
      >
        {result}
      </Typography>
    </Box>
  );
}
