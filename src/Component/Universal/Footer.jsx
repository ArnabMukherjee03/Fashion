import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";
const Footer = () =>{
    return(
        <div className="site-footer" style={{background: "#e0e2e0"}}>
        <div className="container">
        <div className="row">
        <div className="col-lg-2 col-md-2">
        <div className="widget">
        <h3>Help</h3>
        <ul className="list-unstyled">
        <li><NavLink className="footerLink">Contact us</NavLink></li>
        <li><NavLink className="footerLink">Account</NavLink></li>
        <li><NavLink className="footerLink">Shipping</NavLink></li>
        <li><NavLink className="footerLink">Returns</NavLink></li>
        <li><NavLink className="footerLink">FAQ</NavLink></li>
        </ul>
        </div>
        </div>
        <div className="col-lg-2 col-md-2">
        <div className="widget">
        <h3>About</h3>
        <ul className="list-unstyled">
        <li><NavLink className="footerLink">About us</NavLink></li>
        <li><NavLink className="footerLink">Press</NavLink></li>
        <li><NavLink className="footerLink">Careers</NavLink></li>
        <li><NavLink className="footerLink">Team</NavLink></li>
        <li><NavLink className="footerLink">FAQ</NavLink></li>
        </ul>
        </div>
        </div>
        <div className="col-lg-2 col-md-2">
        <div className="widget">
        <h3>Shop</h3>
        <ul className="list-unstyled">
        <li><NavLink className="footerLink">Store</NavLink></li>
        <li><NavLink className="footerLink">Gift Cards</NavLink></li>
        <li><NavLink className="footerLink">Student Discount</NavLink></li>
        </ul>
        </div>
        </div>
        <div className="col-lg-6 col-md-6">
        <div className="widget">
        <h3>Join our list and receive exclusives</h3>
        <form action="#" className="subscribe">
        <div className="d-flex">
        <input type="email" className="form-control" placeholder="Email address" />
        <input type="submit" className="btn btn-black" value="Subscribe" style={{borderRadius:"0px"}} />
        </div>
        </form>
        </div>
        </div>
        </div>
        </div> 
        </div>
    )
}

export default Footer;