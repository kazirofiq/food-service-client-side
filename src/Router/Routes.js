import { createBrowserRouter, Link } from "react-router-dom";
import Main from "../components/layout/Main";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element: <Home></Home>
            
        },
        {
            path:'/home',
            element: <Home></Home>
            
        },
        {
            path:'/blog',
            element: <Blog></Blog>
            
        },
      ]
    },
    {
        path:'*',
        element: <div className='text-center text-5xl text-red-600 mt-4 '>This Page Not Found <span className='text-blue-600 text-sm'><Link to='/home'>click Home</Link></span>
        </div>
      }
  ]);