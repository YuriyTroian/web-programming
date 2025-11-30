import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {getDetailedStoneInfo} from "../../fetching";

import Loader from "../../components/loader/Loader";
import img_static from './../../img/promo.png'

import './objectDetails.css'

const ObjectDetails = () => {
  const { id } = useParams();
  const [objectsData, setObjectsData] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getDetailedStoneInfo(id)
      .then((response) => {
        setObjectsData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.error("Помилка під час отримання даних про камінь:", error);
      });
  }, [id]);

  const imagePath = img_static;

  return (
    <section>
      {loading ? (
        <Loader />
      ) : (
      <div className="object-detail">
        <div className="left-side">
          <img className="object-detail__img" src={imagePath} alt={objectsData.title} height={300} width={300} />
        </div>
        <div className="right-side">
          <div className="object-detail__strength">
            Strength: {objectsData.strength}
          </div>
          <div className="object-detail__title">
            {objectsData.title}
          </div>
          <div className="object-detail__description">
            {objectsData.description}
          </div>

          <div className="object-ditail__fields">
            <div className="input">
              <form>
                <label>
                  <input type="number" id="fname" placeholder="Countable field" min={1} />
                </label>
              </form>
            </div>
            <div className="options">
              <select>
                <option value="someOption">Any item</option>
                <option value="otherOption">Item 1</option>
                <option value="otherOption">Item 2</option>
                <option value="otherOption">Item 3</option>
              </select>
            </div>
          </div>
        </div>
      </div>)}

      <div className="object-detail__price">Price: {objectsData.price} $</div>
    </section>
  );
}

export default ObjectDetails;
