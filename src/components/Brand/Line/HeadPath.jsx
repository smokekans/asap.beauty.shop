import { Box, Button, Typography } from "@mui/material";

export default function HeadPath({ data }) {
  const scrollToCatalog = () => {
    const catalogAnchor = document.getElementById("catalog");
    if (catalogAnchor) {
      catalogAnchor.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Box
      sx={{
        backgroundImage: `url(${data?.image})`,
        backgroundSize: "cover",
        backgroundPosition: "top right",
        height: "600px",
        width: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          maxWidth: "50%",
          px: "calc(0.5/12*100vw)",
        }}
      >
        <Typography
          variant="h4"
          sx={{ fontFamily: "Oi", fontSize: 60, color: "white" }}
        >
          {data?.title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontFamily: "Comfortaa",
            textTransform: "lowercase",
            fontSize: 16,
            letterSpacing: "0.001em",
            color: "white",
          }}
        >
          {data?.text}
        </Typography>
        <Button
          onClick={scrollToCatalog}
          variant="outlined"
          sx={{
            mt: 2,
            color: "white",
            fontFamily: "Comfortaa",
            textTransform: "lowercase",
          }}
        >
          продукти цієї лінійки
        </Button>
      </Box>
    </Box>
  );
}
