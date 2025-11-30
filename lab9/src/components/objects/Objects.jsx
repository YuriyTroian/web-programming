import React from "react";

import './objects.css'
import Card from '../card/Card'


import diamondImg from './../../img/diamond.jpg'
import rubinImg from './../../img/rubin.jpg'
import smaragdImg from './../../img/smaragd.jpg'
import stoneImg from './../../img/stone.jpg'

    const cardsData = [
        {id: 0, title: "Diamond", img: diamondImg, strength: "high", description: "It is a jewelry stone.", price: 1000 },
        {id: 1, title: "Rubin", img: rubinImg, strength: "low", description: "It is a jewelry stone.", price: 800 },
        {id: 2, title: "Smaragd", img: smaragdImg, strength: "medium", description: "It is a jewelry stone.", price: 900 },
    ];

const Objects = () => {
    return (
        <section className="objects">
            <div className="container">
                <div className="objects__cards">
                    {cardsData.map((card, e) => (
                        <Card key={e} itemId={card.id} title={card.title} img={card.img} strength={card.strength} description={card.description} price={card.price} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Objects;
