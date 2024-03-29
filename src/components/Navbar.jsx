import React, { useContext } from 'react';
import { IoMoonOutline } from 'react-icons/io5';
import { MdOutlineGTranslate, MdOutlineWbSunny } from 'react-icons/md';

import { Link, useNavigate } from 'react-router-dom';
import LanguageContext from '../context/LangContext';
import ThemeContext from '../context/themeContext';
import language from '../utils/language';

const Navbar = () => {
  const navigate = useNavigate();
  const { theme, onChangeTheme } = useContext(ThemeContext);
  const { lang, onChangeLang } = useContext(LanguageContext);
  const lan = language[lang].navbar;

  return (
    <header className="flex justify-between items-center shadow-lg shadow-slate-500/50 px-6 py-3 h-[78px]">
      <h2
        className="font-bold text-xl cursor-pointer"
        onClick={() => navigate('/')}
      >
        {lan.title}
      </h2>
      <div className="flex gap-2 items-center">
        <MdOutlineGTranslate
          className="inline-block text-2xl cursor-pointer"
          onClick={() => onChangeLang(lang === 'en' ? 'id' : 'en')}
        />
        <div
          className="cursor-pointer"
          onClick={() => onChangeTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          {theme === 'dark' ? (
            <MdOutlineWbSunny className="inline-block text-xl" />
          ) : (
            <IoMoonOutline className="inline-block text-xl" />
          )}
        </div>

        <Link to="/notes-done" className="text-xl">
          {lan.linkNote}
        </Link>
        <Link to="/weather" className="text-xl">
          {lan.linkWeather}
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
