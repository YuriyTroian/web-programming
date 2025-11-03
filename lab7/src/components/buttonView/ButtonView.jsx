import React from "react";

import './button.css'

const ButtonView = () => {
    return (
        <section className="button">
            <div className="container">
                <div className="button__position">
                    <a href="#">
                        <button className="objects__button" type="button" >
                            VIEW MORE
                        </button>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default ButtonView;