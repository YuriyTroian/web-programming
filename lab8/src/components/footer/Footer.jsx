import React from "react";

import './footer.css'
import logoImg from "../../img/logo.svg";
import facebookImg from "../../img/facebook.png";
import twitterImg from "../../img/twitter.png";
import instagramImg from "../../img/instagram.png";
import linkedinImg from "../../img/linkedin.png";

const Footer = () => {
    return (
        <section className="footer">
            <div className="container">
                <div className="footer__part1">
                    <div className="footer__text">
                        <div className="footer__title">
                            Branding stuff
                        </div>
                        <div className="footer__desc">
                            Pu Pu Pu
                        </div>
                    </div>
                    <div className="footer__logo">
                        <img src={logoImg} alt="Logo" height={40} width={40}/>
                        <span>My Stones</span>
                    </div>
                    <div className="footer__socials">
                        <img src={facebookImg} alt="facebook" height={40} width={40}/>
                        <img src={twitterImg} alt="twitter" height={40} width={40}/>
                        <img src={instagramImg} alt="instagram" height={40} width={40}/>
                        <img src={linkedinImg} alt="linkedin" height={40} width={40}/>
                    </div>
                </div>
                <div className="footer__line"></div>
                <div className="footer__part2">
                    2025 IoT @Copyright all rights reserved
                </div>
            </div>
        </section>
    );
}

export default Footer;