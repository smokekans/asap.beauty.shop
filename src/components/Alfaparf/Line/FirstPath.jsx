import { Box, Typography } from "@mui/material";
import useMatchMedia from "../../hooks/useMatchMedia";

export default function FirstPath({ info }) {
  const { isSmallScreen } = useMatchMedia();
  return (
    <>
      <Box>
        {isSmallScreen ? (
          <Box
            component="img"
            sx={{
              width: 1,
            }}
            alt={info?.title}
            src={info?.image.tablet}
          />
        ) : (
          <Box
            component="img"
            sx={{
              width: 1,
            }}
            alt={info?.title}
            src={info?.image.desktop}
          />
        )}
        <Typography variant="h2" sx={{ fontFamily: "Quicksand" }}>
          {info?.title}
        </Typography>
        <Typography variant="h4">{info?.text}</Typography>
      </Box>
    </>
  );
}
