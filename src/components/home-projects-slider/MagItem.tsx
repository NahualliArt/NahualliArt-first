import React from 'react';
import Slider from 'react-slick';

import '../../styles/slider.scss'
//import { useCallback } from "react";  //-> para el intento de boton
import { HashLink as Link } from 'react-router-hash-link';




//imagenes

function MagItem() {

    //const handleClick = useCallback(() => {
        //window.location.href = "../Construccion.tsx";
      //}, []);

    return(
        <>
        <div className='sliderBg'>
            <div className='projectText'>
                <h3>Moto Arte Garage</h3>
                <p>Lorem ipsum dolor sit amet consectetur. Euismod a id neque felis aliquam maecenas dictum. Pellentesque sit arcu in etiam sapien tempor vitae non et. Lectus dictum velit integer eu auctor sollicitudin molestie pellentesque. Id commodo tortor sapien pharetra in tincidunt eu.</p>

                <Link to={'../errors/Construccion'}>See More</Link>
                                
            </div>
            <div className='projectImg'>
                <div>
                    <img src='https://cdn.dribbble.com/users/2307112/screenshots/18259767/media/8f48f73dc9e630c184940775ba11692b.png?compress=1&resize=1600x1200&vertical=top' alt='Cover photo from Moto Arte Garage website'/>
                </div>
            </div>
        </div>
        </>
    )
}
export default MagItem;




