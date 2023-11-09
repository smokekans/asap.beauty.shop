import { Box, Tab, Tabs, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function CatalogAlfaparfLinePath({ id, products, nameBrand }) {
  return (
    <Box
      id={id}
      sx={{
        display: "grid",
        pt: 6,
        bgcolor: "white",
      }}
    >
      {products?.map((item, index) => {
        return (
          <Box
            key={index}
            sx={{
              mx: "auto",
              width: "100vw",
              textAlign: "center",
            }}
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
                  fontSize: 28,
                  color: "black",
                  mt: 3,
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
              {item?.catalog?.map((line, index) => {
                return (
                  <Tab
                    key={index}
                    label={
                      <Link
                        key={index}
                        to={`/${nameBrand}/${line.title.toLowerCase()}`}
                        style={{
                          textDecoration: "none",
                          color: "black",
                        }}
                      >
                        <Box>
                          <Box
                            component="img"
                            sx={{
                              width: "400px",
                              height: "400px",
                              objectFit: "cover",
                              objectPosition: "top",
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
