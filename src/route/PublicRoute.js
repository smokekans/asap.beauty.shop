import Cookies from "js-cookie";
import { Outlet, Navigate } from "react-router-dom";

export const PublicRoute = ({ restricted = false, redirectTo }) => {
  const token = Cookies.get("accessToken");
  const shouldRedirect = token && restricted;
  return shouldRedirect ? <Navigate to={redirectTo} /> : <Outlet />;
};
