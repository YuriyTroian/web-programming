import styles from './Card.module.css'

const Card = ({title, price, img}) => {

    return(
        <div className={styles.card}>
            <a href="#" className={styles.card__link}></a>
            <img className={styles.card__img} src={img} alt="diamond" height="300" width="300"/>
            <div className={styles.card__body}>
                <div className={styles.card__text}>
                <div className={styles.card__title}>
                    {title}
                </div>
                <div className={styles.card__desc}>
                    It is a jewelry stone.
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