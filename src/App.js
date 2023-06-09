import React from "react";
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
import Signup from "./Component/SignUp/SignUp";
import Signin from "./Component/SignUp/SignIn";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";


const App = ()=>{

   
   
   return(
    <>
      <Nav/>
      <Routes>
         <Route path="/" Component={Home}></Route>
         <Route path="/about" Component={About}></Route>
         <Route path="/contact" Component={Contact}></Route>
         <Route path="/product/:type" Component={Product}></Route>
         <Route path="productdetails/:id" Component={Singleproduct}></Route>
         <Route path="/signup" Component={Signup}></Route>
         <Route path="/signin" Component={Signin}></Route>
      </Routes>
      <Cart/>
      <Footer/>
    </>
   )
}

export default App;