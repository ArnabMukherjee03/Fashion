import React, { useContext, useEffect, useState } from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";

//  import sidebar context
import {SidebarContext} from "../../Context/SidebarContext";
import { CartContext } from "../../Context/cartContext";
import { FirebaseContext } from "../../Context/FirebaseContext";

const Nav = () => {
  const[isActive,setisActive] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  const{signOut,isLoggedIn,firebaseAuth} = useContext(FirebaseContext)

  // Event Listner

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 60 ? setisActive(true) : setisActive(false);
    })
  })
  
  const{isOpen,setIsOpen} = useContext(SidebarContext)
  const{itemAmount} = useContext(CartContext);
  return (
    
     <header className={`${isActive ? 'navActive' : 'bg-none' } navecom`}>
      <div className="container-fluid" >
        <div className="row">
          <div className="col-12 col-lg-11 mx-lg-auto ">
              <nav className="navbar d-flex ">
                  <div className="logo">
                      <p className="brand">Fashion</p>
                  </div>
                  <div className={`items  ${showNavbar && 'get'}`}>
                    <ul className="navUl">
                        <li className="navItem">
                            <NavLink to="/"  className="navlink navValue" >Home</NavLink>
                        </li>
                        <li className="navItem">
                            <NavLink to="/product/Men"  className="navlink navValue">Men</NavLink>
                        </li>
                        <li className="navItem">
                            <NavLink to="/product/Women" className="navlink navValue">Women</NavLink>
                        </li>
                        <li className="navItem">
                            <NavLink to="/product/Accessories" className="navlink navValue">Accessories</NavLink>
                        </li>
                        <li className="navItem">
                            <NavLink to="product/Jewelery" className="navlink navValue">Jewelery</NavLink>
                        </li>
                        <li className="navItem">
                            <NavLink to="/about" className="navlink navValue">About</NavLink>
                        </li>
                        <li className="navItem" >
                            <NavLink to="/contact" className="navlink navValue">Contact</NavLink>
                        </li>
                    </ul>
                  </div>
                  <div className="menuicon d-flex">
                      {!isLoggedIn ?
                      <NavLink to="/signin"><i className="fa-solid fa-user navIcon"></i> </NavLink>
                      :
                      <NavLink onClick={()=>signOut(firebaseAuth)}><i class="fa-solid fa-right-from-bracket navIcon"></i></NavLink>
                      }
                      <NavLink onClick={()=> setIsOpen(!isOpen)} style={{position:"relative"}}><i className="fa-solid fa-cart-shopping navIcon"></i>
                      <span className="navAmount text-center">{itemAmount}</span>
                      </NavLink>
                      <div className="bar">
                      <i onClick={handleShowNavbar} className="fa-solid fa-bars"></i>
                      </div>
                  </div>

              </nav>
          </div>
        </div>
      </div>
      </header>
  );
};

export default Nav;
