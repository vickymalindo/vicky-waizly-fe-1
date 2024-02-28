import React, { useContext } from 'react';
import LanguageContext from '../context/LangContext';
import language from '../utils/language';

const Loader = () => {
  const { lang } = useContext(LanguageContext);
  const lan = language[lang].load;

  return (
    <div className='w-full min-h-screen flex justify-center items-center'>
      <p className='text-xl'>{lan.text}</p>
    </div>
  );
};

export default Loader;
