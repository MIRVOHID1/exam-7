import galderma from "./footer-image/galderma-logo.png"
import { SlSocialInstagram } from "react-icons/sl";
import { AiOutlineFacebook } from "react-icons/ai";
import { CiTwitter } from "react-icons/ci";
import { ImPinterest2 } from "react-icons/im";
import { PiYoutubeLogo } from "react-icons/pi";
// import { GrLinkNext } from "react-icons/gr";
// import instagram from "./footer-image/icons/instagram.jpg"
// import youtube from "./footer-image/icons/you tube.png"
// import twitter from "./footer-image/icons/twitter.jpg"
// import pinterest from "./footer-image/icons/pinterest.png"
// import facebook from "./footer-image/icons/facebook.png"
import "./footer.css"

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div className="footer-top">
                    <div className="footer-header">
                       {/* <div className="linkss"> */}
                            <div className="linkWrapper">
                                <h3>CUSTOMER CARE</h3>
                                <a href=""><strong className="linkk">Authenticity</strong></a>
                                <a href=""><strong className="linkk">Physician Locator</strong></a>
                                <a href=""><strong className="linkk">Careers</strong></a>
                                <a href=""><strong className="linkk">Contact Us</strong></a>
                                <a href=""><strong className="linkk">Help Center</strong></a>
                                <a href=""><strong className="linkk">Affiliate Program</strong></a>
                                <a href=""><strong className="linkk">Terms of Service</strong></a>
                                <a href=""><strong className="linkk">Return policy</strong></a>
                            </div>
                            <div className="linkWrapper">
                                <h3>ABOUT</h3>
                                <a href=""><strong className="linkk">About Us</strong></a>
                                <a href=""><strong className="linkk">Press Releases</strong></a>
                                <a href=""><strong className="linkk">New Health Care Providers</strong></a>
                                <a href=""><strong className="linkk">Existing Provider Login</strong></a>
                                <a href=""><strong className="linkk">Manage My Subscription</strong></a>
                                <a href=""><strong className="linkk">ALASTIN Education</strong></a>
                            </div>
                        {/* </div> */}
                    </div>
                    <div className="footer-body">
                        <div>
                            <h2>JOIN THE A-LIST</h2>
                            <p>Stay in the glow with the latest beauty and skincare trends, products, and procedures.</p>
                            <input type="text" placeholder="Enter email address"/>
                        </div>
                        <div className="footer-nav">
                            <a className="footer-nav-img" href=""><img src={SlSocialInstagram} alt="" width={50} height={50}/></a>
                            <a className="footer-nav-img" href=""><img src={AiOutlineFacebook} alt=""  width={50} height={50}/></a>
                            <a className="footer-nav-img" href=""><img src={CiTwitter} alt=""   width={50} height={50}/></a>
                            <a className="footer-nav-img" href=""><img src={ImPinterest2} alt="" width={50} height={50}/></a>
                            <a className="footer-nav-img" href=""><img src={PiYoutubeLogo} alt="" width={50} height={50}/></a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                        <img className="footer-bottom-logo" src={galderma} width={200} height={40} alt="" />
                        <p className="footer-bottom-p">2023 Galderma laboratories, L.P. United States. All rights reserved. All trademarks are the property of their respective owners. This site is intended for U.S audiences only. © 2023, ALASTIN Skincare, Inc. All trademarks are the property of their respective owners.</p>
                        <p className="footer-bottom-pp">*Free shipping on all orders when you sign up for the email newsletter, sms, or on orders $75+. To redeem free shipping when applicable, select "Free Shipping" at checkout.</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;




