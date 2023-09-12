import { Box, Typography } from "@mui/material";

export default function SecondPath({ info }) {
  return (
    <>
      <Box>
        <Box
          component="img"
          sx={{
            width: 1,
          }}
          alt={info?.title}
          src={info?.image}
        />
        <Typography variant="h3">{info?.title}</Typography>
        <Typography variant="h5">{info?.text}</Typography>
      </Box>
    </>
  );
}
