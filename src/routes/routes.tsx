import { RouteObject } from "react-router-dom";
import InitialScreen from "pages/InitialScreen/InitialScreen";
import App from "App";
import Home from "pages/Home/Home";
import Browser from "modules/browser/components/Browse/Browse";
import ErrorPage from "shared/ui/Error/Error";

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