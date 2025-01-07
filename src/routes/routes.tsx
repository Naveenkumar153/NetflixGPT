import { RouteObject } from "react-router-dom";
import { authRoutes } from "@/modules/auth/auth.routes";
import ErrorPage from "@/shared/ui/Error/Error";
import InitialScreen from "@/pages/InitialScreen/InitialScreen";
import App from "@/App";

export const routes: RouteObject[] = [
    {
      path: '/',
      element: <App/>,
      errorElement:<ErrorPage/>,
      children:[
        {
          path:'',
          element: <InitialScreen/>,
        },
        ...authRoutes,
      ]
    },
];