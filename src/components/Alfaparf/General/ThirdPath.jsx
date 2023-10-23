import { Box, Typography } from "@mui/material";

export default function ThirdPath({ data }) {
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
          px: "calc(0.5/12*100vw)",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{ fontFamily: "Oi", fontSize: 52, color: "rgba(0, 0, 0, 0.6)" }}
        >
          {data?.title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontFamily: "Comfortaa",
            textTransform: "lowercase",
            fontSize: 16,
            color: "black",
            width: "40vw",
            mx: "auto",
            textAlign: "center",
          }}
        >
          {data?.text}
        </Typography>
      </Box>
    </Box>
  );
}
