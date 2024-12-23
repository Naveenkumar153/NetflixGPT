import { RouteObject } from "react-router-dom";
import InitialScreen from "pages/InitialScreen/InitialScreen";
import App from "App";
import ErrorPage from "components/Error/Error";
import Home from "pages/Home/Home";
import Browser from "pages/Browser/Browser";

export const routes: RouteObject[] = [
    {
      path: '/',
      element: <App/>,
      errorElement:<ErrorPage/>,
      children:[
        {
          path:'/',
          children:[
            {
              path:'',
              element: <InitialScreen/>,
            },
            {
              path:'/home',
              element: <Home/>,
            },
            {
              path:'/browser',
              element: <Browser/>,
            },
          ]
        }
      ]
    },
];