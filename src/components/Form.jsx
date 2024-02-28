import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import LanguageContext from '../context/LangContext';
import language from '../utils/language';

const Form = ({ submit, limit, setTitle, setBody }) => {
  const { lang } = useContext(LanguageContext);
  const lan = language[lang].form;
  return (
    <section className='max-w-sm mx-auto mt-6'>
      <h1 className='font-bold text-2xl mb-2'>Add Note</h1>
      <form className='px-2' onSubmit={(e) => submit(e)}>
        <div className='mb-5'>
          <div>
            <label
              htmlFor='title'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
              {lan.title}
            </label>
            <input
              type='text'
              id='title'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder={lan.input.title}
              maxLength={50}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <span>
              {lan.limit} : {50 - limit}
            </span>
          </div>
        </div>
        <div className='mb-5'>
          <div>
            <label
              htmlFor='body'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
              {lan.label.title}
            </label>
            <textarea
              type='text'
              id='body'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder={lan.input.body}
              onChange={(e) => setBody(e.target.value)}
              required
            />
          </div>
        </div>

        <button
          type='submit'
          className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
          {lan.button}
        </button>
      </form>
    </section>
  );
};

Form.propTypes = {
  submit: PropTypes.func.isRequired,
  limit: PropTypes.number.isRequired,
  setTitle: PropTypes.func.isRequired,
  setBody: PropTypes.func.isRequired,
};

export default Form;
