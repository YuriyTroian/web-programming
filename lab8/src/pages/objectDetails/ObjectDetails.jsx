import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import './objectDetails.css'

function ObjectDetails({ objectsData }) {
  const { id } = useParams();
  const [selectedItem, setSelectedItem] = useState(null);

    useEffect(
    
        () => {
            const item = objectsData.find((object) => object.id === parseInt(id, 10));
            setSelectedItem(item);
        },
    
        [id, objectsData]

    
    );

  if (!selectedItem) {
      return <div>Item not found</div>;
      
  }

  const imagePath = selectedItem.img;

  return (
      <section>
          <div className="object-detail">
              <div className="left-side">
                  <img className="object-detail__img" src={imagePath} alt={selectedItem.title} height={300} width={300} />
              </div>
              <div className="right-side">
                  <div className="object-detail__strength">
                      Strength: {selectedItem.strength}
                  </div>
                  <div className="object-detail__title">
                      {selectedItem.title}
                  </div>
                  <div className="object-detail__description">
                      {selectedItem.description}
                  </div>

                  <div className="object-ditail__fields">
                      <div className="input">
                          <form>
                              <label>
                                  <input type="number" id="fname" placeholder="Countable field" min={1}/>
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
          </div>

          <div className="object-detail__price">Price: {selectedItem.price} $</div>

      </section>
  );
}

export default ObjectDetails;
