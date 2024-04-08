import React, {useState} from "react";
import "./like.css"
import {  useSelector } from "react-redux";
import { useDispatch} from "react-redux";
import { removeLiked } from "../../redux/productSlice";

function Like(){
    let data = useSelector((state) => state.productData.liked)
    console.log(data)
    const dispatch = useDispatch()
    const handleDisLike =(product)=>{
        dispatch(removeLiked(product))
        location.reload();
    }  
    return(
      <div className="container">
        <div className="row">
          <button className="button" onClick={()=>handleDisLike(data)}>CLEAN LIKED BAG</button>
          <div className="carder">
            {
              data?.map((product)=>(
                <div className="card" key={product.id}>
                      <h1 className="fetchText">
                        <img src={product.image_link} width={300} height={300} alt="" />
                      </h1>
                      <h3 className="fetchText">{product.name}</h3>
                      {/* <button className="button" onClick={()=>handleDisCart(product.id)}>REMOVE FROM BAG</button> */}
                </div>
              ))
            }
          </div>
        </div>
      </div>
    )
}

export default Like