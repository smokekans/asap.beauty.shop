import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#fffff00",
      light: "#ffedd8",
      dark: "#d4a276",
      contrastText: "#000000",
    },
    secondary: {
      main: "#89c2d9",
      light: "#a9d6e5",
      dark: "#61a5c2",
      contrastText: "#000000",
    },
    breakpoints: {
      values: {
        mobile: 320,
        tablet: 768,
        desktop: 1280,
      },
    },
  },
});

export default theme;
