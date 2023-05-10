import React, { createContext, useEffect, useState } from "react";

import { initializeApp } from "firebase/app";
import {getAuth,createUserWithEmailAndPassword,onAuthStateChanged, signInWithEmailAndPassword,signOut} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId:  process.env.REACT_APP_PROJECT_ID,
    storageBucket:  process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId:  process.env.REACT_APP_MESSEAGING_SENDER_ID,
    appId:  process.env.REACT_APP_API_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID,
  };


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(app);




export const FirebaseContext = createContext();


const FirebaseProvider = ({children}) =>{
    const navigate = useNavigate();
    const[user,setUser] = useState(null);
    const[err,setErr] = useState("");

    useEffect(()=>{
        onAuthStateChanged(firebaseAuth, user => {
            if(user){
                setUser(user);
            }else{
                setUser(null)
            }
        })
    },[]);

    const SignUpWithEmailPassword = (gmail,password) =>{
        createUserWithEmailAndPassword(firebaseAuth,gmail,password)
        .then(res => {
            console.log(res);
            navigate("/")
        }).catch(err =>{
            setErr(err);
        })
    }
    const SignInWithEmail = (email,password)=>{
        signInWithEmailAndPassword(firebaseAuth,email,password)
        .then(res =>{
            console.log(res)
        })
        .catch(err => setErr(err));
    }

    const isLoggedIn = user ? true : false
    return<FirebaseContext.Provider value={{SignUpWithEmailPassword,isLoggedIn,SignInWithEmail,err,setErr,signOut,firebaseAuth}}>{children}</FirebaseContext.Provider>
}

export default FirebaseProvider;