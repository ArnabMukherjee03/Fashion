import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import Accessories from "../ProductsList/Accessories";

export const ProductContext = createContext();

const ProductProvider = ({children})=>{
    const[products, setProducts] = useState([]);
    const[loading,setLoading] = useState(false);

    

    useEffect(()=>{
        const fetchProducts = async () => {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            setLoading(true)
            setProducts(data);
        };
        fetchProducts();
    },[]);
   
    return (
        <ProductContext.Provider value={{products,Accessories,loading}}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductProvider;