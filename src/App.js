import { Route, Routes } from "react-router-dom";
import { PublicRoute } from "./route/PublicRoute";
import { PrivateRoute } from "./route/PrivateRoute";
import UserPage from "./pages/UserPage";
import MainPage from "./pages/MainPage";
import NotFoundPage from "./pages/NotFoundPage";
import AuthPage from "./pages/AuthPage";
import ProductsPage from "./pages/ProductsPage";
import AlfaparfPage from "./pages/AlfaparfPage";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme";
import LineAlfaparfPage from "./pages/LineAlfaparfProduct";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index path="" element={<MainPage />} />
            <Route path="products" element={<ProductsPage />} />
            <Route path="alfaparf" element={<AlfaparfPage />} />
            <Route path="/:nameLine" element={<LineAlfaparfPage />} />
            <Route path="" element={<PublicRoute redirectTo="/" restricted />}>
              <Route path="login" element={<AuthPage />} />
            </Route>
            <Route path="" element={<PrivateRoute />}>
              <Route path="user" element={<UserPage />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
