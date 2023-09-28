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
