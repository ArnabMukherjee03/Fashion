import React from "react";
// Import Files
import Carasoul from "./Carasoul";
import CoSection from "./Cosection";
import Product from "./Product";
import Deal from "./Deal";
// CSS File
import "./Home.css"
const Home = () =>{
    return(
        <> 
         <Carasoul/>
         <CoSection/>
         <Product/>
         <Deal/>
        </>
    )
}

export default Home;