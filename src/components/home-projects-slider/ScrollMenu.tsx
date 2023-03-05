import React from 'react';
import {useState} from 'react';
import Slider from 'react-slick';
import Item1 from './MagItem';
import Item2 from './BizItem';

export default function App(props:any){
  const items = ["MagItem.tsx","BizItem.tsx"]; //En el ejemplo aquí van el nombre de las imágenes en comillas, ej. "imagen2.jpg"
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedItems, setSelectedItems] =useState(items[0]);

  const selectNewItem = (index: number, items: string[], next = true) => {
    const condition = next ? selectedIndex < items.length : selectedIndex > 0;
    const nextIndex = next ? (condition ? selectedIndex + 1 : 0) : 
      condition ? selectedIndex - 1 : items.length - 1;
      setSelectedItems(items[nextIndex]);
      setSelectedIndex(nextIndex);
  };

  const previous = () => {
    selectNewItem(selectedIndex, items, false);
  };

  const next = () => {
    selectNewItem(selectedIndex, items);
  };
  /*
  En el ejemplo esto va debajo del "return", revisar cómo hacer para que funcione con los items del slider
  <img src={require(`#/${setSelectedItems}`)}/>
  */
  return <>
    
    <Item1/>
    <Item2/>
      <button onClick={previous}>{"<"}</button>
      <button onClick={next}>{">"}</button>

  </>
}

 /* Este era la forma anterior de enseñar el arreglo en pantalla
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

export default App;*/


