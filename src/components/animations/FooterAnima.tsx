import { Component, useContext } from 'react';
import '../../styles/Animations.scss'

import React from "react";
//animations
//Lottie doesn't work anymore :: import heroAnimation from '../../assets/animations/hero.json';
import footerGif from '../../assets/animations/footer-optimize.gif';

  const FooterAnimation = () => {
    return(
        <>
        <div className='footerImg'>
          <img src={footerGif} alt="decorative image"/>
        </div>
        </>
    );
  }

  export default FooterAnimation;
