import React from 'react';
import Slider from 'react-slick';
import Item1 from './MagItem'; //este es un componente donde ira el diseño de un projecto, busca como llamarlo dentro de un array.
import Item2 from './BizItem';



//Se supone en esto el FC significa "function component". Se supone que esto es el arrray
const projects: React.FC[]=[Item1, Item2];


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





