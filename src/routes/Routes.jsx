import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Blog from "../pages/Blog/Blog";
import LogIn from "../pages/LogIn/LogIn";
import SignUp from "../pages/SignUp/SignUp";
import Error from "../pages/ErrorPage/Error";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
          
             {
                 path: '/',
                 element: <Home/>,
             loader : () => fetch('http://localhost:3000/chefs')

             },
             {
                 path: '/blog',
                 element: <Blog/>
             },
             {
                 path: '/logIn',
                 element: <LogIn/>
             },
             {
                 path: '/singUp',
                 element: <SignUp/>
             },
             {
                 path : '*',
                 element: <Error/>
             }
      ]
    },
  ]);

 export default router; 