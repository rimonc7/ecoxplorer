import { useContext, useRef } from "react";
import Footer from "../../Footer";
import Nav from "../../Nav";
import { AuthContext } from "../../../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
    const { errorMessage, setErrorMessage, auth } = useContext(AuthContext);
    const nameRef = useRef()
    const photoRef = useRef()
    const navigate = useNavigate();

    const handleUpdate = (e) => {
        e.preventDefault()
        setErrorMessage("")
        const name = nameRef.current.value;
        const photo = photoRef.current.value;

        updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        }).then(() => {
            alert("Profile Updated")
            navigate("/")
        }).catch((error) => {
            setErrorMessage(error.message)
        });
    }
    return (
        <div>
            <header className="w-11/12 mx-auto">
                <nav>
                    <Nav />
                </nav>
            </header>
            <main>
                <div className="min-h-screen flex items-center justify-center bg-gray-100">
                    <div className="card bg-white w-full max-w-md rounded-lg shadow-lg p-8">
                        <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">
                            Update Your Profile
                        </h2>

                        <form onSubmit={handleUpdate} className="space-y-4">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-gray-600">Your Name</span>
                                </label>
                                <input
                                    ref={nameRef}
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
                                    ref={photoRef}
                                    name="photo"
                                    placeholder="Enter a photo URL"
                                    className="input input-bordered w-full border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
                                    required
                                />
                            </div>

                            <div className="form-control mt-4">
                                <button
                                    type="submit"
                                    className="btn btn-primary w-full border-none bg-green-400 text-white rounded-lg py-2 hover:bg-[#87CEEB]"
                                >
                                    Update your Profile
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
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default UpdateProfile;