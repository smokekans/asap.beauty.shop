import { Box, List, ListItem, Typography } from "@mui/material";

export default function FeaturesPath({ data, title }) {
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
            variant="body2"
            sx={{
              textTransform: "uppercase",
              textDecoration: "underline",
              fontSize: 18,
              fontFamily: "Comfortaa",
              textAlign: title === "Аромат" ? "center" : "none",
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
                <>
                  {item?.text ? (
                    <ListItem
                      key={index}
                      sx={{
                        display: "block",
                        width: "45%",
                        mb: 5,
                        p: 0,
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          textTransform: "uppercase",
                          fontSize: 24,
                          fontFamily: "Comfortaa",
                        }}
                      >
                        {item?.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          fontSize: 14,
                          fontFamily: "Comfortaa",
                        }}
                      >
                        {item?.text}
                      </Typography>
                    </ListItem>
                  ) : (
                    <ListItem
                      key={index}
                      sx={{
                        display: "block",
                        textAlign: "center",
                        width: "60vw",
                        mx: "auto",
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          textTransform: "uppercase",
                          fontSize: 24,
                          fontFamily: "Comfortaa",
                        }}
                      >
                        {item?.title}
                      </Typography>

                      <Typography
                        variant="body1"
                        sx={{
                          fontSize: 14,
                          fontFamily: "Comfortaa",
                        }}
                      >
                        {item?.description}
                      </Typography>
                    </ListItem>
                  )}
                </>
              );
            })}
          </List>
        </Box>
      )}
    </>
  );
}
