import { Box, List, ListItem, Typography } from "@mui/material";

export default function Product({ data }) {
  return (
    <>
      <Box>
        <Box
          component="img"
          sx={{ width: 500 }}
          alt={data?.product}
          src={data?.image}
        />
        <Typography variant="h3">
          {data?.brand} {data?.line} {data?.subline} {data?.product}
          {data?.name}
        </Typography>
        <List>
          {data.features?.map((feature, index) => {
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
