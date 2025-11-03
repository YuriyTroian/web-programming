import React from "react";

import styles from './Card.module.css'

function Card ({title, strength, description, price, img}) {
    return(
        <div className={styles.card}>
            <a href="#" className={styles.card__link}></a>
            <img className={styles.card__img} src={img} alt={styles.card__title} height="300" width="300"/>
            <div className={styles.card__body}>
                <div className={styles.card__text}>
                <div className={styles.card__title}>
                    {title}
                </div>
                <div className={styles.card__strength}>
                    Strength: {strength}
                </div>
                <div className={styles.card__desc}>
                    {description}
                </div>
                </div>
                <div className={styles.card__price}>
                    {price}
                </div>
            </div>
        </div>
    );
}

export default Card;