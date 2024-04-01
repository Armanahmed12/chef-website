import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
export const AuthenticationData = createContext();

const AuthInfoProvider = ({children}) => {

     const [navBarIconCliked, setNavBarIconClicked]  = useState(false);
     const [user, setUser] = useState(null);
     const [loading, setLoading] = useState(true);
     const auth = getAuth(app);

    //  user log In
    const userLogIn = (email,password) =>{

       return signInWithEmailAndPassword(auth, email, password);

    }

    //   user log Out
  
      const userLogOut = () =>{
         
            return signOut(auth);
            
      }
 
    // create User With Email And Password 
    const createNewUser = (email,password) =>{

       return createUserWithEmailAndPassword(auth,email,password);

    }

    // Create New user with Google
    const googleProvider = new GoogleAuthProvider();
    const createUserWithGoogle = () =>{
        
        return signInWithPopup(auth, googleProvider);

    };

    // Create New user with Google
    const gitHubProvider = new GithubAuthProvider();
    const createUserWithGitHub = () =>{
        
        return signInWithPopup(auth, gitHubProvider);

    };

     // user profile info update
     const userInfoUndate = (userName,userPhotoUrl) =>{

        updateProfile(auth.currentUser,{

             displayName : userName,
             photoURL: userPhotoUrl
             
        }).then(() => {
         // Profile updated!
         // ...
       }).catch((error) => {
         // An error occurred
         // ...
       });
 }
 
   //  Reset password with your email address
   const resetPassword = (email) =>{

         return sendPasswordResetEmail(auth, email);
   }

  // observing the user after log In Or registering
  useEffect(()=>{
    
    const  unsubscribe = onAuthStateChanged(auth, (currentUser) =>{

           setUser(currentUser);
           setLoading(false);
           console.log(currentUser);
    });

    return () => unsubscribe();

  },[user]);

    const authInfo = {navBarIconCliked,setNavBarIconClicked, user,setUser, loading, createNewUser,createUserWithGitHub,createUserWithGoogle,userLogIn, userInfoUndate, resetPassword, userLogOut};
    return (
        <AuthenticationData.Provider value={authInfo}>
              {children}
        </AuthenticationData.Provider>
    );
};

export default AuthInfoProvider;