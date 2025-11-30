import React from "react";
import { useParams } from "react-router-dom";
import Card from "./../../components/card/Card";
import objectsData from "./../../components/catalogObjects/CatalogObjects"; // Import the objectsData from CatalogObjects or store it separately

const ObjectInfo = () => {
  const { objectId } = useParams();
  const selectedObject = objectsData.find((obj) => obj.id === parseInt(objectId, 10));

  if (!selectedObject) {
    return <div>Object not found</div>;
  }

  return (
    <div>
      <Card
        title={selectedObject.title}
        strength={selectedObject.strength}
        img={selectedObject.img}
        description={selectedObject.description}
        price={selectedObject.price.toString()}
      />
    </div>
  );
};

export default ObjectInfo;
