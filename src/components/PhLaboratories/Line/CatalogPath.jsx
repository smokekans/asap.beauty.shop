import { Box, List, ListItem, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function CatalogPath({ products }) {
  return (
    <>
      {Object.keys(products).map((category) => {
        return (
          <Box key={category}>
            <List>
              {products[category].map((product, index) => {
                return (
                  <Link
                    key={index}
                    to={`/${product.brand
                      .toLowerCase()
                      .replace(/ /g, "")}/${product.subline
                      .toLowerCase()
                      .replace(/ /g, "-")}/${product.type}/${product.product
                      .toLowerCase()
                      .replace(/ /g, "-")}`}
                    style={{
                      textDecoration: "none",
                      color: "black",
                    }}
                  >
                    <ListItem key={index}>
                      <Box
                        component="img"
                        sx={{ width: "250px" }}
                        alt={product?.title}
                        src={product?.image[0]}
                      />
                      <Typography variant="h6">{product?.product}</Typography>
                      <Typography variant="body2">{product?.name}</Typography>
                    </ListItem>
                  </Link>
                );
              })}
            </List>
          </Box>
        );
      })}
    </>
  );
}
