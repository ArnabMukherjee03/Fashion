import React, { useContext, useEffect, useState } from "react";
import { FirebaseContext } from "../../Context/FirebaseContext";



const Signup = ()=>{
    const{SignUpWithEmailPassword}=useContext(FirebaseContext);
    const[val,setVal] = useState(false);
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');
    const[confirmPassword,setConfirmPassword] = useState('');

    console.log(email,password)

    useEffect(()=>{
        if(password === confirmPassword){
            setVal(true);
        }else{
            setVal(false)
        }
    },[password,confirmPassword])
    

    return(
        <>
            <div className="Sign" style={{minHeight:"180px"}}>
                <div className="container">
                    <div className="row align-items-end" style={{minHeight:"180px"}}>
                        <div className="col-lg-7 mx-auto">
                        <div className="logo text-center">
                          <p className="brand" style={{fontSize:"14px"}}>Fashion</p>
                          <p className="brand mt-2" style={{fontSize:"10px"}}>Create Your Account</p>
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
                       <input type="password" onChange={e => setConfirmPassword(e.target.value)} value={confirmPassword} placeholder="Confirm Password" />
                       <button type="submit" onClick={()=>{val ?  SignUpWithEmailPassword(email,password) : alert("Password Not Matched")}} className="signBtn">Create Account</button>
                   </div>
               </div>
            </div>
            </div>
        </>
    )
}

export default Signup;

