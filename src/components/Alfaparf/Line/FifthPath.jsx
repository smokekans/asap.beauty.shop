import { Box, List, ListItem, Typography } from "@mui/material";

export default function FifthPath({ info }) {
  return (
    <>
      <Typography variant="h2" sx={{ fontFamily: "Quicksand" }}>
        {info?.title}
      </Typography>
      <List>
        {info?.formula.map((item, index) => {
          return (
            <ListItem key={index}>
              <Box
                component="img"
                sx={{
                  width: 50,
                  height: 50,
                }}
                alt={item.title}
                src={item.icon}
              />
              <Typography variant="h4">{item.title}</Typography>
              <Typography variant="h6">{item.text}</Typography>
            </ListItem>
          );
        })}
      </List>
    </>
  );
}
