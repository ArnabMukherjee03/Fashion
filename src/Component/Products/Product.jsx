import React, { useContext } from "react";
// Poster jsx
import Poster from "./Poster";
import AllProducts from "./AllProducts";
import { ProductContext } from "../../Context/ProductContext";
import ClipLoader from "react-spinners/ClockLoader";

const Product = () =>{
    const{loading} = useContext(ProductContext);
    return(
        loading ?
        <> 
        <Poster/>
        <AllProducts/>
        </>
        :
        <section className="d-flex loading justify-content-center align-items-center"> <ClipLoader
        color="#0fb78d"
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      </section>
    )
}

export default Product;