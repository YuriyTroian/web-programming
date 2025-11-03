import './catalogObjects.css'
import diamondImg from "../../img/diamond.jpg";
import rubinImg from "../../img/rubin.jpg";
import smaragdImg from "../../img/smaragd.jpg";
import stoneImg from "../../img/stone.jpg";
import CatalogFilters from "../catalogFilters/CatalogFilters";
import Objects from "../objects/Objects";
import Card from "../card/Card";


const objectsData = [
  { title: "Diamond", img: diamondImg, description: "It is a jewelry stone.", price: "1000 $" },
  { title: "Rubin", img: rubinImg, description: "It is a jewelry stone.", price: "800 $" },
  { title: "Smaragd", img: smaragdImg, description: "It is a jewelry stone.", price: "900 $" },
  { title: "Stone", img: stoneImg, description: "It is a jewelry stone.", price: "100 $" },
];

function CatalogObjects() {
  return (
    <section className="catalog">
      <div className="catalog-objects">
        <CatalogFilters />
        {objectsData.map((object) => (
          <Objects key={object.id} title={object.title} img={object.img} description={object.description} price={object.price} />
        ))}
      </div>
    </section>
  );
}


export default CatalogObjects;