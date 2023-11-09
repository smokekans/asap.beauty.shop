import { Box, List, ListItem, Typography } from "@mui/material";

export default function HomeMaintenancePath({ data, title }) {
  return (
    <>
      {data && (
        <Box
          sx={{
            px: "calc(0.5/12*100vw)",
            pt: "calc(0.5/12*100vw)",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              textTransform: "uppercase",
              textDecoration: "underline",
              fontSize: 18,
              fontFamily: "Comfortaa",
            }}
          >
            {title}
          </Typography>
          <List
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            {data?.map((item, index) => {
              return (
                <ListItem
                  key={index}
                  sx={{
                    display: "block",
                    width: "45%",
                    mb: 5,
                    p: 0,
                  }}
                >
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
                  <Typography
                    variant="body2"
                    sx={{
                      textTransform: "uppercase",
                      fontSize: 19,
                      fontFamily: "Comfortaa",
                    }}
                  >
                    {item?.type}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: 16,
                      fontFamily: "Comfortaa",
                    }}
                  >
                    {item?.subtitle}
                  </Typography>

                  <Typography variant="body1">{item?.description}</Typography>
                  <Typography variant="body1">{item?.howtouse}</Typography>
                </ListItem>
              );
            })}
          </List>
        </Box>
      )}
    </>
  );
}
