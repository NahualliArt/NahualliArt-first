// header.tsx
import { useState } from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/theme-context';
import '../styles/header.scss';
import { useTranslation } from 'react-i18next';
import { HashLink as Link } from 'react-router-hash-link';

function Header() {

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
    <header className="header">
      <div className="header-content">

        <select onChange={onClickLanguageChange}>
          <option value={"en"}>English</option>
          <option value={"es"}>Spanish</option>
        </select>
        
        <div  className="menuLinks">
          <ul>
            <Link to={'/'}><li>Welcome</li></Link>
            <Link to={'/#work'}><li>Work</li></Link>
            <Link to={'/#team'}><li>Team</li></Link>
            <Link to={'/#projects'}><li>Projects</li></Link>
            <Link to={'/#contact'}><li>Contact</li></Link>
          </ul>
        </div>

        <div className="toggle-btn-section">
          <div className={`toggle-checkbox m-vertical-auto`}>
            <input
              className="toggle-btn__input"
              type="checkbox"
              name="checkbox"
              onChange={handleThemeChange}
              checked={theme === 'light'}
            />
            <button type="button" className={`toggle-btn__input-label`} onClick={handleThemeChange}></button>
          </div>
        </div>
      </div>
    </header>

  );
};

export default Header;

