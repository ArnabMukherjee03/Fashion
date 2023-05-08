import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
// Import CartItem
import CartItem from "./CartItem";
// Import Css
import "./sidebar.css"
//  import sidebar context
import {SidebarContext} from "../../Context/SidebarContext";
// Import Cart Context
import { CartContext } from "../../Context/cartContext";

const Cart = () =>{
    const{ isOpen, handleClose} = useContext(SidebarContext);
    const{cart,clearCart,itemAmount,total} = useContext(CartContext);
    return(
        <div className={`${isOpen ? 'right-0' : 'full'} sidebar`}>
          <div className="d-flex align-items-center justify-content-between cartUpper">
            <div className="d-flex align-items-center justify-content-center h3 text-uppercase">shopping bag ({itemAmount})</div>
            <div onClick={handleClose} className="d-flex align-items-center justify-content-center" style={{height:"2rem!important", width:"2rem!important",cursor:"pointer"}}>
            <i className="fa-solid fa-arrow-right"></i>
            </div>
          </div>
          <div className="cartScroll d-flex flex-column">{
            cart.map(item =>{
                return <CartItem item={item} key={item.id}/>;
            })
          }</div>
          <div className="d-flex flex-column py-2 mt-2" style={{rowGap:"0.75rem"}}>
            <div className="d-flex justify-content-between align-items-center" style={{width:"100%"}}>
               <div className="text-uppercase " style={{fontWeight:"700",fontSize:"0.8rem"}}>
                   <span className="me-2">Total:</span>$ {parseFloat(total).toFixed(2)}
               </div>
               {/* TrashIcon */}
               <div onClick={()=> clearCart()} className="py-4 d-flex justify-content-center align-items-center" style={{cursor:"pointer",fontSize: "0.875rem",lineHeight:"1.25rem",color:"#fff",background:"rgb(239 68 68)",width:"3rem",height:"3rem"}}>
               <i className="fa-solid fa-trash"></i>
               </div>
            </div>
          </div>
        </div>
    )
}

export default Cart;