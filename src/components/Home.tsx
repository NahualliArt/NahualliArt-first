// header.tsx
import { useState } from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/theme-context';
import logoIcon from '../images/logo-icon.png';
import '../styles/header.scss';
import { useTranslation } from 'react-i18next';

function Home() {

  //translator
  const { t, i18n } = useTranslation();

  const onClickLanguageChange = (e: any) => {
    const language = e.target.value;
    i18n.changeLanguage(language);
  } 
  
  return (
    <>
        <div>
            <div></div>
            <div>
                <h1>nahualli.art</h1>
                <h4>{t("home.hero")}</h4>
                <button>{t("home.button-intro")}</button>
            </div>
        </div>
    </>
  );
};

export default Home;

