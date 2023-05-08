import React, { useContext} from "react";
import { NavLink, useParams } from "react-router-dom";

import { CartContext } from "../../Context/cartContext";
import "./AllProducts.css";
import { TypeProductContext } from "../../Context/TypeProductContext";
const AllProducts = () =>{
    const{type} = useParams();
    const{addToCart} =  useContext(CartContext);
    const{filteredProducts,useItem,setProductType,men,women,Jewlery,acc} = useContext(TypeProductContext);
    setProductType(type);
    return(
        <div className="co-section">
        <div className="container">
        <div className="row align-items-center mb-5">
        <div className="col-lg-8">
        <h2 className="mb-3 mb-lg-0">Shop / {type}</h2>
        </div>
        <div className="col-lg-4">
        <div className="d-flex sort align-items-center justify-content-lg-end">
        <strong className="me-3">Sort by:</strong>
        <form action="#">
        <select className="" >
        <option value="">Newest Items</option>
        <option value="1">Best Selling</option>
        <option value="2">Price: Ascending</option>
        <option value="2">Price: Descending</option>
        <option value="3">Rating(High to Low)</option>
        </select>
        </form>
        </div>
        </div>
        </div>
        <div className="row">
        <div className="col-md-3">
        <ul className="list-unstyled categories">
        <li><NavLink style={{color:"#000000",textDecoration:"none"}} to="/product/Men">Men <span>{men}</span></NavLink></li>
        <li><NavLink style={{color:"#000000",textDecoration:"none"}} to="/product/Women">Women <span>{women}</span></NavLink></li>
        <li><NavLink style={{color:"#000000",textDecoration:"none"}} to="/product/Jewelery">Jewelries <span>{Jewlery}</span></NavLink></li>
        <li><NavLink style={{color:"#000000",textDecoration:"none"}} to="/product/Accessories">Accessories <span>{acc}</span></NavLink></li>
        </ul>
        </div>
        <div className="col-md-9 mt-5 mt-lg-0">
        <div className="row">
        {
            filteredProducts.map((item) =>{
                let id = item.id;
                const product = useItem.find(item =>{
                    return item.id === parseInt(id);
                }) 
                return(
                    <div className="col-6 col-sm-6 col-md-6 mb-4 col-lg-4">
                    <div className="product-item">
                    <div className="product-img">
                    <img src={item.image} alt="" className="img-fluid"/>
                    <div onClick={()=>addToCart(product,id)} className="addCart d-flex align-items-center justify-content-center">
                         <i className="fa-solid fa-bag-shopping"></i>
                    </div>
                    </div>
                    <h3 className="title"><NavLink to={`/productdetails/${item.id}`} style={{color:"#000000",textDecoration:"none"}}>{item.title}</NavLink></h3>
                    { type !== "Accessories"  ?
                    <div className="price">
                    <del>${item.price}</del> — <span>${parseFloat(item.price - item.price*30/100).toFixed(2)}</span>
                    </div>
                    : 
                    <div className="price">
                    ${item.price}
                    </div>
                    }
                    </div>
                    </div>
                )
            })
        }
        </div>
        </div>
        </div>
        </div>
        </div>
    )
}

export default AllProducts;