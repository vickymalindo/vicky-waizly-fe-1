import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import LanguageContext from '../context/LangContext';
import useInput from '../hooks/useInput';
import { register } from '../services/api';
import language from '../utils/language';

const Register = () => {
  const [name, setName] = useInput('');
  const [email, setEmail] = useInput('');
  const [password, setPassword] = useInput('');
  const [confPassword, setConfPassword] = useInput('');
  const { lang } = useContext(LanguageContext);
  const lan = language[lang].register;
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confPassword) {
      alert('password not matched');
      return;
    }
    const { error, data } = await register({ name, email, password });
    if (!error) {
      alert('Register success');
      navigate('/');
      return;
    }
  };

  return (
    <>
      <Navbar />
      <section className='flex justify-center items-center w-full min-h-screen flex-col px-12'>
        <h1 className='font-bold text-2xl mb-2'>{lan.title}</h1>
        <form className='px-2 w-full' onSubmit={handleRegister}>
          <div className='mb-5'>
            <label htmlFor='name' className='block mb-2 text-sm font-medium'>
              {lan.label.name}
            </label>
            <input
              type='name'
              id='name'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder={lan.input.name}
              onChange={setName}
              required
            />
          </div>
          <div className='mb-5'>
            <label htmlFor='email' className='block mb-2 text-sm font-medium'>
              {lan.label.email}
            </label>
            <input
              type='email'
              id='email'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder={lan.input.email}
              onChange={setEmail}
              required
            />
          </div>
          <div className='mb-5'>
            <label
              htmlFor='password'
              className='block mb-2 text-sm font-medium'>
              {lan.label.password}
            </label>
            <input
              type='password'
              id='password'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder={lan.input.password}
              onChange={setPassword}
              required
            />
          </div>
          <div className='mb-5'>
            <label
              htmlFor='confirm_password'
              className='block mb-2 text-sm font-medium'>
              {lan.label.confirm}
            </label>
            <input
              type='password'
              id='confirm_password'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder={lan.input.confirm}
              onChange={setConfPassword}
              required
            />
          </div>

          <button
            type='submit'
            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-block mb-2'>
            {lan.button}
          </button>
          <span className='block'>
            {lan.question}
            <Link to='/' className='ml-2 text-blue-400 underline'>
              {lan.click}
            </Link>
          </span>
        </form>
      </section>
    </>
  );
};

export default Register;
