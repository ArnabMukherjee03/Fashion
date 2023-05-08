import React from "react";
import { NavLink } from "react-router-dom";
// import Deal_bg from "../../Image/hero_bg_1.jpg.webp";

const Deal = ()=>{
    return(
        <div className="container">
          <div className="deal-hero">
             <div className="deal-contents">
             <span className="subtitle">Limited Offers 20% OFF</span>
             <h2 className="title">Week Deal</h2>
             <p className="mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus dignissimos facilis neque nulla earum.</p>
             <NavLink className="btn btn-black mt-2">Shop Now</NavLink>
             </div>
          </div>
        </div>
    )
}

export default Deal;