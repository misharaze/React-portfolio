import React, { useEffect, useState } from 'react';
import './splashscreen.css'
import Logo from '../../img/icons/web-dev.png'
import { TiDeviceDesktop } from "react-icons/ti";
const SplashScreen = () => {
  return (
    <div className='box' >
       <h1 className="spinner__text">vous y etes presque...</h1>
    <img src={Logo}></img>
      
    </div>
  );
};

export default SplashScreen;