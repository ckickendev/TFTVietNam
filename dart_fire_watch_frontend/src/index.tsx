import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Home } from "./components/Home";
import { Authentication } from "./components/AuthComponent/Authentication";
import { NotFoundPage } from "./components/ErrorPage/NotFoundPage";
import { AccessForbidden } from "./components/ErrorPage/AccessForbidden";
import { Admin } from "./components/AdminPanel/AdminPanel";
import { ConfirmSignUpByLink } from "./components/AuthComponent/UserComponent/ConfirmSignUpByLink";
import { ResetPasswordByLink } from "./components/AuthComponent/UserComponent/ResetPasswordByLink";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="auth" element={<Authentication />} />
      <Route path="" element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="notfound" element={<NotFoundPage />} />
      <Route path="forbidden" element={<AccessForbidden />} />
      <Route path="admin" element={<Admin />} />
      <Route path="confirm_register" element={<ConfirmSignUpByLink />} />
      <Route path="reset-password-link" element={<ResetPasswordByLink />} />
    </Route>
  )
);

const root = document.getElementById("root")!;

ReactDOM.createRoot(root).render(
  //disable strict mode to negate render twice
  // <React.StrictMode>
    <RouterProvider router={router} />
  // </React.StrictMode>
);

reportWebVitals();
