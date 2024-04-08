import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch} from "react-redux";
import "./shop.css";
import noImage from "../../pages/pageImage/no-image.jpg"
import Loading from "../loading/Loading";
import Category from "../../pages/CategoryShop";
import { addProduct } from "../../redux/productSlice";
import Footer from "../footer/Footer";

const Shop = () => {
  // const dispatch = useDispatch()
  // const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(true); 

  // useEffect(() => {
  //   axios.get("https://makeup-api.herokuapp.com/api/v1/products.json?product_type=bronzer")
  //     .then((response) => {
  //       let products = response.data;
  //       setProducts(products);
  //       setLoading(false); 
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching products:", error);
  //       setLoading(false); 
  //     });
  // }, []);

  // const handleCart = (product) =>{
  //   dispatch(addProduct(product))
  // }

  return (
  <div>
      <div className="containerr">
        <div className="headerr">
         <div className="texts">
           <p className="header-text1">ALL SKINCARE</p>
           <p className="header-text2">
             From anti-aging skincare to products designed to complement cosmetic treatments, find exactly what you need for glowing, more youthful-looking skin.
           </p>
         </div>
        </div>
      </div>
      <Category/>
      {/* <div className="shop-fetchh">
        {loading ? (
          <Loading />
        ) : (
            <div className="shopFetchh">
                {
                  products.map((product) => (
                    <Link  className="card" key={product.id} to={`/single_product/${product.id}`}>
                      <div>
                        <h1 className="fetchText">
                          <img src={product.image_link} width={300} height={300} alt={noImage} />
                        </h1>
                        <h3 className="fetchText">{product.name}</h3>
                        <button className="button" onClick={()=>handleCart(product)}>ADD TO BAG</button>
                      </div>
                    </Link>
                  ))
                }
            </div>
        )}
      </div> */}
      <div className="footerShop">
        <Footer/>
      </div>
    {/* </div> */}
  </div>
  )
}
export default Shop;