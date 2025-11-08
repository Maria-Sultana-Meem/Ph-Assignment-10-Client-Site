import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';


const AuthProvider = ({children}) => {
     const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
const googleProvider = new GoogleAuthProvider()

    //  create email passwrod sign up
    const creatUserWithEmailAndPasswordFunc=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    // update profile
     const updateProfileFunc = (displayName, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName,
      photoURL,
    })
  };
//   email password sign in
   const signInWithEmailAndPasswordFunc = (email, password) => {
   setLoading(false)
    return signInWithEmailAndPassword(auth, email, password);
  };
    // google sign in 

    const googleSignInFunc =()=>{
      setLoading(false);
    return signInWithPopup(auth,googleProvider)

    }

    // log out 
    const signoutUserFunc = () => {
      setLoading(false);
   
    return signOut(auth);
  };
    
    const authInfo={
    user,
    setUser,
    creatUserWithEmailAndPasswordFunc,
    updateProfileFunc,
    signInWithEmailAndPasswordFunc,
    googleSignInFunc,
   
    signoutUserFunc,
    loading,
    setLoading,
    }
    useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currUser) => {
      console.log(currUser);
      setUser(currUser);
      setLoading(false);
      ;
    });

    return () => {
      unsubscribe();
    };
  }, []);
    
    return <AuthContext value={authInfo}>{children}</AuthContext>
};

export default AuthProvider;
                                 