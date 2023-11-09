import { Box, Typography } from "@mui/material";

export default function CommitmentPath({ data }) {
  return (
    <Box
      sx={{
        backgroundImage: `url(${data?.bgimage})`,
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
      }}
    >
      <Box
        sx={{
          backgroundImage: `url(${data?.image})`,
          backgroundSize: "contain",
          backgroundPosition: "top left",
          height: "450px",
          backgroundRepeat: "no-repeat",
          width: "90%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "end",
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
            variant="h4"
            sx={{
              textDecoration: "underline",
              fontSize: 26,
              fontFamily: "Comfortaa",
            }}
          >
            {data?.title}
          </Typography>
          {data?.text?.map((item, index) => {
            console.log(item);
            return (
              <Typography
                variant="body1"
                sx={{
                  fontSize: 16,
                  fontFamily: "Comfortaa",
                }}
                id={index}
              >
                {item}
              </Typography>
            );
          })}
          {data?.subtext?.map((item, index) => {
            console.log(item);
            return (
              <Typography
                variant="body2"
                sx={{
                  fontSize: 12,
                  fontFamily: "Comfortaa",
                }}
                id={index}
              >
                {item}
              </Typography>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}
