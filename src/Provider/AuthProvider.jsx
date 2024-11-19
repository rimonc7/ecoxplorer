import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from "../Firebase/firebase.config";

export const AuthContext = createContext(null)

const auth = getAuth(app);

const GoogleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(true)

    const createUser = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const userLogin = (email, password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoader(true);
        return signOut(auth)
    }

    const signUpGmail = () => {
        setLoader(true);
       return signInWithPopup(auth, GoogleProvider)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                console.log("Currently Logged User:", currentUser);
                setUser(currentUser);
            } else {
                console.log("No user logged in");
                setUser(null);
            }
            setLoader(false);
        });

        return () => unsubscribe();
    }, []);



    const authInfo = {
        createUser,
        userLogin,
        logOut,
        user,
        loader,
        auth,
        signUpGmail
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>

    );
};

export default AuthProvider;