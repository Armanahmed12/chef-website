import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Blog from "../pages/Blog/Blog";
import LogIn from "../pages/LogIn/LogIn";
import SignUp from "../pages/SignUp/SignUp";
import Error from "../pages/ErrorPage/Error";
import ChefInfo from "../pages/ChefInfo/ChefInfo";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
          
             {
                 path: '/',
                 element: <Home/>,
             loader : () => fetch('https://chef-web-server-sigma.vercel.app/chefs')

             },
             {
                 path: '/blog',
                 element: <Blog/>
             },
             {
                  path: '/chef/:id',
                  element: <ChefInfo/>,
                  loader: ({params}) => fetch(`https://chef-web-server-sigma.vercel.app/chef/${params.id}`)
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