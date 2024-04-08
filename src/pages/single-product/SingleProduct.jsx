import React from "react";
import { useEffect } from "react";
// import { useDispatch} from "react-redux";
import axios from "axios";
import { useState } from "react";
import Loading from "../../components/loading/Loading";
import "./singleProduct.css"


export default function SingleProduct(){
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true); 
    // const dispatch = useDispatch()

    useEffect (()=>{
        axios.get("https://makeup-api.herokuapp.com/api/v1/products.json").then(response=>{
            setProducts(response?.data)
            setLoading(false); 
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
          setLoading(false); 
        });
    },[])


    // const handleCart = (id) =>{
      // console.log(product)
      // dispatch(addProduct({id}))
    // }

    let url = +window.location.href.split('/')[4]
  return(
    <div>
      {loading ? (
          <Loading />
        ) : (
          <div>
            {
              products?.filter((product)=> product.id === url).map((product)=>{
                return<div key={product.id}>
                  <h1 className="fetchText">
                    <img src={product.image_link} alt="" />
                  </h1>
                  <h3 className="fetchText">{product.name}</h3>
                  <button onClick={()=>handleCart(product.id)}>ADD TO BAG</button>
                </div>
              })
            }
          </div>
        )}
    </div>
  )
}