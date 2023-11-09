import { Route, Routes } from "react-router-dom";
import { PublicRoute } from "./route/PublicRoute";
import { PrivateRoute } from "./route/PrivateRoute";
import UserPage from "./pages/UserPage";
import MainPage from "./pages/MainPage";
import NotFoundPage from "./pages/NotFoundPage";
import AuthPage from "./pages/AuthPage";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme";
import BrandPage from "./pages/BrandPage";
import LinePage from "./pages/LinePage";
import ProductPage from "./pages/ProductPage";
import CatalogPage from "./pages/CatalogPage";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index path="" element={<MainPage />} />
            <Route path="/basket" element={<CatalogPage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/:brand" element={<BrandPage />} />
            <Route path="/:brand/:line" element={<LinePage />} />
            <Route
              path="/:brand/:line/:type/:product/:volume"
              element={<ProductPage />}
            />
            <Route
              path=""
              element={<PublicRoute redirectTo="/user" restricted />}
            >
              <Route path="authorization" element={<AuthPage />} />
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
