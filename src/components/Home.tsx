// header.tsx
import { useState } from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/theme-context';
import '../styles/home.scss';
import { useTranslation } from 'react-i18next';
//import { ScrollMenu } from '../ScrollMenu';
import Slider from './home-projects-slider/ScrollMenu';

function Home() {

  //translator
  const { t, i18n } = useTranslation();

  const onClickLanguageChange = (e: any) => {
    const language = e.target.value;
    i18n.changeLanguage(language);
  } 
  
  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeChange = () => {

    const isCurrentDark = theme === 'dark';
    setTheme(isCurrentDark ? 'light' : 'dark');
    localStorage.setItem('theme', isCurrentDark ? 'light' : 'dark');

  };

  return (
    <>
    <div className='home'>
        {/* INTRO */}
        <div>
            <div></div>
            <div>
                <h1>nahualli.art</h1>
                <h4>{t("home.hero")}</h4>
                <button>{t("home.button-intro")}</button>
            </div>
        </div>
        {/* WELCOME */}
        <div id="welcome">
            <div>
                <h2>{t("home.welcome")}</h2>
                <p>{t("home.intro")}</p>
            </div>
            <div></div>
        </div>
        {/* TEXT DECORATION */}
        <div>
            <h2>UI Design</h2>
            <h2>Web Design</h2>
            <h2>Illustration</h2>
            <h2>Graphic Design</h2>
        </div>
        {/* SERVICES */}
        <div id="work">
            <div>
                <div>
                    <h4>{t("home.work.ui-design")}</h4>
                    <div></div>
                    <p>{t("home.work.ui-text")}</p>
                </div>
                <div>
                    <h4>{t("home.work.web-design")}</h4>
                    <div></div>
                    <p>{t("home.work.web-text")}</p>
                </div>
            </div>
            <div>
                <div>
                    <h4>{t("home.work.illustration")}</h4>
                    <div></div>
                    <p>{t("home.work.illustration-text")}</p>
                </div>
                <div>
                    <h4>{t("home.work.graphic-design")}</h4>
                    <div></div>
                    <p>{t("home.work.graphic-text")}</p>
                </div>
            </div>
        </div>

        {/* TEAM */}
        <div id="team">
            <div>
                <div>
                    <div></div>
                    <h3>Abigail P</h3>
                    <p>{t("home.team.sandra-text")}</p>
                </div>
                <div>
                    <div></div>
                    <h3>Kitzia P</h3>
                    <p>{t("home.team.kitzia-text")}</p>
                </div>
            </div>

            <div>
                <h3>{t("home.team.title")}</h3>
                <p>{t("home.team.text")}</p>
            </div>
        </div>

        {/* SLIDER IT'S A COMPONENT */}
            <div>
                <h1>Slider</h1>
               
            </div>

        <div>
             {/*Esto da error vas a tener que buscar como mandar llamar al slider aqui*/}
        </div>
            
            
        {/* CTA */}
        <div id="contact">
            <div>
                <h3>{t("home.cta.title")}</h3>
                <p>{t("home.cta.text")}</p>
                <p>contacto@nahualliart.com</p>
            </div>
            <div></div>
        </div>
    </div>    
    </>
  );
};

export default Home;

