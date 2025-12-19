import React from "react";

import CatalogObjects from "../../components/catalogObjects/CatalogObjects";
import Loader from "../../components/loader/Loader";

function Catalog() {
    return (
        <div className="catalog_page">
            <CatalogObjects/>
        </div>
    );
}

export default Catalog;