import { Box, Typography } from "@mui/material";

export default function DescriptionWIPath({ data }) {
  return (
    <Box
      sx={{
        backgroundImage: `url(${data?.image})`,
        backgroundSize: "contain",
        backgroundPosition: "top left",
        height: "600px",
        backgroundRepeat: "no-repeat",
        width: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "end",
        px: "calc(0.5/12*100vw)",
        pt: "calc(0.5/12*100vw)",
      }}
    >
      <Box
        sx={{
          width: "50vw",
          textAlign: "right",
          bgcolor: "white",
          p: 8,
        }}
      >
        <Typography
          variant="body2"
          sx={{
            textDecoration: "underline",
            fontSize: 32,
            fontFamily: "Comfortaa",
          }}
        >
          {data?.title}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: 18,
            fontFamily: "Comfortaa",
          }}
        >
          {data?.text}
        </Typography>
      </Box>
    </Box>
  );
}
