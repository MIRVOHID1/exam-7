// import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./components/home/Home"
import Cart from "./components/cart/Cart"
import Like from "./components/like/Like";
import Skin from "./components/science/SkinScience"
import Navbar from './components/nav/Navbar';
import Shop from "./components/shop/Shop";
import Routine from "./components/routine/Routine";
import Blush from "./pages/Blush"
import Bronzer from "./pages/Bronzer"
import Eyeliner from "./pages/Eyeliner";
import Eyeshadow from "./pages/Eyeshadow";
import Eyebrow from "./pages/Eyebrow";
import SingleProduct from "./pages/single-product/SingleProduct";
import Foundation from "./pages/Foundation";
import LipLiner from "./pages/LipLiner";
import LipStick from "./pages/LipStick";
import Mascara from "./pages/Mascara";
import NailPolish from "./pages/NailPolish";

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/routine' element={<Routine/>}/>
        <Route path='/blush' element={<Blush/>}/>
        <Route path='/bronzer' element={<Bronzer/>}/>
        <Route path='/eyebrow' element={<Eyebrow/>}/>
        <Route path='/eyeliner' element={<Eyeliner/>}/> 
        <Route path='/eyeshadow' element={<Eyeshadow/>}/>
        <Route path='/foundation' element={<Foundation/>}/>
        <Route path='/lip_liner' element={<LipLiner/>}/>
        <Route path='/lip_stick' element={<LipStick/>}/>
        <Route path='/mascara' element={<Mascara/>}/>
        <Route path='/nail_polish' element={<NailPolish/>}/>
        <Route path='/single_product/:id' element={<SingleProduct/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/like' element={<Like/>}/>
        <Route path='/science' element={<Skin/>}/>
        <Route path='/cart' element={<Cart/>}/>
        {/* <Route path='/' element={<Footer/>}/> */}
      </Routes>
      {/* <Footer/>/ */}
      <Navbar/>
    </div>
  )
}

export default App


