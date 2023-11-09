import { Box, Tab, Tabs, Typography } from "@mui/material";

export default function FormulaPath({ data }) {
  return (
    <Box
      sx={{
        p: "calc(0.5/12*100vw)",
      }}
    >
      <Box sx={{ textAlign: "center" }}>
        <Typography
          variant="h2"
          sx={{
            fontFamily: "Comfortaa",
          }}
        >
          {data?.title}
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Comfortaa",
          }}
        >
          {data?.text}
        </Typography>
      </Box>
      <Tabs
        variant="fullWidth"
        aria-label="scrollable auto tabs example"
        sx={{
          p: "calc(0.5/12*100vw)",
        }}
      >
        {data?.formula?.map((item, index) => {
          return (
            <Tab
              key={index}
              sx={{
                border: "1px solid rgba(0, 0, 0, 0.2)",
                height: "250px",
                wordWrap: "break-word",
                whiteSpace: "normal",
                mx: 2,
              }}
              label={
                <Box>
                  <Box
                    component="img"
                    sx={{
                      width: 50,
                      height: 50,
                    }}
                    alt={item.title}
                    src={item.icon}
                  />
                  <Typography
                    variant="h3"
                    sx={{
                      fontFamily: "Comfortaa",
                      fontSize: 22,
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{
                      fontFamily: "Comfortaa",
                      textTransform: "none",
                      fontSize: 16,
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
