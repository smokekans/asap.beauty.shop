import { Box, Button, Collapse } from "@mui/material";
import { useState } from "react";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

export default function CollapseElement({ content, name }) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: "block" }}>
      <Button
        onClick={handleClick}
        fullWidth
        sx={{ fontFamily: "Comfortaa", fontSize: 20 }}
      >
        {name}
        {open ? (
          <ExpandLess sx={{ fontSize: 30, ml: "auto" }} />
        ) : (
          <ExpandMore sx={{ fontSize: 30, ml: "auto" }} />
        )}
      </Button>
      <Collapse in={open}>{content}</Collapse>
    </Box>
  );
}
