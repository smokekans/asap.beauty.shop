import { Box, Tab, Tabs, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function CatalogAlfaparf({ info }) {
  return (
    <Box sx={{ display: "grid" }}>
      {info?.map((item, index) => {
        return (
          <Box
            key={index}
            sx={{ mx: "auto", width: "100vw", textAlign: "center", my: 3 }}
          >
            <Box
              sx={{
                mx: "auto",
                width: "50vw",
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontFamily: "Comfortaa",
                  fontSize: 20,
                  color: "black",
                  mt: 5,
                }}
              >
                {item.title}
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "Comfortaa",
                  fontSize: 16,
                  color: "black",
                }}
              >
                {item.text}
              </Typography>
            </Box>
            <Tabs variant="fullWidth">
              {item.lines.map((line, index) => {
                return (
                  <Tab
                    key={index}
                    label={
                      <Link
                        key={index}
                        to={`/alfaparf/${line.title.toLowerCase()}`}
                        style={{
                          textDecoration: "none",
                          color: "black",
                          height: "550px",
                        }}
                      >
                        <Box
                          sx={{
                            width: "400px",
                            height: "300px",
                          }}
                        >
                          <Box
                            component="img"
                            sx={{
                              width: "auto",
                              height: "400px",
                            }}
                            alt={line.title}
                            src={line.image}
                          />
                          <Typography
                            variant="h3"
                            sx={{
                              fontFamily: "Comfortaa",
                              fontSize: 16,
                              color: "black",
                            }}
                          >
                            {line.title}
                          </Typography>
                          <Typography
                            variant="h5"
                            sx={{
                              fontFamily: "Comfortaa",
                              fontSize: 16,
                              textTransform: "lowercase",
                              color: "black",
                            }}
                          >
                            {line.text}
                          </Typography>
                        </Box>
                      </Link>
                    }
                  />
                );
              })}
            </Tabs>
          </Box>
        );
      })}
    </Box>
  );
}
