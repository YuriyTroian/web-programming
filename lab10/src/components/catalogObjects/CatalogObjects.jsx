import CatalogFilters from "./../catalogFilters/CatalogFilters";
import Card from "../card/Card";
import React, {useEffect, useRef, useState} from "react";

import './catalogObjects.css'

import diamondImg from "../../img/diamond.jpg";
import rubinImg from "../../img/rubin.jpg";
import smaragdImg from "../../img/smaragd.jpg";
import stoneImg from "../../img/stone.jpg";
import {getStoneList, getStoneTypes} from "../../fetching";
import ElementsGet from "./elementsGet";
import Loader from "../loader/Loader";

const CatalogObjects=()=> {
  const [loading, setLoading] = useState(true);
  const [objectsData, setObjectsData] = useState([]);
  const [filteredObjects, setFilteredObjects] = useState(objectsData);
  const [selectedFilters, setSelectedFilters] = useState({
    name: "Any name",
    price: "Any price",
    strength: "Any strength"
  });
  const [stoneTypes, setStoneTypes] = useState([]);

  useEffect(() => {
      setLoading(true);
      getStoneList()
          .then(response => {
              console.log(response)
              setObjectsData(response.data);
              setFilteredObjects(response.data)
              setLoading(false);
          })
          .catch(error => {
            console.error('Error fetching data:', error);

            setLoading(false);
          });

      getStoneTypes()
          .then((response) => {
            setStoneTypes(response.data);
          })
          .catch((error) => {
            console.error("Error fetching stone types:", error);
          });
  }, []);
  const handleFilterApply = (selectedFilters) => {
    const searchQuery = document.getElementById("mySearch").value.toLowerCase();

    const filtered = objectsData.filter((object) => {
      const nameMatch =
        selectedFilters.name !== "Any name" ? object.title === selectedFilters.name : true;

      const priceRange = selectedFilters.price.split('-');
      const minPrice = parseFloat(priceRange[0]);
      const maxPrice = parseFloat(priceRange[1]);

      const priceMatch =
        selectedFilters.price !== "Any price"
          ? object.price >= minPrice && object.price <= maxPrice
          : true;

      const strengthMatch =
        selectedFilters.strength !== "Any strength"
          ? object.strength === selectedFilters.strength
          : true;

      const nameSearchMatch = object.title.toLowerCase().includes(searchQuery);

      return nameMatch && priceMatch && strengthMatch && nameSearchMatch;
    });

    setFilteredObjects(filtered)
  };

  const [nameFilter, setNameFilter] = useState("Any name");
  const [priceFilter, setPriceFilter] = useState("Any price");
  const [strengthFilter, setStrengthFilter] = useState("Any strength");
  const [searchQuery, setSearchQuery] = useState("");



  return (
    <section className="catalog">
        {loading ? <Loader /> : null}
      <div className="catalog-filters">
        <CatalogFilters onFilterApply={handleFilterApply} />
      </div>
      <div className="catalog-objects">
        {filteredObjects.map((object, index) => (
          <Card
               key={index}
               title={object.title}
               strength={object.strength}
               img={object.img}
               description={object.description}
               price={object.price}
               itemId={object.id}
          />
        ))}
      </div>
    </section>
  );
}

export default CatalogObjects;