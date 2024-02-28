import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Middleware from '../components/Middleware';
import Active from '../pages/Active';
import AddNote from '../pages/AddNote';
import Archive from '../pages/Archive';
import DetailNote from '../pages/DetailNote';
import Login from '../pages/Login';
import PageNotFound from '../pages/PageNotFound';
import Register from '../pages/Register';

const Router = createBrowserRouter([
  {
    path: '/notes-archive',
    element: (
      <Middleware>
        <Archive />,
      </Middleware>
    ),
  },
  {
    path: '/',
    element: <Active />,
  },
  {
    path: '/add-note',
    element: (
      <Middleware>
        <AddNote />,
      </Middleware>
    ),
  },
  {
    path: '/note/:id',
    element: (
      <Middleware>
        <DetailNote />,
      </Middleware>
    ),
  },
  {
    path: '*',
    element: <PageNotFound />,
  },
  {
    path: '/register',
    element: <Register />,
  },
]);

export default Router;
