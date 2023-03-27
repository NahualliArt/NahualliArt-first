import { useState} from 'react';
import { ThemeContext } from './contexts/theme-context';
import Header from './components/Header';
import Home from './components/Home';
import Construccion from './components/errors/Construccion'; //Pagina de mantenimiento
import Footer from './components/Footer';
import './styles/App.scss';
import { BrowserRouter, Routes, Route, useRoutes } from "react-router-dom";

export default function App(): JSX.Element {

  // Detecting the default theme
  const isBrowserDefaultDark = () => window.matchMedia('(prefers-color-scheme: dark)').matches;

  return (
      <div>
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path="/" element={<Home/>}/>
          </Routes>
          <Construccion/>
          <Footer/>
        </BrowserRouter>
      </div>
  );
}
