import { Box, Typography } from "@mui/material";

export default function DescriptionPath({ data }) {
  return (
    <Box>
      <Typography variant="body2" sx={{ textDecoration: "underline" }}>
        {data?.title}
      </Typography>
      <Typography variant="body1">{data?.text}</Typography>
    </Box>
  );
}
