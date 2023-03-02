import React from 'react';
import Slider from 'react-slick';
import Item1 from './MagItem'; //este es un componente donde ira el diseño de un projecto, busca como llamarlo dentro de un array.
import Item2 from './BizItem';

type SliderProps = {
  slides: React.ReactNode[];
};

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const SliderComponent: React.FC<SliderProps> = ({ slides }) => {
  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div key={index}>{slide}</div>
      ))}
    </Slider>
  );
};

export default SliderComponent;

//Se supone en esto el FC significa "function component". Se supone que esto es el arrray
const projects: React.FC[]=[Item1, Item2];


//Aquí se supone que se hace render, pero todavía no sé bien qué significa eso 
 const App: React.FC = () => {

  const slides = [
    <div key="1">Slide 1</div>,
    <div key="2">Slide 2</div>,
    <div key="3">Slide 3</div>,
  ];

  return (
    <div>
      <Slider slides ={slides}/>
      {projects.map((Project, index) => (
        <Project key={index} />
      ))}
    </div>
  );
};


/*No sirve
interface MenuItem {
  text: string;
}



interface ScrollMenuProps {
  items: MenuItem[];
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

export default ScrollMenu; */




