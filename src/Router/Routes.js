import { createBrowserRouter, Link } from "react-router-dom";
import Main from "../components/layout/Main";
import Blog from "../Pages/Blog/Blog";
import Checkout from "../Pages/Checkout/Checkout";
import Home from "../Pages/Home/Home/Home";
import AllService from "../Pages/Home/Services/AllService/AllService";
import Login from "../Pages/Login/Login";
import OrderReview from "../Pages/Orders/OrderReview";
import Orders from "../Pages/Orders/Orders";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


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
        {
            path:'/login',
            element: <Login></Login>
            
        },
        {
            path:'/signup',
            element: <SignUp></SignUp>
            
        },
        {
            path:'/checkout/:id',
            element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
            loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
            
        },
        {
            path:'/orders',
            element: <PrivateRoute><Orders></Orders></PrivateRoute>
            
        },
        {
            path:'/service',
            element: <AllService></AllService>
            
        },
        {
            path:'/orders',
            element: <OrderReview></OrderReview>
            
        },
      ]
    },
    {
        path:'*',
        element: <div className='text-center text-5xl text-red-600 mt-4 '>This Page Not Found <span className='text-blue-600 text-sm'><Link to='/home'>click Home</Link></span>
        </div>
      }
  ]);