import { Box, Tab, Tabs, Typography, tabsClasses } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function CatalogPath({ id, products }) {
  const allProducts = Object.keys(products || {}).reduce((acc, category) => {
    return acc.concat(products[category]);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const [activeTab, setActiveTab] = useState(0);

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box
      id={id}
      sx={{
        display: "flex",
        flexWrap: "wrap",
        maxWidth: "100vw",
        justifyContent: "center",
      }}
    >
      <Tabs
        value={activeTab}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        allowScrollButtonsMobile
        aria-label="scrollable auto tabs example"
        sx={{
          mt: 2,
          display: "flex",
          [`& .${tabsClasses.scrollButtons}`]: {
            "&.Mui-disabled": { opacity: 0.3 },
          },
        }}
      >
        {allProducts.map((product, index) => {
          return (
            <Tab
              key={index}
              sx={{
                transition: "background-color 0.7s ease",
                textDecoration: "none",
                cursor: "pointer",
                color: "black",
                borderRadius: 25,
                m: 1,
                "&:hover": { bgcolor: "rgba(0, 0, 0, 0.04)", borderRadius: 25 },
              }}
              label={
                <Link
                  to={`/${product.brand
                    .toLowerCase()
                    .replace(/ /g, "-")}/${product.subline
                    .toLowerCase()
                    .replace(/ /g, "-")}/${product.type}/${product.product
                    .toLowerCase()
                    .replace(/& /g, "")
                    .replace(/ /g, "-")}/${product.volume
                    .toLowerCase()
                    .replace(/ /g, "-")}`}
                  style={{
                    textDecoration: "none",
                    textTransform: "none",
                    color: "black",
                    wordWrap: "break-word",
                    width: "250px",
                    height: "100%",
                    fontFamily: "Comfortaa",
                  }}
                >
                  <Box
                    component="img"
                    sx={{ width: "250px" }}
                    alt={product?.title}
                    src={product?.image[0]}
                    onClick={scrollToTop}
                  />
                  <Box sx={{ height: "96px" }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontFamily: "Comfortaa",
                      }}
                    >
                      {product?.product}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        fontFamily: "Comfortaa",
                      }}
                    >
                      {product?.volume}
                    </Typography>
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: "Comfortaa",
                      maxWidth: "250px",
                    }}
                  >
                    {product?.name}
                  </Typography>
                </Link>
              }
            />
          );
        })}
      </Tabs>
    </Box>
  );
}
