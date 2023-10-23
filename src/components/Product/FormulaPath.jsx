import { Box, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";

export default function FormulaPath({ data }) {
  const [activeTab, setActiveTab] = useState(0);

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };
  return (
    <Box sx={{ mt: 6 }}>
      <Tabs
        value={activeTab}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        allowScrollButtonsMobile
        aria-label="scrollable auto tabs example"
      >
        {data?.formula?.map((item, index) => {
          return (
            <Tab
              key={index}
              sx={{
                border: "2px solid rgba(0, 0, 0, 0.2)",
                height: "150px",
                width: "500px",
                wordWrap: "break-word",
                whiteSpace: "normal",
                mx: 2,
              }}
              label={
                <Box
                  sx={{
                    display: "flex",
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
                </Box>
              }
            />
          );
        })}
      </Tabs>
    </Box>
  );
}
