// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import {getDetailedStoneInfo} from "../../fetching";

// import Loader from "../../components/loader/Loader";
// import img_static from './../../img/promo.png'

// import './objectDetails.css'

// import { useDispatch } from 'react-redux';
// import { addToCart } from '../../redux/actions'

// const ObjectDetails = () => {
//   const { id, title } = useParams();
//   const [objectsData, setObjectsData] = useState(true);
//   const [loading, setLoading] = useState(true);
//   const [inputValue, setInputValue] = useState("")
//   const dispatch = useDispatch();

//   useEffect(() => {
//     setLoading(true);
//     getDetailedStoneInfo(id, title)
//       .then((response) => {
//         setObjectsData(response.data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         setLoading(false);
//         console.error("Помилка під час отримання даних про камінь:", error);
//       });
//   }, [id, title]);

//   const inputChange = (event) => {
//     const inputValue = event.target.value;
//     setInputValue(inputValue);
//   };

//   const handleAddToCart = () => {
//         let amount = 1;
//         if (parseInt(inputValue) > 1) {
//           amount = parseInt(inputValue);
//         }
//         dispatch(addToCart(objectsData, amount));
//         alert("Your object added to cart")
//     };

//   const imagePath = img_static;

//   return (
//     <section>
//       {loading ? (
//         <Loader />
//       ) : (
//       <div className="object-detail">
//         <div className="left-side">
//           <img className="object-detail__img" src={imagePath} alt={objectsData.title} height={300} width={300} />
//         </div>
//         <div className="right-side">
//           <div className="object-detail__strength">
//             Strength: {objectsData.strength}
//           </div>
//           <div className="object-detail__title">
//             {objectsData.title}
//           </div>
//           <div className="object-detail__description">
//             {objectsData.description}
//           </div>

//           <div className="object-ditail__fields">
//             <div className="input">
//               <form>
//                 <label>
//                     <p className="input__text">Add number of objects:</p>
//                     <input type="number" id="fname" placeholder="1" min={1} onChange={inputChange}/>
//                 </label>
//               </form>
//             </div>
//             <div className="options">
//               <button onClick={handleAddToCart}>Add to cart</button>
//             </div>
//           </div>
//         </div>
//       </div>)}

//       <div className="object-detail__price">Price: {objectsData.price} $</div>
//     </section>
//   );
// }

// export default ObjectDetails;



import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDetailedStoneInfo } from "../../fetching";

import Loader from "../../components/loader/Loader";
import img_static from './../../img/promo.png';

import './objectDetails.css';

import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions';

const ObjectDetails = () => {
  const { id, title } = useParams();
  const [objectsData, setObjectsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [inputValue, setInputValue] = useState("1");
  const [selectedColor, setSelectedColor] = useState(""); 
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    getDetailedStoneInfo(id, title)
      .then((response) => {
        // якщо кольори немає, додаємо дефолтні
        const dataWithColors = {
          ...response.data,
          colors: response.data.colors || ["Red", "Blue", "Green"]
        };
        setObjectsData(dataWithColors);
        setSelectedColor(dataWithColors.colors[0]);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.error("Помилка під час отримання даних про камінь:", error);
      });
  }, [id, title]);

  const inputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddToCart = () => {
    let amount = parseInt(inputValue);
    if (isNaN(amount) || amount < 1) amount = 1;

    dispatch(addToCart({
      ...objectsData,
      selectedColor: selectedColor
    }, amount));

    alert(`Added ${amount} item(s) with color ${selectedColor} to cart`);
  };

  if (loading || !objectsData) return <Loader />;

  return (
    <section>
      <div className="object-detail">
        <div className="left-side">
          <img className="object-detail__img" src={img_static} alt={objectsData.title} height={300} width={300} />
        </div>
        <div className="right-side">
          <div className="object-detail__strength">Strength: {objectsData.strength}</div>
          <div className="object-detail__title">{objectsData.title}</div>
          <div className="object-detail__description">{objectsData.description}</div>

          <div className="object-detail__fields">
            <div className="input">
              <form>
                <label>
                  <p className="input__text">Add number of objects:</p>
                  <input type="number" placeholder="1" min={1} value={inputValue} onChange={inputChange} />
                </label>
              </form>
            </div>

            {/* Вибір кольору */}
            <div className="color-picker">
              <p className="input__text">Select color:</p>
              <select value={selectedColor} onChange={(e) => setSelectedColor(e.target.value)}>
                {objectsData.colors.map((color, index) => (
                  <option key={index} value={color}>{color}</option>
                ))}
              </select>
            </div>

            <div className="options">
              <button onClick={handleAddToCart}>Add to cart</button>
            </div>
          </div>
        </div>
      </div>

      <div className="object-detail__price">Price: {objectsData.price} $</div>
    </section>
  );
}

export default ObjectDetails;
