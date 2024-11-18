import { useContext, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
    const { createUser } = useContext(AuthContext)
    const [errorMessage, setErrorMessage] = useState("");
    // const [showPass, SetPass] = useState(false)
    const navigate = useNavigate()

    const handleCreateUser = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        setErrorMessage("")

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

        if (!passwordRegex.test(password)) {
            setErrorMessage("Password must be at least 6 characters long and contain at least one uppercase letter, one lowercase letter, and one special character.");
            return;
        }


        if (password.length < 6) {
            setErrorMessage('Password should longer than 6 characters')
            return
        }

        createUser(email, password)
            .then(result => {
                console.log(result.user)
                navigate("/")

            })
            .catch(error => {
                alert(error.message)
            })
    }


    return (
        <div>
            <h2 className="text-2xl font-bold text-center mt-12">Register Your Account</h2>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto my-10">
                <form onSubmit={handleCreateUser} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input type="text" placeholder="name" name="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" placeholder="photo url" name="photo" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                        <label className="label">
                            <p className="text-xs">Already Have an Account? <Link to="/auth/login" className=" text-green-400"> Login Here</Link></p>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Create Profile</button>
                    </div>
                </form>
                <div className="m-3">
                    {
                        errorMessage && <p className="text-red-500">{errorMessage}</p>
                    }
                </div>

            </div>
        </div>

    );
};

export default Register;