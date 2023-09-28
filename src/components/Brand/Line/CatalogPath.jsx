import { Box, Tabs, Typography, tabsClasses } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function CatalogPath({ id, products }) {
  const [value, setValue] = useState(0);

  const allProducts = Object.keys(products || {}).reduce((acc, category) => {
    return acc.concat(products[category]);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      id={id}
      sx={{
        display: "flex",
        flexWrap: "wrap",
        maxWidth: "100vw",
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        allowScrollButtonsMobile
        aria-label="scrollable auto tabs example"
        sx={{
          display: "flex",
          [`& .${tabsClasses.scrollButtons}`]: {
            "&.Mui-disabled": { opacity: 0.3 },
          },
        }}
      >
        {allProducts.map((product, index) => {
          return (
            <Box
              sx={{
                wordWrap: "break-word",
                whiteSpace: "normal",
                width: "250px",
                mx: 1,
              }}
            >
              <Link
                key={index}
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
                  color: "black",
                  width: "250px",
                  textAlign: "center",
                }}
              >
                <Box
                  component="img"
                  sx={{ width: "250px" }}
                  alt={product?.title}
                  src={product?.image[0]}
                  onClick={scrollToTop}
                />
                <Typography
                  variant="h6"
                  sx={{
                    wordWrap: "break-word",
                    fontFamily: "Comfortaa",
                  }}
                >
                  {product?.product} {product?.volume}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    wordWrap: "break-word",
                    fontFamily: "Comfortaa",
                  }}
                >
                  {product?.name}
                </Typography>
              </Link>
            </Box>
          );
        })}
      </Tabs>
    </Box>
  );
}
