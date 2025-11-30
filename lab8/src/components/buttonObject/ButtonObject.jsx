import React from "react";
import { Link, useNavigate } from "react-router-dom";
import './buttonObject.css';

function ButtonObject({ itemId }) {
    const navigate = useNavigate();

    const handleDiscoverClick = () => {
    console.log("Button clicked");
    console.log("Item ID:", itemId);
    if (itemId !== undefined) {
        console.log("Navigating to:", `/Catalog/${itemId}`);
        navigate(`/Catalog/${itemId}`);
    } else {
        console.error("Item ID is undefined");
    }
};

    return (
        <div className="button__object">
            <button className="object-button" onClick={handleDiscoverClick}>
                Discover about
            </button>
        </div>
    );
}

export default ButtonObject;
