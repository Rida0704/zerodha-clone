import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import "./index.css";
import Home from "./components/Home";
import AuthWrapper from "./components/AuthWrapper";
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CookiesProvider>
      <BrowserRouter>
        <AuthWrapper>
          <Routes>
            <Route path="/*" element={<Home />} />
          </Routes>
        </AuthWrapper>
      </BrowserRouter>
    </CookiesProvider>
  </React.StrictMode>
);
