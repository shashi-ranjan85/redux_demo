import React from 'react';
import MobilePic from '../images/Nokia.jpg'
import DesktopPic from '../images/desktop.png'
import PendrivePic from '../images/pendrive.webp'
import CartPic from '../images/shopping_cart.png'

function Home() {
    return (
        <div>
            <div className="add-to-cart">
                <img src={CartPic}/>
            </div>
            <h1>Home</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src={MobilePic} />
                </div>
                <div className="text-wrapper item">
                    <span>
                        Mobile
                    </span>
                    <span>
                        Price: 1000 Rs
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button>Add to Cart</button>
                </div>
                {/* <div className="img-wrapper item">
                    <img src={DesktopPic} />
                </div>
                <div className="img-wrapper item">
                    <img src={PendrivePic} />
                </div> */}
            </div>
        </div>
    );
}

export default Home;