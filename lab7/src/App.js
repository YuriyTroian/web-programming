import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from './components/header/Header'
import Promo from './components/promo/Promo'
import Objects from './components/objects/Objects'
import Footer from './components/footer/Footer'
import ButtonView from './components/buttonView/ButtonView'
import HomePage from "./pages/home/HomePage";
import Catalog from "./pages/catalog/Catalog";
import Cart from "./pages/cart/Cart";

function App() {
  return (
      <Router>
          <Header/>
          <Routes>
              <Route path="/HomePage" element={<HomePage/>} />
              <Route path="/Catalog" element ={<Catalog/>} />
              <Route path="/Cart" element ={<Cart/>} />
          </Routes>
          <Footer/>
      </Router>
  );
}

export default App;
