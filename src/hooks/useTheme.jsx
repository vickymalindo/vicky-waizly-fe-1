import React from 'react';

const useTheme = () => {
  const [theme, setTheme] = React.useState('dark');

  const onChangeTheme = (value) => {
    setTheme(value);
    const root = window.document.documentElement;
    root.setAttribute('data-theme', value ?? theme);
    localStorage.setItem('theme', value ?? theme);
  };
  return [theme, onChangeTheme];
};

export default useTheme;
