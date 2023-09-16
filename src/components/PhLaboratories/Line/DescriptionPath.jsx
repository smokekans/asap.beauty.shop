import { Typography } from "@mui/material";

export default function DescriptionPath({ data }) {
  return (
    <>
      <Typography variant="body2" sx={{ textDecoration: "underline" }}>
        {data?.title}
      </Typography>
      <Typography variant="body1">{data?.text}</Typography>
    </>
  );
}
