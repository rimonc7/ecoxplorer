import {
    createBrowserRouter,
} from "react-router-dom";
import HomeLayOut from "../LayOut/HomeLayOut";
import Home from "../Components/Pages/Home";

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
]);

export default Route;