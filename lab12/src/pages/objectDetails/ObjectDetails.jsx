import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {getDetailedStoneInfo} from "../../fetching";

import Loader from "../../components/loader/Loader";
import img_static from './../../img/promo.png'

import './objectDetails.css'

import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions'

const ObjectDetails = () => {
  const { id, title } = useParams();
  const [objectsData, setObjectsData] = useState(true);
  const [loading, setLoading] = useState(true);
  const [inputValue, setInputValue] = useState("")
  const dispatch = useDispatch();

  const owner_index = localStorage.getItem("loggedInUserIndex");
  console.log(owner_index)

  useEffect(() => {
    setLoading(true);
    getDetailedStoneInfo(id, title)
      .then((response) => {
        setObjectsData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.error("Помилка під час отримання даних про камінь:", error);
      });
  }, [id, title]);

  const inputChange = (event) => {
    const inputValue = event.target.value;
    setInputValue(inputValue);
  };

  const handleAddToCart = () => {
        let amount = 1;
        if (parseInt(inputValue) > 1) {
          amount = parseInt(inputValue);
        }
        dispatch(addToCart(objectsData, amount, owner_index));
        alert("Your object added to cart")
    };

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
                    <p className="input__text">Add number of objects:</p>
                    <input type="number" id="fname" placeholder="1" min={1} onChange={inputChange}/>
                </label>
              </form>
            </div>
            <div className="options">
              <button onClick={handleAddToCart}>Add to cart</button>
            </div>
          </div>
        </div>
      </div>)}

      <div className="object-detail__price">Price: {objectsData.price} $</div>
    </section>
  );
}

export default ObjectDetails;
