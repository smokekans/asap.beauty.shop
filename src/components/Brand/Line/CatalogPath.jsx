import { Box, Typography } from "@mui/material";
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
  return (
    <Box id={id} sx={{ display: "flex", flexWrap: "wrap" }}>
      {allProducts.map((product, index) => {
        return (
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
                fontFamily: "Comfortaa",
              }}
            >
              {product?.product} {product?.volume}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontFamily: "Comfortaa",
              }}
            >
              {product?.name}
            </Typography>
          </Link>
        );
      })}
    </Box>
  );
}
