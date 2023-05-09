import React from "react";
import "./Contact.css";
import { NavLink } from "react-router-dom";
const Contact = () =>{
    return(
        <> 
        <div className="page-heading bg-light">
        <div className="container">
        <div className="row align-items-end">
        <div className="col-lg-7">
        <h1>Contact Us</h1>
        <h5 className="mb-4" style={{fontSize: "16px"}}><NavLink to="/" style={{color:"#000",textDecoration:"none"}}>Home</NavLink> / <strong>Contact</strong></h5>
        </div>
        </div>
        </div>
        </div>
        <div className="co-section">
        <div className="container">
        <div className="row mb-5">
        <div className="col-lg-4 mb-5 order-2 mb-lg-0 ">
        <div className="contact-info">
        <div className="address mt-5 mt-lg-4">
        <i class="fa-solid fa-location-dot"></i>
        <h4 className="mb-2">Location:</h4>
        <p>Durgapur, WestBengal, India</p>
        </div>
        <div className="open-hours mt-4">
        <i class="fa-regular fa-clock"></i>
        <h4 className="mb-2">Open Hours:</h4>
        <p>
        Sunday-Friday:<br/>
        11:00 AM - 2300 PM
        </p>
        </div>
        <div className="email mt-4">
        <i class="fa-solid fa-envelope"></i>
        <h4 className="mb-2">Email:</h4>
        <p>info@Product</p>
        </div>
        <div className="phone mt-4">
        <i class="fa-solid fa-phone"></i>
        <h4 className="mb-2">Call:</h4>
        <p>+91 1234 567891</p>
        </div>
        </div>
        </div>
        <div className="col-lg-7 me-auto order-1" >
        <form action="#">
        <div className="row">
        <div className="col-6 mb-3">
        <input type="text" className="form-control" placeholder="Your Name"/>
        </div>
        <div className="col-6 mb-3">
        <input type="email" className="form-control" placeholder="Your Email" />
        </div>
        <div className="col-12 mb-3">
        <input type="text" className="form-control" placeholder="Subject" />
        </div>
        <div className="col-12 mb-3">
        <textarea name="" id="" cols="30" rows="7" className="form-control textArea" placeholder="Message"></textarea>
        </div>
        <div className="col-12">
        <input type="submit" value="Send Message" style={{background:"#0fb78d",border:"1px solid #0fb78d"}} className="btn btn-primary" />
        </div>
        </div>
        </form>
        </div>
        </div>
        </div>
        </div>
        </>
    )
}

export default Contact;