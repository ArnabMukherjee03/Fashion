import React, { useContext } from "react";
import { Routes , Route } from "react-router-dom";
// Import Links
import Nav from "./Component/Universal/Nav";
import Home from "./Component/Home/Home";
import About from "./Component/About/About";
import Contact from "./Component/Contact/Contact";
import Product from "./Component/Products/Product";
import Singleproduct from "./Component/SingleProduct/Singleproduct";
import Cart from "./Component/Cart/Cart";
import Footer from "./Component/Universal/Footer";

import ClipLoader from "react-spinners/ClockLoader";


import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { ProductContext } from "./Context/ProductContext";

const App = ()=>{
   const{loading} = useContext(ProductContext);
   return(
    <>
      <Nav/>
      <Routes>
         <Route path="/" Component={Home}></Route>
         <Route path="/about" Component={About}></Route>
         <Route path="/contact" Component={Contact}></Route>
         <Route path="/product/:type" Component={Product}></Route>
         <Route path="productdetails/:id" Component={Singleproduct}></Route>
      </Routes>
      <Cart/>
      <Footer/>
    </>
   )
}

export default App;