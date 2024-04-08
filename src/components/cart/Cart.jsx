import React, {useState} from "react";
import "./cart.css"
import {  useSelector } from "react-redux";
import { useDispatch} from "react-redux";
import { removeProduct } from "../../redux/productSlice";
// import Loading from "../loading/Loading";

function Cart(){
    // const [loading, setLoading] = useState(true); 
    let data = useSelector((state) => state.productData.product)
    // setLoading(false); 
    console.log(data)
    // console.log(data)
    const dispatch = useDispatch()
    const handleDisCart =(product)=>{
        dispatch(removeProduct(product))
        location.reload();
    }  
    return(
      <div className="container">
        <div className="row">
          <button className="button" onClick={()=>handleDisCart(data)}>CLEAN BAG</button>
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

export default Cart