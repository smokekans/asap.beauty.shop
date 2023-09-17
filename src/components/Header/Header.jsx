import {
  AppBar,
  Box,
  Button,
  MenuItem,
  MenuList,
  Toolbar,
  Typography,
} from "@mui/material";
import LogoIcon from "./Logo";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { onValue, ref } from "firebase/database";
import { db } from "../../firebase/config";

export default function Header() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [pages, setPages] = useState([]);

  const getData = () => {
    const catalogRef = ref(db, "/catalog");
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
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="fixed"
          sx={{
            background: "rgba(255, 255, 255, 0.2)",
            boxShadow: "none",
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
                          textShadow: "1px 1px 1px white",
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
                          backgroundColor: "white",
                          boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.2)",
                          p: 1,
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
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
