import React from "react";
import "./Sign.css";
import { NavLink } from "react-router-dom";
const SignIn = ()=>{
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
                       <input type="email" placeholder="E-mail" />
                       <input type="password" placeholder="Password" />
                       <button type="submit" className="signBtn">Log In</button>
                   </div>
                   <div className="col-lg-7 d-flex flex-column align-items-center justify-content-center mx-auto">
                        <p className="brand mt-3">need an account?</p>
                        <NavLink to="/signup" className="signBtn signUp mt-3 text-center" style={{textDecoration:"none"}}>Register</NavLink>
                   </div>
               </div>
            </div>
            </div>
        </>
    )
}

export default SignIn;

