import { Box, List, ListItem, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function CatalogPath({ info }) {
  return (
    <>
      <List>
        {info?.map((line, index) => {
          console.log("====================================");
          console.log(line);
          console.log("====================================");
          return (
            <Link
              key={index}
              to={`/phlaboratories/${line.name
                .toLowerCase()
                .replace(/& /g, "")
                .replace(/ /g, "-")}`}
              style={{
                textDecoration: "none",
                color: "black",
              }}
            >
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
                <Typography variant="h6">{line.name}</Typography>
                <Typography variant="body2">{line.description}</Typography>
              </ListItem>
            </Link>
          );
        })}
      </List>
    </>
  );
}
