import { Box, List, ListItem, Typography } from "@mui/material";

export default function CatalogAlfaparf({ info }) {
  return (
    <>
      {info?.map((item, index) => {
        return (
          <Box key={index}>
            <Typography variant="h3">{item.title}</Typography>
            <Typography variant="h5">{item.text}</Typography>
            <List>
              {item.lines.map((line, index) => {
                return (
                  <ListItem key={index}>
                    <Box
                      component="img"
                      sx={{
                        width: 250,
                        height: 250,
                      }}
                      alt={line.title}
                      src={line.image}
                    />
                    <Typography variant="h3">{line.title}</Typography>
                    <Typography variant="h5">{line.text}</Typography>
                  </ListItem>
                );
              })}
            </List>
          </Box>
        );
      })}
    </>
  );
}