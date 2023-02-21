import React from 'react';
//import ItemsMap from 'react-horizontal-scrolling-menu/dist/types/ItemsMap';
import Slider from 'react-slick';
import Item1 from './MagItem'; //este es un componente donde ira el diseño de un projecto, busca como llamarlo dentro de un array.

//Se supone en esto el FC significa "function component". Se supone que esto es el arrray
const projects: React.FC[]=[Item1];
/*
Otra opción(?) Esta es la que no me salió no entiendo bien por qué
const items = items.map((item) => {
  return (
    <Component
    key={item}
    />
  );
});
*/

//Aquí se supone que se hace render, pero todavía no sé bien qué significa eso 
const App: React.FC = () => {
  return (
    <div>
      {projects.map((Project, index) => (
        <Project key={index} />
      ))}
    </div>
  );
};

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




