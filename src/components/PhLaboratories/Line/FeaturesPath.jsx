import { Box, List, ListItem, Typography } from "@mui/material";

export default function FeaturesPath({ data }) {
  return (
    <>
      {data && (
        <Box>
          <List>
            {data?.map((item, index) => {
              return (
                <ListItem key={index}>
                  <Typography
                    variant="body2"
                    sx={{ textDecoration: "underline" }}
                  >
                    {item?.title}
                  </Typography>
                  <Typography variant="body1">{item?.text}</Typography>
                </ListItem>
              );
            })}
          </List>
        </Box>
      )}
    </>
  );
}
