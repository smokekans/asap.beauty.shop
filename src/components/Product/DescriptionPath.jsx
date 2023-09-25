import { ListItem } from "@mui/material";
import CollapseElement from "./CollapseElement";

export default function DescriptionPath({ data, name }) {
  return (
    <CollapseElement
      name={name}
      content={
        <ListItem
          sx={{
            fontFamily: "Comfortaa",
          }}
        >
          {data}
        </ListItem>
      }
    />
  );
}
