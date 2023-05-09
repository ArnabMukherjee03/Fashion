import React from "react";
import { NavLink } from "react-router-dom";


const Carasoul = () =>{
    return(

        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="dot active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" className="dot" aria-label="Slide 2"></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active poster"  data-bs-interval="3000">
                    <div className="carousel-content d-flex align-items-start align-items-lg-center align-items-md-center justify-content-center">
                        <h4 className="subHead">Spring/Summer Collection 2023</h4>
                        <h1 className="Head mt-md-3 text-lg-center text-md-center">Get Upto 30% off on <span>New Arrivals</span></h1>
                        <NavLink to="/product/Men" className="mt-md-3 btn homeBtn">Shop Now</NavLink>
                    </div>
                  </div>
                  <div className="carousel-item poster" data-bs-interval="3000">
                    <div className="carousel-content d-flex align-items-start align-items-lg-center align-items-md-center justify-content-center">
                        <h4 className="subHead">Be Stylist</h4>
                        <h1 className="Head text-lg-center text-md-center"><span>Fashion</span> Changing Always</h1>
                        <NavLink to="/product/Women" className="btn homeBtn mt-3 mt-lg-0">Shop Now</NavLink>
                    </div>
                  </div>
                 
                </div>
            </div>
    )
}

export default Carasoul;