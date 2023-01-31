import { useState } from 'react';
import { ThemeContext } from './contexts/theme-context';
import Header from './components/Header'
import './styles/App.scss';

function App() {

  // Detecting the default theme
  
  const isBrowserDefaultDark = () => window.matchMedia('(prefers-color-scheme: dark)').matches;

  const getDefaultTheme = () : string => {
    const localStorageTheme = localStorage.getItem('default-theme');
    const browserDefault = isBrowserDefaultDark() ? 'dark' : 'light';
    return localStorageTheme || browserDefault;
  };

  const [theme, setTheme] = useState(getDefaultTheme());


  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`theme-${theme}`}>
        
          <div className="content-wrapper">
            <Header/>
          </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App
