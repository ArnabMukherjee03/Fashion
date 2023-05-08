import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import ClipLoader from "react-spinners/ClockLoader";
import Star from "../Star/Star";

// import cartcontext

import { CartContext } from "../../Context/cartContext";

// import css
import "./SingleProduct.css";

import {ProductContext} from "../../Context/ProductContext";

const SingleProduct = () =>{
    // Get the product id from the url
    const{id} = useParams();

    window.scroll(0,0);

    const{products,Accessories} = useContext(ProductContext);
    const{addToCart} =  useContext(CartContext);

    // Get the Single Product based on id
    let product;
    
    id <=20 ?
        product = products.find(item =>{
        return item.id === parseInt(id);
    }) 
    :
        product = Accessories.find(item =>{
        return item.id === parseInt(id);
    }) 
    


    if(!product){
        return <section className="d-flex loading justify-content-center align-items-center"> <ClipLoader
        color="#0fb78d"
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      </section>
    }

    
    // destructure product

    const {title, price, description , image , rating} = product;

    const {rate} = rating;


    return(
        <section className="singleproduct  d-flex align-items-center  ">
            <div className="container  mx-auto">
            <div className="d-flex flex-column flex-lg-row align-items-center ">
                <div className="productimage flex-1">
                    <img src={image} className="accessoriesImage" alt="" srcset="" />
                </div>
                <div className="flex-1 producttext">
                    <h1 className="mx-auto mx-lg-0">{title}</h1>
                    <div className="d-flex flex-column flex-lg-row priceDiv">
                    <div className="price">
                        $ {price}
                    </div>
                    <Star rate={rate}/>
                    </div>
                    <p className="">
                        {description}
                    </p>
                    <button onClick={()=> addToCart(product,id)} className=" ">Add To Cart</button>
                </div>
            </div>
            </div>
        </section>
    )
}

export default SingleProduct;