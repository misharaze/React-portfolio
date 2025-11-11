import React, { useState } from "react";
import "./Header.scss";
import Modalcontact from "../modal-contact/modal-contact";
import Carousel from "react-bootstrap/Carousel";
import {
  CardCarousel1,
  CardCarousel2,
  CardCarousel3,
} from "../carrousel-card/carrousel-card";
import InfoHeader from "../InfoHeader/InfoHeader.tsx";

const Header = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
  <>
       
    <header className="header">
  <InfoHeader/>
      <Modalcontact show={modalVisible} onHide={() => setModalVisible(false)} />
     
      <div className="header__wrapper">
        <div className="header__left-block">
   
          <h1 className="header__title">
            <strong>
              Bonjour je m'appelle <em>Misha</em>
            </strong>
          </h1>

          <div className="header__text">
            <Carousel indicators={false}>
              <Carousel.Item>
                <div className="carousel-item-inner">
                  <CardCarousel1 />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="carousel-item-inner">
                  <CardCarousel2 />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="carousel-item-inner">
                  <CardCarousel3 />
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>

        <div className="header__right-block">
          <button
            className="btn btn_white"
            onClick={() => setModalVisible(true)}
          >
            Me contacter
          </button>
        </div>
      </div>
    </header>
    </>
  );
};

export default Header;
