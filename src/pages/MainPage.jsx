import { Box, Typography } from "@mui/material";

export default function MainPage() {
  return (
    <>
      <Box>
        <Box
          component="img"
          sx={{
            width: 1,
          }}
          alt="ASAP Beauty Shop"
          src="https://firebasestorage.googleapis.com/v0/b/asap-beauty-shop.appspot.com/o/asap%2Fasap.jpg?alt=media&token=5def0394-85c5-4121-b78a-e9c1ddb1f308"
        />
        <Typography variant="h4" sx={{ textAlign: "center" }}>
          Магазин італійської косметика для волосся
        </Typography>
        <Typography variant="h6" sx={{ textAlign: "center" }}>
          Працюємо 🇺🇦
        </Typography>
        <Typography variant="h6" sx={{ textAlign: "center" }}>
          Широкий асортимент 🧴
        </Typography>
        <Typography variant="h6" sx={{ textAlign: "center" }}>
          Швидка доставка ✈️
        </Typography>
      </Box>
    </>
  );
}
