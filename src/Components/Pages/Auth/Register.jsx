import { useContext, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";


const Register = () => {
    const { createUser } = useContext(AuthContext)
    const [errorMessage, setErrorMessage] = useState("");
    // const [showPass, SetPass] = useState(false)
    const navigate = useNavigate()

    const handleCreateUser = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        setErrorMessage("");

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

        if (!passwordRegex.test(password)) {
            setErrorMessage("Password must be at least 6 characters long and contain at least one uppercase letter, one lowercase letter, and one special character.");
            return;
        }

        createUser(email, password)
            .then(result => {
                const user = result.user;
                return updateProfile(user, {
                    displayName: name,
                    photoURL: photo
                });
            })
            .then(() => {
                navigate("/");
            })
            .catch(error => {
                alert(error.message);
            });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="card bg-white w-full max-w-md rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">
                    Register Your Account
                </h2>

                <form onSubmit={handleCreateUser} className="space-y-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-gray-600">Your Name</span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            className="input input-bordered w-full border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
                            required
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-gray-600">Photo URL</span>
                        </label>
                        <input
                            type="text"
                            name="photo"
                            placeholder="Enter a photo URL"
                            className="input input-bordered w-full border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
                            required
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-gray-600">Email</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            className="input input-bordered w-full border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
                            required
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-gray-600">Password</span>
                        </label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter a secure password"
                            className="input input-bordered w-full border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
                            required
                        />
                        <label className="label mt-2">
                            <p className="text-sm text-gray-500">
                                Already have an account?{" "}
                                <Link to="/auth/login" className="text-blue-500 hover:underline">
                                    Login Here
                                </Link>
                            </p>
                        </label>
                    </div>

                    <div className="form-control mt-4">
                        <button className="btn btn-primary w-full border-none bg-green-400 text-white rounded-lg py-2 hover:bg-[#87CEEB]">
                            Create Profile
                        </button>
                    </div>
                </form>
                {errorMessage && (
                    <div className="mt-4 text-center">
                        <p className="text-red-500">{errorMessage}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Register;