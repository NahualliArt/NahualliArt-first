import { Component, useContext } from 'react';
import '../../styles/Animations.scss'

import React from "react";
//animations
//Lottie doesn't work anymore :: import heroAnimation from '../../assets/animations/hero.json';
import heroAnimation from '../../assets/animations/hero12.gif';

  const Hero = () => {
    return(
        <>
        <div className='heroImg'>
          <img src={heroAnimation} alt="decorative image"/>
        </div>
        </>
    );
  }

  export default Hero;

