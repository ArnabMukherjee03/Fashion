import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./CartItem.css";

import { CartContext } from "../../Context/cartContext";

const CartItem = ({item})=>{
    const{removeFromCart,increase,decrease} = useContext(CartContext);
    // Destructure item
    const{id,title,image,price,amount} = item;
    
    return(
       <div className="d-flex " style={{columnGap:"1rem",borderBottom:"1px solid rgb(107 114 128)",color: "rgb(107 114 128)"}}>
       <div className="innerCart d-flex align-items-center ">
        {/* Image */}
        <NavLink to={`productdetails/${id}`}>
        <img src={image} className="cartImg" alt="" />
        </NavLink>
        {/* title and removeicon */}
        <div className="d-flex flex-column " style={{width:"100%"}}>
        <div className="d-flex justify-content-between" style={{marginBottom:"0.5rem",gap:"20px"}}>
         <NavLink className="cartItemHead" to={`productdetails/${id}`}>{title}</NavLink>
        <div onClick={()=> removeFromCart(id)} style={{fontSize: "1.25rem!important", cursor:"pointer"}}>
             <i className="fa-solid fa-trash" style={{color: "red"}}></i>
        </div>
        </div>
        <div className="d-flex" style={{gap: "0.5rem",height:"36px",fontSize: "0.875rem",lineHeight:"1.25rem"}}>
        {/* Quantity */}
        <div className="d-flex flex-1 align-items-center  " style={{width:"100px!important",border:"1px solid #000",height:"100%",fontWeight:"600"}}>
            {/* minus icon */}
            <div onClick={()=> decrease(id)} className="flex-1 d-flex justify-content-center align-items-center" style={{height:"100%",cursor:"pointer"}}><i className="fa-solid fa-minus"></i></div>
            {/* amount */}
            <div className="d-flex justify-item-center align-items-center" style={{height:"100%",paddingInline:"0.5rem"}}>{amount}</div>
            {/* plusicon */}
            <div onClick={()=> increase(id)} className="flex-1 d-flex justify-content-center align-items-center" style={{height:"100%",cursor:"pointer"}}><i className="fa-solid fa-plus"></i></div>
        </div>
        {/* Price */}
        <div className="flex-1 d-flex justify-content-around align-items-center">$ {price}</div>
        {/* Final Price */}
        <div className="flex-1 d-flex justify-content-end align-items-center " style={{fontSize:"600",color:"#000"}}>{`$ ${parseFloat(price * amount).toFixed(2)}`}</div>
        </div>
        </div>
       </div>
       </div>
    )
}


export default CartItem;