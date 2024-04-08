import savat from "./nav-image/icons/icon-cart.svg"
import like from "./nav-image/icons/likee.png"
import search from "./nav-image/icons/icon-search.svg"
import image from "./nav-image/logo.avif"

import "./navbar.css"

const Navbar = () => {
    return (
        <div className="container">
            <div className="navbar">
                <div>
                    <a href="/"><img src={image} alt="" width={150} height={35}/></a>
                </div>
                <div className="links">
                        <a href="/shop"><strong className="link">Shop Skincare</strong></a>
                        <a href="/routine"><strong className="link">Routine Builder</strong></a>
                        <a href="/science"><strong className="link">Skin Science</strong></a>
                        <a href=""><strong className="link">About</strong></a>
                </div>
                <div className="icons">
                    <img className="" src={search} alt="" />
                    <a href="/like"><img className="icon" src={like} alt="" width={25} height={25}/></a>
                    <a href="/cart"><img className="icon" src={savat} alt="" /></a>
                </div>
            </div>
        </div>
    );
}

export default Navbar;