import PropTypes from 'prop-types';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getAccessToken } from '../services/api';

const Middleware = ({ children }) => {
  const token = getAccessToken();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!token) {
      navigate('/');
    }
  }, []);

  return <div>{token && children}</div>;
};

Middleware.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Middleware;
