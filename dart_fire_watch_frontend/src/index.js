import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import './styles/CommonCss.scss'
import { Home } from "./components/Home";
import { Authentication } from './components/AuthComponent/Authentication';
import { NotFoundPage } from './components/ErrorPage/NotFoundPage';
import { AccessForbidden } from './components/ErrorPage/AccessForbidden';
import { Admin } from './components/AdminPanel/admin';
import { ConfirmSignUpByLink } from './components/AuthComponent/UserComponent/ConfirmSignUpByLink';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" >
      <Route path="auth" element={<Authentication />} />
      <Route path="" element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="notfound" element={<NotFoundPage />}  />
      <Route path="forbidden" element={<AccessForbidden />}  />
      <Route path="admin" element={<Admin />}  />
      <Route path="confirm_register" element={<ConfirmSignUpByLink />}  />
    </Route>
  )
);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
