import React, { createContext, useContext, useEffect, useState } from "react";

import {ProductContext} from "./ProductContext";





export const TypeProductContext = createContext();


const TypeProductProvider = ({children}) =>{
    const[productType,setProductType] = useState("none");
    const {products,Accessories} = useContext(ProductContext);
    const[filteredProducts,setFilteredProducts] = useState([]);
    const[useItem,setUseItem] = useState([]);
    const[men,setMen] = useState(0);
    const[women,setWomen] = useState(0);
    const[Jewlery,setJewlery] = useState(0);
    const[acc,setAcc] = useState(0);

      const menItem = products.filter(item =>{
      return item.category === "men's clothing"
      });
      const womenItem = products.filter(item =>{
        return item.category === "women's clothing"
        });
      const Jewelery = products.filter(item =>{
            return item.category === "jewelery"
        });

      useEffect(()=>{
        setMen(menItem.length)
        setAcc(Accessories.length)
        setJewlery(Jewelery.length)
        setWomen(womenItem.length)
      },[menItem,womenItem,Jewelery,Accessories])
       
        useEffect(()=>{
            if(productType ===  "Men"){
            const filteredProduct = products.filter(item =>{
                return item.category === "men's clothing"
            })
            setFilteredProducts(filteredProduct);
            setUseItem(products);
        }else if(productType ===  "Women"){
            const filteredProduct = products.filter(item =>{
                return item.category === "women's clothing"
            })
            setFilteredProducts(filteredProduct);
            setUseItem(products);
        }else if(productType === "Jewelery"){
            const filteredProduct = products.filter(item =>{
                return item.category === "jewelery"
            })
            setFilteredProducts(filteredProduct);
            setUseItem(products);
          
        }else{
            setUseItem(Accessories);
            setFilteredProducts(Accessories);
        }
        },[products,productType,Accessories]);


    return<TypeProductContext.Provider value={{filteredProducts,useItem,setProductType,men,women,Jewlery,acc}}>{children}</TypeProductContext.Provider>
}


export default TypeProductProvider;