import { createBrowserRouter, RouteObject } from "react-router-dom";
import InitialScreen from "pages/InitialScreen/InitialScreen";
import App from "App";
import ErrorPage from "components/Error/Error";

export const routes: RouteObject[] = [
    {
      path: '/',
      element: <App/>,
      errorElement:<ErrorPage/>,
      children:[
        {
          path:'/home',
          element: <InitialScreen/>,
        },
      ]
    },
];