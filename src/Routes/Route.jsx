import {
    createBrowserRouter,
} from "react-router-dom";
import HomeLayOut from "../LayOut/HomeLayOut";
import Home from "../Components/Pages/Home/Home";
import AuthLayout from "../LayOut/AuthLayout";
import Login from "../Components/Pages/Auth/Login";
import Register from "../Components/Pages/Auth/Register";
import NotFound from "../Components/NotFound/NotFound";
import Profile from "../Components/Pages/Profile/Profile";
import PrivateRoutes from "./PrivateRoutes";
import AdventureDetails from "../Components/Pages/AdventureDetails";

const Route = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayOut></HomeLayOut>,
        errorElement: <NotFound></NotFound>,
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
    },
    {
        path: "/profile",
        element: <PrivateRoutes><Profile></Profile></PrivateRoutes>
    },
    {
        path: "plan/:ID",
        element: <PrivateRoutes><AdventureDetails></AdventureDetails></PrivateRoutes>,
        loader: () => fetch("/data.json")
    }
]);

export default Route;