import { Route, Routes } from "react-router-dom";
import { PublicRoute } from "./route/PublicRoute";
import { PrivateRoute } from "./route/PrivateRoute";
import UserPage from "./pages/UserPage";
import MainPage from "./pages/MainPage";
import NotFoundPage from "./pages/NotFoundPage";
import AuthPage from "./pages/AuthPage";
import CatalogPage from "./pages/CatalogPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index path="" element={<MainPage />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="" element={<PublicRoute redirectTo="/" restricted />}>
            <Route path="login" element={<AuthPage />} />
          </Route>
          <Route path="" element={<PrivateRoute />}>
            <Route path="user" element={<UserPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
