import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Nav = () => {

    const { user, logOut } = useContext(AuthContext)
    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log('user SignOut')
                navigate('/');
            })
            .catch((error) => {
                console.log(error.message)
            })
    }

    const links = <div className="space-x-3">
        <NavLink to="/" className="btn bg-green-400 text-white">Home</NavLink>
        <NavLink to="/adventure-type" className="btn bg-green-400 text-white ">Adventure Types</NavLink>
        {
            user ? (
                <>
                    <NavLink to="/update-profile" className="btn bg-green-400 text-white">Update Profile</NavLink>
                    <NavLink to="/profile" className="btn bg-green-400 text-white">My Profile</NavLink>
                    <NavLink onClick={handleLogOut} to='/logout' className="btn bg-green-400 text-white">Logout</NavLink>
                </>
            ) : (
                <>
                    <NavLink to="/auth/register" className="btn bg-green-400 text-white">Register</NavLink>
                    <NavLink to="/auth/login" className="btn bg-green-400 text-white">Login</NavLink>
                </>
            )
        }

    </div>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-2xl font-bold text-green-400">EcoXplorer</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {user && <p>{user?.email}</p>}
                <img
                    className="w-12 h-12 rounded-full"
                    src="https://i.ibb.co/SfM33jM/Virat.jpg"
                    alt="User Avatar"
                    title={user?.displayName || "User"}
                />
            </div>

        </div>
    );
};

export default Nav;