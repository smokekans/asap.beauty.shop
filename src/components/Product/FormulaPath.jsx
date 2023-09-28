import { Box, List, ListItem, Tabs, Typography } from "@mui/material";
import { useState } from "react";

export default function FormulaPath({ data }) {
  const [value, setValue] = useState(0);

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  return (
    <Box>
      <List sx={{ display: "flex", maxWidth: "100vw" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          scrollButtons="auto"
          allowScrollButtonsMobile
          aria-label="scrollable auto tabs example"
        >
          {data?.formula?.map((item, index) => {
            return (
              <Box
                key={index}
                sx={{
                  border: "2px solid rgba(0, 0, 0, 0.2)",
                  height: "auto",
                  width: "500px",
                  wordWrap: "break-word",
                  whiteSpace: "normal",
                  mx: 2,
                  //   width: "250px",
                  //   mx: 1,
                  //   py: 2,
                  //   px: 4,
                  //   m: 2,
                }}
              >
                <ListItem
                  sx={{
                    display: "flex",
                    // flexWrap: "wrap",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{ fontFamily: "Comfortaa", fontSize: 16 }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: "Comfortaa",
                      fontSize: 12,
                      textWrap: "balance",
                      textAlign: "center",
                    }}
                  >
                    {item.text}
                  </Typography>
                </ListItem>
              </Box>
            );
          })}
        </Tabs>
      </List>
    </Box>
  );
}
