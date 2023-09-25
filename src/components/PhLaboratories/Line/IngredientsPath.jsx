import { Box, List, ListItem, Typography } from "@mui/material";

export default function IngredientsPath({ data }) {
  return (
    <>
      {data && (
        <Box>
          <Typography variant="h6">{data?.title}:</Typography>
          <List>
            {data?.ingredients.map((item, index) => {
              return (
                <ListItem key={index} sx={{ display: "block" }}>
                  <Typography variant="body1">{item?.title}</Typography>
                  <Typography variant="body2" sx={{ fontSize: 10 }}>
                    {item?.text}
                  </Typography>
                </ListItem>
              );
            })}
          </List>
        </Box>
      )}
    </>
  );
}
