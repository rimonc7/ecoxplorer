import { Outlet } from "react-router-dom";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";

const AuthLayout = () => {
    return (
        <div>
            <nav className="w-11/12 mx-auto">
                <Nav></Nav>
            </nav>
            <Outlet></Outlet>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default AuthLayout;