// header.tsx
import { ChangeEventHandler } from 'react';
import { useContext } from 'react';
import '../styles/footer.scss';

import { useTranslation } from 'react-i18next';
//icons
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLinkedinIn, FaTiktok, FaFacebookF } from "react-icons/fa";

function Footer() {

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

  
  return (
    <footer>
        <h3>Find more at</h3>
        <div className='socials'>
            <FaFacebookF className='iconF'/>
            <FaLinkedinIn className='iconF'/>
            <FaTiktok className='iconF'/>
            <IoLogoWhatsapp className='iconF'/>
        </div>
        <h1>nahualli.art</h1>
        <div className='bottomSect'></div>
    </footer>
  );
};

export default Footer;

