import { useState} from 'react';
import { ThemeContext } from './contexts/theme-context';
import Header from './components/Header';
import Home from './components/Home';
import Construccion from './components/Construccion'; //Pagina de mantenimiento
import Footer from './components/Footer';
import Error from './components/Error';
import './styles/App.scss';
import { BrowserRouter, Routes, Route, useRoutes } from "react-router-dom";

export default function App(): JSX.Element {

  // Detecting the default theme
  
  const isBrowserDefaultDark = () => window.matchMedia('(prefers-color-scheme: dark)').matches;

  // const getDefaultTheme = () : string => {
  //   const localStorageTheme = localStorage.getItem('default-theme');
  //   const browserDefault = isBrowserDefaultDark() ? 'dark' : 'light';
  //   return localStorageTheme || browserDefault;
  // };

  // const [theme, setTheme] = useState(getDefaultTheme());

     {/* <ThemeContext.Provider value={{ theme, setTheme }}>
          <div className={`theme-${theme}`}>
      </ThemeContext.Provider>
  */} 

  return (
      <div>
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path="/" element={<Home/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </div>
  );
}
