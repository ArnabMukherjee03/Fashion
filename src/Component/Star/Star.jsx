import React from "react";


const Star = ({rate}) =>{
    const ratingStar = Array.from({length:5},(elem,index)=>{
        let number = index + 0.5;
        return(
            <span key={index}>
                {
                    rate >= index+1 ?
                    (<i className="fa-solid fa-star" style={{paddingLeft: "4px", color:"#ffdf00"}}></i>)
                    : rate >= number ?
                    (<i className="fa-regular fa-star-half-stroke" style={{paddingLeft: "4px", color:"#ffdf00"}}></i>)
                    : (<i className="fa-regular fa-star" style={{paddingLeft: "4px", color:"#ffdf00"}}></i>)
                }
            </span>
        );
    });
    return(
        <>
            <div >
                {ratingStar}
            </div>
        </>
    )
}

export default Star;