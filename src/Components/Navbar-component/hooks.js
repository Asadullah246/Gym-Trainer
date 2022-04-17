import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../Firebase.init";



const googleProvider=new GoogleAuthProvider()

const useFirebase = () => {
    const [user, setUser] = useState({})

    const signInWithGoogle = () => {
        signInWithPopup(googleProvider)
            .then(result => {
                setUser(result.user)
                console.log(result.user);
            })
    }
    const handleSignOut = () => { 
        signOut(auth)
    }
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user)
        })
    }, [])
    
    return {
        user,
        handleSignOut,
        signInWithGoogle
    }


}
export default useFirebase;