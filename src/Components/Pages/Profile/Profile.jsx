import { useContext } from "react";
import Footer from "../../Footer";
import Nav from "../../Nav";
import { FaUserEdit } from 'react-icons/fa';
import { AuthContext } from "../../../Provider/AuthProvider";

const Profile = () => {
    const { user } = useContext(AuthContext)
    return (
        <div>
            <header className="w-11/12 mx-auto">
                <nav>
                    <Nav />
                </nav>
            </header>
            <main>
                <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg my-12">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-semibold text-gray-800">
                            Welcome, <span className="text-[#87CEEB]">{user.displayName}</span>!
                        </h1>
                    </div>

                    <div className="flex items-center justify-center space-x-8">
                        <img
                            src={user.photoURL}
                            alt="Profile"
                            className="w-36 h-36 rounded-full border-4 border-gray-200 shadow-lg"
                        />
                        <div className="text-lg text-gray-700">
                            <p><strong>Name:</strong> {user.displayName}</p>
                            <p><strong>Email:</strong> {user.email}</p>
                        </div>
                    </div>

                    <div className="mt-8 text-center">
                        <a
                            href="/update-profile"
                            className="flex items-center justify-center px-6 py-2 bg-green-400 text-white rounded-lg hover:bg-[#87CEEB] transition duration-200"
                        >
                            <FaUserEdit className="mr-2" />
                            Update Profile
                        </a>
                    </div>
                </div>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default Profile;