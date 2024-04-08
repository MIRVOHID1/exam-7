import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch} from "react-redux";
import like from "../components/nav/nav-image/icons/likee.png"
import { addProduct } from "../redux/productSlice";
import { addLikedProduct } from "../redux/productSlice";
import axios from "axios";
import Loading from "../components/loading/Loading";
import Footer from "../components/footer/Footer";
import "./page.css";

const Blush = () => {
  const dispatch = useDispatch()
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    axios.get("https://makeup-api.herokuapp.com/api/v1/products.json?product_type=blush")
      .then((response) => {
        let products = response.data;
        setProducts(products);
        setLoading(false); 
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false); 
      });
  }, []);

  const handleCart = (product) =>{
    dispatch(addProduct(product))
    console.log(product)
  }
  const handleLike = (product) =>{
    dispatch(addLikedProduct(product))
    console.log(product)
  }

  return (
    <div className="containerr">
      <div className="header">
        <div className="texts">
          <p className="header-text1">ALL SKINCARE</p>
          <p className="header-text2">
            From anti-aging skincare to products designed to complement cosmetic treatments, find exactly what you need for glowing, more youthful-looking skin.
          </p>
        </div>
      </div>
      <div className="linkss">
        <a href="/blush" className="linkkk">BLUSH</a>
        <a href="/bronzer" className="linkkk">BRONZER</a>
        <a href="/eyebrow" className="linkkk">EYEBROW</a>
        <a href="/eyeliner" className="linkkk">EYELINER</a>
        <a href="/eyeshadow" className="linkkk">EYESHADOW</a>
      </div>
      <div className="shop-fetch">
        {loading ? (
          <Loading />
        ) : (
            <div className="shopFetch">
                {
                  products.map((product) => (
                    <Link  className="card" key={product.id} to={`/single_product/${product.id}`}>
                      <div>
                        <h1 className="fetchText">
                          <img src={product.image_link} width={300} height={300} alt="" />
                        </h1>
                        <h3 className="fetchText">{product.name}</h3>
                        <button className="button" onClick={()=>handleCart(product)}>ADD TO BAG</button>
                        <button onClick={()=>handleLike(product)}><img src={like} alt="" width={20} height={20} /></button>
                      </div>
                    </Link>
                  ))
                }
            </div>
        )}
      </div>
      <div className="blush-footer">
        <Footer/>
      </div>
    </div>
  );
};

export default Blush;