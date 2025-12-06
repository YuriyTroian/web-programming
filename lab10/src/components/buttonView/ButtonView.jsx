import React, { useState } from "react";
import './buttonView.css';
import Card from "../card/Card";
import './../card/Card.module.css'

import diamondImg from "./../../img/diamond.jpg";
import smaragdImg from "./../../img/smaragd.jpg";
import rubinImg from "./../../img/rubin.jpg";
import stoneImg from "./../../img/stone.jpg";



const newCardsData = [
    {id: 3, title: "Stone", img: stoneImg, strength: "high", description: "It is a jewelry stone.", price: 100 },
    {id: 4, title: "Diamond", img: diamondImg, strength: "high", description: "It is a jewelry stone.", price: 1000 },
    {id: 5, title: "Rubin", img: rubinImg, strength: "low", description: "It is a jewelry stone.", price: 800 },
];

function ButtonView() {
    const [showMore, setShowMore] = useState(false);

    return (
        <section className="button">
            <div className="container__with__objects">
                {showMore && (
                    <div className="objects__cards">
                        {newCardsData.map((card, e) => (
                            <Card key={e} itemId={card.id} title={card.title} img={card.img} strength={card.strength} description={card.description} price={card.price} />
                        ))}
                    </div>
                )}
            </div>
            <div className="container">
                <div className="button__position">
                    <button className="objects__button" type="button" onClick={() => { setShowMore(!showMore);}}>
                        {showMore ? "View less" : "View more"}
                    </button>
                </div>
            </div>

        </section>
    );
}

export default ButtonView;
