// header.tsx
import { ChangeEventHandler } from 'react';
import { useContext } from 'react';
//import { ThemeContext } from '../contexts/theme-context';
import '../styles/header.scss';
import '../styles/App.scss';
import { useTranslation } from 'react-i18next';
import { HashLink as Link } from 'react-router-hash-link';

function Header() {

  //translator
  const { t, i18n } = useTranslation();

  const onClickLanguageChange = (e: any) => {
    const language = e.target.value;
    i18n.changeLanguage(language);
  }

  const setDark = () => {
    localStorage.setItem("theme", "dark");

    document.documentElement.setAttribute("data-theme", "dark");
  };

  const setLight = () => {
    localStorage.setItem("theme", "light");

    document.documentElement.setAttribute("data-theme", "light");
  };

  const storedTheme = localStorage.getItem("theme");

  const prefersDark =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

  const defaultDark =
  storedTheme === "dark" || (storedTheme === null && prefersDark);

  if (defaultDark) {
    setDark();
  }


  const toggleTheme: ChangeEventHandler<HTMLInputElement> = (e) => {
    if(e.target.checked) {
      setDark();
    } else {
      setLight();
    }
  }
  

  //const { theme, setTheme } = useContext(ThemeContext);

  //const handleThemeChange = () => {

   // const isCurrentDark = theme === 'dark';
    //setTheme(isCurrentDark ? 'light' : 'dark');
    //localStorage.setItem('theme', isCurrentDark ? 'light' : 'dark');

  //};  
  
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

        <div className="toggle-theme-wrapper">
          <span>☀️</span>
          <label className="toggle-theme" htmlFor="checkbox">
            <input
              type="checkbox"
              id="checkbox"

              // 6
              onChange={toggleTheme}
              defaultChecked={defaultDark}
            />
            <div className="slider round"></div>
          </label>
          <span>🌒</span>
        </div>
      </div>
    </header>

  );
};

export default Header;

