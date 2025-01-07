// auth.routes.tsx
import { RouteObject } from "react-router-dom";
import { lazy } from "react";

// Lazy load components
const Login: React.FC = lazy(() => import("./pages/Login/Login"));
const Signup: React.FC = lazy(() => import("./pages/Signup/Signup"));

export const authRoutes: RouteObject[] = [
  {
    path: "login",
    element: <Login />, 
  },
  {
    path: "signup",
    element: <Signup />,
  },
];
