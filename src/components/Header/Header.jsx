import {
  AppBar,
  Badge,
  Box,
  Button,
  Fab,
  Fade,
  IconButton,
  MenuItem,
  MenuList,
  Slide,
  Toolbar,
  Typography,
} from "@mui/material";
import LogoIcon from "./Logo";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { onValue, ref } from "firebase/database";
import { database } from "../../firebase/config";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import SignOut from "../Auth/SignOut";

export default function Header() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [pages, setPages] = useState([]);

  const getData = () => {
    const catalogRef = ref(database, "/catalog");
    onValue(catalogRef, (snapshot) => {
      const data = snapshot.val();
      setPages(data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const handleCategoryMouseEnter = (name) => {
    setSelectedCategory(name);
  };

  const handleCategoryMouseLeave = () => {
    setSelectedCategory(null);
  };

  const isCategorySelected = (name) => {
    return selectedCategory === name;
  };

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 30,
  });

  const handleClick = () => {
    const anchor = document.querySelector("#back-to-top");

    if (anchor) {
      anchor.scrollIntoView({
        block: "center",
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <Box>
        <Slide appear={false} direction="down" in={!trigger}>
          <AppBar
            position="fixed"
            sx={{
              background: "rgba(255, 255, 255, 1)",
              boxShadow: "none",
              m: 1,
              borderRadius: 100,
              width: "-webkit-fill-available",
            }}
          >
            <Toolbar>
              <Box
                component={Link}
                to="/"
                sx={{
                  color: "inherit",
                  textDecoration: "none",
                  flexGrow: 1,
                }}
              >
                <LogoIcon sx={{ width: 56, height: 56 }} />
              </Box>
              <Box sx={{ flexGrow: 1, display: "flex", flexWrap: "nowrap" }}>
                {pages?.map((page, index) => {
                  return (
                    <Box
                      key={index}
                      sx={{ position: "relative" }}
                      onMouseEnter={() => handleCategoryMouseEnter(page.name)}
                      onMouseLeave={() => handleCategoryMouseLeave(page.name)}
                    >
                      <Button
                        component={Link}
                        to={`/${page.name.toLowerCase().replace(/ /g, "-")}`}
                        sx={{
                          my: 2,
                          color: "black",
                          textDecoration: "none",
                          marginRight: "10px",
                        }}
                      >
                        <Typography
                          sx={{
                            fontFamily: "Comfortaa",
                            textTransform: "none",
                          }}
                        >
                          {page.name}
                        </Typography>
                      </Button>
                      {isCategorySelected(page.name) && (
                        <MenuList
                          sx={{
                            position: "absolute",
                            boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.2)",
                            p: 1,
                            bgcolor: "white",
                            borderRadius: 5,
                          }}
                        >
                          {page.lines?.map((line, index) => {
                            return (
                              <Link
                                key={index}
                                to={`/${page.name
                                  .toLowerCase()
                                  .replace(/ /g, "-")}/${line.category
                                  .toLowerCase()
                                  .replace(/& /g, "")
                                  .replace(/ /g, "-")}`}
                                style={{
                                  textDecoration: "none",
                                  color: "black",
                                }}
                              >
                                <MenuItem>{line.category}</MenuItem>
                              </Link>
                            );
                          })}
                        </MenuList>
                      )}
                    </Box>
                  );
                })}
              </Box>
              <Box>
                <IconButton component={Link} to={"/user"}>
                  <AccountCircleOutlinedIcon />
                </IconButton>
                <IconButton aria-label="cart">
                  <Badge badgeContent={4} color="secondary">
                    <ShoppingCartOutlinedIcon />
                  </Badge>
                </IconButton>
                <SignOut />
              </Box>
            </Toolbar>
          </AppBar>
        </Slide>
        <Toolbar id="back-to-top" sx={{ position: "absolute" }} />
        <Fade in={trigger}>
          <Box
            onClick={handleClick}
            role="presentation"
            sx={{ position: "fixed", bottom: 20, right: 20, zIndex: 100 }}
          >
            <Fab size="small" aria-label="scroll back to">
              <KeyboardArrowUpIcon />
            </Fab>
          </Box>
        </Fade>
      </Box>
    </>
  );
}
