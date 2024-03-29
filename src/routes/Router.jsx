import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Active from '../pages/Active';
import AddNote from '../pages/AddNote';
import Complete from '../pages/Complete';
import DetailNote from '../pages/DetailNote';
import PageNotFound from '../pages/PageNotFound';
import Weather from '../pages/Weather';

const Router = createBrowserRouter([
  {
    path: '/notes-done',
    element: <Complete />,
  },
  {
    path: '/',
    element: <Active />,
  },
  {
    path: '/add-note',
    element: <AddNote />,
  },
  {
    path: '/note/:id',
    element: <DetailNote />,
  },
  {
    path: '/weather',
    element: <Weather />,
  },
  {
    path: '*',
    element: <PageNotFound />,
  },
]);

export default Router;
