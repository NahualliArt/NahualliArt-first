import { Component, useContext } from 'react';
import '../../styles/Animations.scss'

import React from "react";
//animations
//Lottie doesn't work anymore :: import heroAnimation from '../../assets/animations/hero.json';
import welcomeGif from '../../assets/animations/welcome-optimize.gif';

  const Welcome = () => {
    return(
        <>
        <div className='welcomeImg'>
          <img src={welcomeGif} alt="decorative image"/>
        </div>
        </>
    );
  }

  export default Welcome;
