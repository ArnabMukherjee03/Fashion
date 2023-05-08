import React, { useContext } from "react";
import { ProductContext } from "../../Context/ProductContext";
import { CartContext } from "../../Context/cartContext";
import { NavLink } from "react-router-dom";

const Product = () =>{
    const{addToCart} =  useContext(CartContext);
    const {products} = useContext(ProductContext);
    const filteredProducts = products.filter(item =>{
        return item.category === "men's clothing" || item.category === "women's clothing" 
    })
   
    console.log(filteredProducts);
    return(
        <div className="co-section py-4 bg-light">
           <div className="co-section">
                <div className="container">
                     <div className="row">
                        
                            {
                                filteredProducts.slice(0,6).map(item =>{
                                           let id = item.id;
                                            const product = products.find(item =>{
                                                return item.id === parseInt(id);
                                            }) 
                                    
                                    return(
                                        
                                        <div className="col-6 col-sm-6 col-md-6 mb-4 col-lg-4">
                                        <div className="product-item ">
                                            
                                            <div className="product-img">
                                            <span className="custom-badge new">New</span>
                                              <img src={item.image} className="img-fluid" alt="" />
    
                                              <div onClick={()=>addToCart(product,id)} className="addCart d-flex align-items-center justify-content-center">
                                              <i className="fa-solid fa-bag-shopping"></i>
                                              </div>
                                             
                                            </div>
                                            <h3 className="title text-center"><NavLink to={`/productdetails/${item.id}`} style={{color:"#000000",textDecoration:"none"}}>{item.title}</NavLink></h3>
                                            <div className="price">
                                              <del>${item.price}</del> — <span>${item.price - item.price*30/100}</span>
                                              </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        
                     </div>
                </div>
           </div>
        </div>
    )
}

export default Product;