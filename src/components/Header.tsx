// header.tsx
import { useState } from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/theme-context';
import '../styles/header.scss';
import { useTranslation } from 'react-i18next';

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
        
        <a href="/" className="logo-section">
          <span>{t("test-text")}</span>
        </a>

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

