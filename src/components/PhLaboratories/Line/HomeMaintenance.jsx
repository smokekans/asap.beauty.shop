import { Box, List, ListItem, Typography } from "@mui/material";

export default function HomeMaintenance({ data }) {
  return (
    <>
      <Typography variant="h6">{data?.title}</Typography>
      <List>
        {data?.varian.map((item, index) => {
          return (
            <ListItem key={index} sx={{ display: "grid" }}>
              {item.icon && (
                <Box
                  component="img"
                  sx={{
                    width: 150,
                  }}
                  alt={item?.type}
                  src={item?.icon}
                />
              )}
              <Typography sx={{ fontSize: 19 }}>{item?.type}</Typography>
              <Typography>{item?.subtitle}</Typography>
              <Typography>{item?.description}</Typography>
              <Typography>{item?.howtouse}</Typography>
            </ListItem>
          );
        })}
      </List>
    </>
  );
}
