import "./home.css"
import best from "./home-image/best.jpg"
import body from "./home-image/body.jpg"

const Home = () => {
    return (
        <div>
            <div className='body1'>
                <div className='body1_items'>
                    <div className='body1_item_1'>
                      <span><p>Meet Our Award Winning Vitamin C</p></span>
                      <p>Winner of New Beauty 2024 award, "Best Vitamin C Serum", C-RADICAL Defense helps to defend against free radical damage with a novel form of vitamin C, helping brighten the skin and reducing the appearance of fine lines and wrinkles.</p>
                      <a href=""><button>SHOW NOW</button></a>
                    </div>
                    <div className='body2_item_2'>
                      <img style={{ width: "100%" }} src={best} />
                    </div>
                </div>
            </div>
            <div className='body8'>
                <div className='body8_1'>
                    <img src={body} />
                    <div>
                    <div className='body8_1_text'>
                      <p>ALASTIN & GALDERMA</p> <br />
                      <h1>STRONGER TOGETHER</h1>
                    </div>
                    <div className='body8_1_text2'>
                      <p>Now part of the Galderma Family, ALASTIN Skincare® will continue to create breakthrough medical skincare technology and the highest quality products.</p> <br />
                      <h3><a href="https://alastin.com/pages/provider-locator">FIND A SKINCARE PROVIDER</a></h3>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;