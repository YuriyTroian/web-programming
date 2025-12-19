import React from "react";

import './promo.css'
import promoImg from './../../img/promo.png'

const Promo = () => {
    return (<section className="promo">
        <div className="container">
            <div className="promo__content">
                <div className="promo__img">
                    <img src={promoImg} alt="Promo" height="500" width="500"/>
                </div>
                <div className="promo__text">
                    <div className="promo__title">
                        WELCOME TO THE SHOP!
                    </div>
                    <div className="promo__desc">
                        It is the biggest shop in Ukraine. Here you can find a big part of stones all over the world.
                    </div>
                </div>
            </div>
        </div>
    </section> );
 }

 export default Promo;