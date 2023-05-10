import React, { useContext, useEffect, useState } from "react";
import "./Sign.css";
import { NavLink, useNavigate } from "react-router-dom";
import { FirebaseContext } from "../../Context/FirebaseContext";
const SignIn = ()=>{
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');

    const navigate = useNavigate();

    const{SignInWithEmail,err,isLoggedIn} = useContext(FirebaseContext);

    const handleClick = async () =>{
        
        await SignInWithEmail(email,password);
    }

    useEffect(()=>{
        if(isLoggedIn){
            navigate("/")
        }
    },[navigate,isLoggedIn])

    return(
        <>
            <div className="Sign" style={{minHeight:"180px"}}>
                <div className="container">
                    <div className="row align-items-end" style={{minHeight:"180px"}}>
                        <div className="col-lg-7 mx-auto">
                        <div className="logo text-center">
                          <p className="brand" style={{fontSize:"14px"}}>Fashion</p>
                          <p className="brand mt-2" style={{fontSize:"10px"}}>LOG IN TO YOUR ACCOUNT</p>
                         </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="formContainer">
            <div className="container">
               <div className="row">
                   <div className="col-lg-7 form-input d-flex flex-column align-items-center justify-content-center mx-auto">
                       <input type="email" onChange={e => setEmail(e.target.value)} value={email} placeholder="E-mail" />
                       <input type="password" onChange={e => setPassword(e.target.value)} value={password} placeholder="Password" />
                       <button type="submit" onClick={()=>{handleClick()}} className="signBtn">Log In</button>
                   </div>
                   <div className="col-lg-7 d-flex flex-column align-items-center justify-content-center mx-auto">
                        <p className="brand mt-3">need an account?</p>
                        <NavLink to="/signup" className="signBtn signUp mt-3 text-center" style={{textDecoration:"none"}}>Register</NavLink>
                        <p className="error mt-2 brand">{err}</p>
                   </div>
               </div>
            </div>
            </div>
        </>
    )
}

export default SignIn;

