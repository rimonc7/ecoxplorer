import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
    const { loader, user } = useContext(AuthContext)

    if (loader) {
        return <span className="loading loading-infinity loading-lg"></span>
    }
    if (user) {
        return children;
    }
    return (

        <Navigate to="/auth/login" ></Navigate>
    );
};

export default PrivateRoutes;