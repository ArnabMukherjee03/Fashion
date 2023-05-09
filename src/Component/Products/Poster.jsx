import React from "react";
import Timer from "./Timer";
import "./Poster.css";
import { useParams } from "react-router-dom";
const Poster = ()=>{
    const{type}=useParams();
    return(
        <div className={
            `${type === 'Men' ?
               'productMenPoster'
               : type === 'Women' ?
               'productWomenPoster'
               : type === 'Accessories' ?
               'productAccPoster'
               :
               'productJewPoster'
            } productPoster posterHeight`
        }>
        
        {  type === "Accessories" ?
             <div className="posterContent">
             <h5 className="mb-2">The Stone Series</h5>
             <h1 className="mb-2" style={{color:"#624a2e",fontSize:"40px"}}>Great Leather Collection</h1>
             <h5>Select your New Perfect Style</h5>
             </div>
             : type !== "Jewelery" ?
             <div className="posterContent d-flex flex-lg-column flex-column-reverse">
             <div className="">
             <h5 className="mb-2">Discount</h5>
             <h1 className="mb-2">Summer 2023</h1>
             <h5>Sale <span style={{color: "#0fb78d"}}>30%</span></h5>
             </div>
             <div className="mt-4 mb-3 countDown">
             <Timer/>
             </div>
             </div>
             :
             <div className="posterJewContent">
             <h1 className="mb-2" style={{color:"#fff",fontSize:"40px"}}>Elegant & Timeless</h1>
             </div>


        }
        </div>

    )
}

export default Poster;