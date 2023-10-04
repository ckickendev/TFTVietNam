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
import { ConfirmSignUpByLink } from "./components/AuthComponent/ConfirmSignUpByLink";
import { ResetPasswordByLink } from "./components/AuthComponent/ResetPasswordByLink";
import loadingStore from "./store/loadingStore";
import authStore from "./store/authStore";
import ChessBoard from "./components/ChessComponent/ChessBoard.js";
import { UploadComponent } from "./components/UploadImage/UploadComponent";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" >
      <Route
        path="auth"
        element={<Authentication loadingStore={loadingStore} />}
      />
      <Route path="" element={<Home loadingStore={loadingStore} />} />
      <Route path="home" element={<Home loadingStore={loadingStore} />} />
      <Route path="uploadImage" element={<UploadComponent />} />
      <Route path="notfound" element={<NotFoundPage />} />
      <Route path="forbidden" element={<AccessForbidden />} />
      <Route path="admin" element={<Admin loadingStore={loadingStore} authStore={authStore} />} />
      <Route path="confirm_register" element={<ConfirmSignUpByLink />} />
      <Route path="reset-password-link" element={<ResetPasswordByLink />} />
      <Route path="chessboard" element={<ChessBoard />} />
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
