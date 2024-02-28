import React from 'react';
import { RouterProvider } from 'react-router-dom';
import LanguageContext from './context/LangContext';
import ThemeContext from './context/themeContext';
import Router from './routes/Router';

const App = () => {
  const [theme, setTheme] = React.useState('dark');
  const [lang, setLang] = React.useState('en');

  const onChangeTheme = (value = 'dark') => {
    const root = window.document.documentElement;
    root.setAttribute('data-theme', value);
    localStorage.setItem('theme', value);
    setTheme(value);
  };

  const onChangeLang = (value = 'en') => {
    const root = window.document.documentElement;
    root.setAttribute('lang', value);
    localStorage.setItem('lang', value);
    setLang(value);
  };

  React.useEffect(() => {
    const themeStorage = localStorage.getItem('theme');
    const langStorage = localStorage.getItem('lang');

    if (themeStorage === null) {
      onChangeTheme();
    } else {
      const root = window.document.documentElement;
      root.setAttribute('data-theme', themeStorage);
      setTheme(themeStorage);
    }
    if (langStorage === null) {
      onChangeLang();
    } else {
      setLang(langStorage);
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, onChangeLang }}>
      <ThemeContext.Provider value={{ theme, onChangeTheme }}>
        <RouterProvider router={Router} />;
      </ThemeContext.Provider>
    </LanguageContext.Provider>
  );
};
export default App;
