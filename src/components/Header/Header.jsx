import {
  AppBar,
  Box,
  Button,
  MenuItem,
  MenuList,
  Toolbar,
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
        <AppBar position="static">
          <Toolbar>
            <Box
              component={Link}
              to="/"
              sx={{
                color: "inherit",
                textDecoration: "none",
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
                      to={`/${page.name.toLowerCase()}`}
                      sx={{
                        my: 2,
                        color: "white",
                        textDecoration: "none",
                        marginRight: "10px",
                      }}
                    >
                      {page.name}
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
                              to={`/${page.name.toLowerCase()}/${line.category.toLowerCase()}`}
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
