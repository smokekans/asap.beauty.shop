import { List, ListItem, Typography } from "@mui/material";

export default function AromaPath({ data }) {
  return (
    <>
      <Typography variant="h6" sx={{ textAlign: "center" }}>
        {data?.title}:
      </Typography>
      <List>
        {data?.aroma.map((item, index) => {
          return (
            <ListItem key={index} sx={{ display: "grid" }}>
              <Typography variant="body1" sx={{ textAlign: "center" }}>
                {item?.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontSize: 10, textAlign: "center" }}
              >
                {item?.description}
              </Typography>
            </ListItem>
          );
        })}
      </List>
    </>
  );
}
