import { Box, Typography } from "@mui/material";
import CollapseElement from "./CollapseElement";

export default function AromaPath({ data, name }) {
  return (
    <>
      <CollapseElement
        name={name}
        content={
          <Box>
            {data?.map((item, index) => {
              return (
                <Typography
                  sx={{
                    fontFamily: "Comfortaa",
                    textAlign: "center ",
                    "&:nth-child(2n+2)": { mb: 2 },
                  }}
                  key={index}
                >
                  {item}
                </Typography>
              );
            })}
          </Box>
        }
      />
    </>
  );
}
