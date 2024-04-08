import React from "react";
import "./routine.css";;

const Routine = () => {
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
      <div className="linkss">
        <a href="/foundation" className="linkkk">FOUNDATION</a>
        <a href="/lip_liner" className="linkkk">LIP LINER</a>
        <a href="/lip_stick" className="linkkk">LIP STICK</a>
        <a href="/mascara" className="linkkk">MASCARA</a>
        <a href="/nail_polish" className="linkkk">NAIL POLISH</a>
      </div>
  </div>
  )
}
export default Routine;