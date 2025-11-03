import React from "react";

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import CatalogFilters from "../../components/catalogFilters/CatalogFilters";
import CatalogObjects from "../../components/catalogObjects/CatalogObjects";

function Catalog() {
    return (
        <div className="catalog_page">
            <CatalogObjects/>
        </div>
    );
}

export default Catalog;