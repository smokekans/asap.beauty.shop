import { Box, List, ListItem, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function CatalogLinePath({ id, products }) {
  const allProducts = Object.keys(products || {}).reduce((acc, category) => {
    return acc.concat(products[category]);
  }, []);

  console.log("==============allProducts======================");
  console.log(allProducts);
  console.log("====================================");

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Box
      sx={{
        px: "calc(0.5/12*100vw)",
        pt: "calc(0.5/12*100vw)",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontFamily: "Comfortaa",
          mb: 3,
        }}
      >
        Лінійки нашого бренду:
      </Typography>
      <List
        id={id}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          maxWidth: "100vw",
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        {allProducts.map((product, index) => {
          return (
            <ListItem
              sx={{
                maxWidth: "30vw",
              }}
            >
              <Link
                to={`/ph-laboratories/${product.name
                  .toLowerCase()
                  .replace(/ /g, "-")}`}
                style={{
                  textDecoration: "none",
                  textTransform: "none",
                  color: "black",
                  wordWrap: "break-word",
                  maxWidth: "500px",
                  height: "500px",
                  fontFamily: "Comfortaa",
                }}
                key={index}
              >
                <Box
                  component="img"
                  sx={{
                    width: "100%",
                    height: "400px",
                  }}
                  alt={product?.name}
                  src={product?.image}
                  onClick={scrollToTop}
                />
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "Comfortaa",
                  }}
                >
                  {product?.name}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "Comfortaa",
                    fontSize: "14px",
                  }}
                >
                  {product?.description}
                </Typography>
              </Link>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
}
