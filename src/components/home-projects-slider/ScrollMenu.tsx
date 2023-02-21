import React from 'react';
import Slider from 'react-slick';
import item1 from './MagItem'; //este es un componente donde ira el diseño de un projecto, busca como llamarlo dentro de un array.

//Se supone en esto el FC significa "function component". Se supone que esto es el arrray
const items: React.FC[]=[item1];



interface MenuItem {
  text: string;
}



interface ScrollMenuProps {
  items: MenuItem[
    
  ];
}

const ScrollMenu: React.FC<ScrollMenuProps> = ({ items }) => {
  const menuItems = items.map((item) => (
    <div key={item.text}>{item.text}</div>
  ));

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    <div>
      <Slider {...settings}>
        {menuItems}
      </Slider>
    </div>
  );
};

export default ScrollMenu;




