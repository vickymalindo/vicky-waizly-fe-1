import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Middleware from "../components/Middleware";
import Active from "../pages/Active";
import AddNote from "../pages/AddNote";
import Archive from "../pages/Archive";
import DetailNote from "../pages/DetailNote";
import Login from "../pages/Login";
import PageNotFound from "../pages/PageNotFound";
import Register from "../pages/Register";

const Router = createBrowserRouter([
  {
    path: "/notes-archive",
    element: <Archive />,
  },
  {
    path: "/",
    element: <Active />,
  },
  {
    path: "/add-note",
    element: <AddNote />,
  },
  {
    path: "/note/:id",
    element: <DetailNote />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default Router;
