import PropTypes from 'prop-types';
import React from 'react';

const Wrapper = ({ children, title }) => {
  return (
    <section className='px-12 py-3'>
      <h2 className='font-bold text-2xl'>{title}</h2>
      <div className='flex flex-wrap items-center'>{children}</div>
    </section>
  );
};

Wrapper.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
};

export default Wrapper;
