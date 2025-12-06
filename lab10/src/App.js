import React, {useEffect, useState} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Catalog from "./pages/catalog/Catalog";
import HomePage from "./pages/home/HomePage";
import Cart from "./pages/cart/Cart";

import ObjectDetails from "./pages/objectDetails/ObjectDetails";
import {getStoneList} from "./fetching";
import axios from "axios";


function App() {

    const [objectsData, setObjectsData] = useState('');

      useEffect(() => {
        getStoneList()
          .then(response => {
              console.log(response)
              setObjectsData(response.data);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      }, []);
      console.log(objectsData)

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
        <Route path="/Cart" element={<Cart />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;