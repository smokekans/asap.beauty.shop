import "swiper/swiper-bundle.min.css";
import { Box, List, ListItem, Typography } from "@mui/material";
export default function Product({ data }) {
  return (
    <>
      <Box>
        <Box
          component="img"
          sx={{ width: 500 }}
          alt="product"
          src={data?.image}
        />

        <Typography variant="h3">
          {data?.brand} {data?.line} {data?.product} {data?.name}
        </Typography>
        <List>
          {data?.features?.map((feature, index) => {
            return (
              <ListItem key={index}>
                <Typography variant="body2">{feature}</Typography>
              </ListItem>
            );
          })}
        </List>
      </Box>
    </>
  );
}
