import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className='min-h-screen flex flex-grow items-center justify-center'>
      <div className='rounded-lg bg-slate-700 p-8 text-center shadow-xl'>
        <h1 className='mb-4 text-4xl font-bold'>404</h1>
        <p>Oops! The page you are looking for could not be found.</p>
        <Link
          to={-1}
          className='mt-4 inline-block rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600'>
          Go back to Home
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
