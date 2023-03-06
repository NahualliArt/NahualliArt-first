import React from 'react';
import {useState} from 'react';
import Slider from 'react-slick';
import Item1 from './MagItem';
import Item2 from './BizItem';
//import ItemsMap from 'react-horizontal-scrolling-menu/dist/types/ItemsMap';

export default function App(props:any){
  const items = ["Item1", "Item2"]; //En el ejemplo aquí van el nombre de las imágenes en comillas, ej. "imagen2.jpg"
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [SelectedItems, setSelectedItems] =useState(items[0]);

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

  return (

    <div>
      {selectedIndex === 0 && <Item1/>}
      {selectedIndex === 1 && <Item2/>}

      <button onClick={previous}>{"<"}</button>
      <button onClick={next}>{">"}</button>
    </div>

  );
    

  
    
      

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


