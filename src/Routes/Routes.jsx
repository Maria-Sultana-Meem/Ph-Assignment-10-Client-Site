import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";


import ErrorPage from "../ErrorPage/ErrorPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AllJobs from "../pages/AllJobs";
import AddJob from "../pages/AddJob";
import AcceptTasks from "../pages/AcceptTasks";
import PrivateRoute from "../privateRoute/PrivateRoute";


const router = createBrowserRouter([
  {
    path: "/",
   Component:MainLayout,
   errorElement:<ErrorPage></ErrorPage>,
   children:[{
        index:true,
        path:'/',
        Component:Home,
   },
   {
    path:'/allJobs',
    Component:AllJobs
   },
   {
    path:'/addJob',
    element:<PrivateRoute><AddJob></AddJob></PrivateRoute>
   },
   {
    path:'/acceptTask',
    element:<PrivateRoute><AcceptTasks></AcceptTasks></PrivateRoute>
   },
   
   {
    path:'/login',
    Component:Login
   },
   {
    path:'/register',
    Component:Register
   }




]
  },
]);
export default router
