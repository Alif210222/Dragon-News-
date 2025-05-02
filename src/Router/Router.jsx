import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router";
import Root from "../Root/Root";
import About from "../Pages/About/About";
import Career from "../Pages/Career/Career";
import MainContent from "../Pages/Home/MainContent/MainContent";
import CategoryNews from "../Pages/CategoryNews/CategoryNews";
import HomePage from "../Pages/HomePage/HomePage";
import AuthLayout from "../Pages/AuthLayout/AuthLayout";
import Login from "../Pages/AuthLayout/Login";
import Register from "../Pages/AuthLayout/Register";
import NewsDetails from "../Pages/NewsDetails/NewsDetails";
import PrivetRoute from "../AuthProvider/PrivetRoute";
import Loading from "../Components/Loading/Loading";





  export  const router = createBrowserRouter([
    {
      path: "/",
      Component:Root,
      children:[
        {
          path:"/",
           Component:HomePage
        },
        {
            path:"/category/:id",
            Component:CategoryNews,
            HydrateFallback:Loading,
            loader:()=> fetch("/news.json")
        },
     
        {
            path:"/about",
            Component:About
        },
        {
            path:"/career",
            Component:Career
        }
      
      ]
    },
    {
      path:"auth",
      Component:AuthLayout,
      children:[
        {
          path:"/auth/login",
          Component:Login

        },
        {
          path : "/auth/register",
          Component:Register
        }
      ]
    },
    {
      path:"/news-details/:id",
     element:<PrivetRoute> 
         <NewsDetails></NewsDetails>
     </PrivetRoute>,
      HydrateFallback:Loading,
      loader:()=> fetch("/news.json")
    }
 
  ]);