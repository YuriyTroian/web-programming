import React from "react";

import Header from "../../components/header/Header";
import Promo from "../../components/promo/Promo";
import Objects from "../../components/objects/Objects";
import ButtonView from "../../components/buttonView/ButtonView";
import Footer from "../../components/footer/Footer";

function HomePage() {
    return(
        <div className="home_page">
          <Promo />
          <Objects />
          <ButtonView />
        </div>
    );
}

export default HomePage;