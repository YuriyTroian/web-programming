import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Catalog from "./pages/catalog/Catalog";
import HomePage from "./pages/home/HomePage";
import ObjectDetails from "./pages/objectDetails/ObjectDetails";
import {objectsData} from "./components/catalogObjects/CatalogObjects";

function App() {
  

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/Catalog" element={<Catalog />} />
        <Route
            path="/Catalog/:id"
            element={<ObjectDetails objectsData={objectsData} />}
        />
        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
