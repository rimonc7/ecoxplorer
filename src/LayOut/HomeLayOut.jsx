import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Nav from "../Components/Nav";

const HomeLayOut = () => {
    return (
        <div>
            <header className="w-11/12 mx-auto">
                <nav>
                    <Nav></Nav>
                </nav>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayOut;