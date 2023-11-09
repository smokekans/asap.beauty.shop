import Cookies from "js-cookie";
import { Outlet, Navigate } from "react-router-dom";

export const PrivateRoute = () => {
  const token = Cookies.get("accessToken");
  return token ? <Outlet /> : <Navigate to="/authorization" />;
};
