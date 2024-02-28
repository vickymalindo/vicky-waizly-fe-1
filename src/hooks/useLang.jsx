import React from 'react';

const useLang = () => {
  const [lang, setLang] = React.useState('en');

  const onChangeLang = (value) => {
    const root = window.document.documentElement;
    root.setAttribute('lang', value || lang);
    localStorage.setItem('lang', value || lang);
    setLang(value);
  };

  return [lang, onChangeLang];
};

export default useLang;
