import React from "react";
import "./About.css";
import aboutImg from "../../Image/about-01.jpg.webp"
const About = () =>{
    return(
        <> 
        <div className="" style={{paddingTop:"60px"}}>
         <div className="Aboutposter">
           <div className="aboutPosterContent">
           <h1>About</h1>
           </div>
         </div>
         <div className="co-section">
         <div className="container">
           <div className="row">
              <div className="col-10 mx-auto d-flex flex-column flex-lg-row" style={{gap:"100px"}}>
                <div className="aboutContent d-flex justify-content-center flex-column">
                <h2>Our Story</h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consequat consequat enim, non auctor massa ultrices non. Morbi sed odio massa. Quisque at vehicula tellus, sed tincidunt augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas varius egestas diam, eu sodales metus scelerisque congue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                </p>
                </div>
                <div className="aboutImg ">
                <img src={aboutImg} className="" alt="" />
              </div>
              </div>
           </div>
         </div>
         </div>
         </div>
        </>
    )
}

export default About;