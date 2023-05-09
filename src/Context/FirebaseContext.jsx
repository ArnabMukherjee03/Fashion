import React, { createContext, useEffect, useState } from "react";

import { initializeApp } from "firebase/app";
import {getAuth,createUserWithEmailAndPassword,onAuthStateChanged} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const firebaseConfig = {
    apiKey: "AIzaSyAw9_NhoPNRp4Tw-gExR7B1d3IjF9J2M0k",
    authDomain: "fashion-2b963.firebaseapp.com",
    projectId: "fashion-2b963",
    storageBucket: "fashion-2b963.appspot.com",
    messagingSenderId: "103157323795",
    appId: "1:103157323795:web:1697bd1c7327f7a19f87e6",
    measurementId: "G-V97FEZS7VT",
  };


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(app);




export const FirebaseContext = createContext();


const FirebaseProvider = ({children}) =>{
    const navigate = useNavigate();
    const[user,setUser] = useState(null);

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
            console.log(err);
        })
    }
    return<FirebaseContext.Provider value={{SignUpWithEmailPassword,user}}>{children}</FirebaseContext.Provider>
}

export default FirebaseProvider;