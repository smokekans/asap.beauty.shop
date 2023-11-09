import { List, ListItem } from "@mui/material";
import CollapseElement from "./CollapseElement";

export default function AromaPath({ data, name }) {
  return (
    <>
      <CollapseElement
        name={name}
        content={
          <List>
            {data?.map((item, index) => {
              return (
                <ListItem
                  key={index}
                  sx={{
                    fontFamily: "Comfortaa",
                  }}
                >
                  {item}
                </ListItem>
              );
            })}
          </List>
        }
      />
    </>
  );
}
