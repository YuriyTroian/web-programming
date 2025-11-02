import './objects.css'
import Card from '../card/Card'

import diamondImg from '../../img/diamond.jpg'
import rubinImg from '../../img/rubin.jpg'
import smaragdImg from '../../img/smaragd.jpg'
import stoneImg from '../../img/stone.jpg'

const Objects = () => {
    return (
        <section className="objects">
            <div className="container">
                <div className="objects__cards">
                    <Card title="Diamond" img={diamondImg} price="1000"/>
                    <Card title="Rubin" img={rubinImg} price="800"/>
                    <Card title="Smaragd" img={smaragdImg} price="900"/>
                </div>
            </div>
        </section>
    );
}

export default Objects;