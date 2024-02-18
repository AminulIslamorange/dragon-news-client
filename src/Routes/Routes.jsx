import { createBrowserRouter } from "react-router-dom"
import Root from "../layouts/Root"
import Home from "../Pages/Home/Home"
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register/Register";
import News from "../Pages/News/News";
import PrivetRoutes from "./PrivetRoutes";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        
        children: [
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch('/news.json')
            },
            {
                path:'/news/:id',
                element:<PrivetRoutes><News></News></PrivetRoutes>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]  
     }

])
export default router;