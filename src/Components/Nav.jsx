import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { FaUserCircle } from "react-icons/fa";


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
        <NavLink to="/" className="btn bg-green-400 text-white">Home</NavLink>        {
            user ? (
                <>
                    <NavLink to="/update-profile" className="btn bg-green-400 text-white">Update Profile</NavLink>
                    <NavLink to="/profile" className="btn bg-green-400 text-white">My Profile</NavLink>
                    <button onClick={handleLogOut} className="btn bg-green-400 text-white">Logout</button>
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
                <Link to="/" className="btn btn-ghost hover:bg-transparent text-2xl font-bold text-green-400">EcoXplorer</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {user ? (
                    <img
                        className="w-12 h-12 rounded-full"
                        src={user?.photoURL}
                        alt=""
                        title={user?.displayName || "User"}
                    />
                ) : (
                    <p className="text-5xl"><FaUserCircle /></p>
                )}
            </div>
        </div>
    );
};

export default Nav;