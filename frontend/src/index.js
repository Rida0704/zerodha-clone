import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HomePage from "./landing_page/home/HomePage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignupPage from "./landing_page/signup/SignupPage.js";
import LoginPage from "./landing_page/login/LoginPage.js";
import AboutPage from "./landing_page/about/AboutPage";
import ProductPage from "./landing_page/products/ProductsPage";
import PricingPage from "./landing_page/pricing/PricingPage";
import SupportPage from "./landing_page/support/SupportPage";
import Navbar from "./landing_page/Navbar.js";
import Footer from "./landing_page/Footer.js";
import NotFound from "./landing_page/NotFound.js";
import AuthGuard from "./components/AuthGuard.js";
import { CookiesProvider } from "react-cookie";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CookiesProvider>
    <BrowserRouter>
      <Routes>
        {/* Landing page routes */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/home" element={
          <AuthGuard>
            <>
              <Navbar />
              <HomePage />
              <Footer />
            </>
          </AuthGuard>
        } />
        <Route path="/signup" element={
          <>
            <Navbar />
            <SignupPage />
            <Footer />
          </>
        } />
        <Route path="/login" element={
          <>
            <Navbar />
            <LoginPage />
            <Footer />
          </>
        } />
        <Route path="/about" element={
          <>
            <Navbar />
            <AboutPage />
            <Footer />
          </>
        } />
        <Route path="/product" element={
          <>
            <Navbar />
            <ProductPage />
            <Footer />
          </>
        } />
        <Route path="/pricing" element={
          <>
            <Navbar />
            <PricingPage />
            <Footer />
          </>
        } />
        <Route path="/support" element={
          <>
            <Navbar />
            <SupportPage />
            <Footer />
          </>
        } />
        

        
        <Route path="*" element={
          <>
            <Navbar />
            <NotFound />
            <Footer />
          </>
        } />
      </Routes>
    </BrowserRouter>
  </CookiesProvider>
);
