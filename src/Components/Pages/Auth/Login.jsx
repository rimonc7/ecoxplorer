import { useContext, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";


const Login = () => {

    const { userLogin, signUpGmail } = useContext(AuthContext)
    const navigate = useNavigate();
    const [showPass, SetShowPass] = useState(false)


    const handleLogin = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        userLogin(email, password)
            .then(result => {
                console.log(result.user)
                e.target.reset()
                navigate("/")
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    const handleSignUpGmail = () => {
        signUpGmail()
            .then((result) => {
                console.log(result.user)
                navigate("/")
            })
            .catch(error => {
                console.log(error.message)
            })

    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="card bg-white w-full max-w-sm rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold text-center text-gray-700">Login</h2>
                <form onSubmit={handleLogin} className="space-y-4 mt-4">
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
                        <label className="input input-bordered flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    fillRule="evenodd"
                                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                    clipRule="evenodd" />
                            </svg>
                            <input type={showPass ? "text" : "password"} name="password" className="grow" />
                            <button onClick={() => SetShowPass(!showPass)} >
                                {
                                    showPass ? <FaEyeSlash /> : <FaEye />

                                }
                            </button>
                        </label>
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover text-blue-500">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-4">
                        <button className="btn btn-primary w-full bg-green-400 border-none text-white rounded-lg py-2 hover:bg-[#87CEEB]">
                            Login
                        </button>
                    </div>
                </form>
                <div className="divider my-4 text-gray-500">OR</div>
                <div className="form-control">
                    <button
                        onClick={handleSignUpGmail}
                        className="btn btn-outline flex items-center justify-center w-full border-gray-300 rounded-lg py-2 hover:bg-gray-100"
                    >
                        <FcGoogle className="text-xl mr-2" /> Login with Google
                    </button>
                </div>

                <p className="text-center text-gray-500 mt-4 text-sm">
                    New user?{" "}
                    <Link to="/auth/register" className="text-blue-500 hover:underline">
                        Create an account
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;