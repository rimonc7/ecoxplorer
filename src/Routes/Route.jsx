import {
    createBrowserRouter,
} from "react-router-dom";
import HomeLayOut from "../LayOut/HomeLayOut";
import Home from "../Components/Pages/Home/Home";
import AuthLayout from "../LayOut/AuthLayout";
import Login from "../Components/Pages/Auth/Login";
import Register from "../Components/Pages/Auth/Register";

const Route = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayOut></HomeLayOut>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            }
        ]
    },
    {
        path: "/auth",
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: "/auth/login",
                element: <Login></Login>
            },
            {
                path: "/auth/register",
                element: <Register></Register>
            }
        ]
    }
]);

export default Route;