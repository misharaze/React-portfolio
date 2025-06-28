import React from "react";
import "./Header.css";
import Modalcontact from '../modal-contact/modal-contact.js'
import  { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import{ CardCarousel1, CardCarousel2, CardCarousel3 } from "../carrousel-card/carrousel-card.js";

const Header = () => {
const [modalVisible, setModalVisible] = useState(false);

return(

<header className="header">
<Modalcontact
             show={modalVisible}
             onHide={() => setModalVisible(false)}/>
        <div className="header__wrapper">
            <h1 className="header__title">
                <strong>Bonjour je m'appelle  <em>Misha</em></strong><br/>
            
            </h1>
            <div className="header__text">
            <Carousel indicators={false}>
            <Carousel.Item>
                <div className='row justify-content-center align-items-center'>
                    <div className='col-md-1'></div>
                    <div className='col-md-3'><CardCarousel1 /></div>
                   <div className='col-md-1'></div>
                </div>
            </Carousel.Item>

            <Carousel.Item>
            <div className='row justify-content-center align-items-center'>
                    <div className='col-md-1'></div>
                    <div className='col-md-3'><CardCarousel2/></div>
                    <div className='col-md-1'></div>
                </div>
            </Carousel.Item>


            <Carousel.Item>
            <div className='row justify-content-center align-items-center'>
                    <div className='col-md-1'></div>
                    <div className='col-md-3'><CardCarousel3/></div>
                    <div className='col-md-1'></div>
                </div>
            </Carousel.Item>

        </Carousel>

            </div>
            <div className="header__right-block">

            
            <button data-modal  onClick={() => setModalVisible(true)} className="btn btn_white">Me contacter</button>
           
           

        </div>
            
        </div>
    </header>
     )
}
export default Header ;