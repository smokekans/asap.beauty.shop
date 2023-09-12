import { Box, Typography } from "@mui/material";

export default function ThirdPath({ info }) {
  return (
    <>
      <Box>
        {info?.image.map((item, index) => {
          return (
            <Box
              key={index}
              component="img"
              sx={{
                width: 1,
              }}
              alt={info?.title}
              src={item}
            />
          );
        })}

        <Typography variant="h3">{info?.title}</Typography>
        <Typography variant="h5">{info?.text}</Typography>
      </Box>
    </>
  );
}
