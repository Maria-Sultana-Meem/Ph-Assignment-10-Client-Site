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
import ViewDetails from "../pages/ViewDetails";
import Update from "../pages/Update";
import MyAddedJob from "../pages/MyAddedJob";


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
    Component:AllJobs,
   
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
   },
   {
    path:'/allJobs/:id',
    element:<PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
    
   },
   {
    path:'/updateJob/:id',
   element:<PrivateRoute><Update></Update></PrivateRoute>
   },
   {
    path:'/myAddedJob',
    element:<PrivateRoute><MyAddedJob></MyAddedJob></PrivateRoute>
   }




]
  },
]);
export default router
