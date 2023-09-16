import { Box, Typography } from "@mui/material";

export default function HeadPath({ data }) {
  return (
    <>
      <Box
        component="img"
        sx={{
          width: 1,
        }}
        alt={data?.title}
        src={data?.image}
      />
      <Typography variant="h4" sx={{ fontFamily: "Quicksand" }}>
        {data?.title}
      </Typography>
      <Typography variant="body2">{data?.text}</Typography>
    </>
  );
}
