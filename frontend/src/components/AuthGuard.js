import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { API_ENDPOINTS } from "../config";

const AuthGuard = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [cookies, removeCookie] = useCookies([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const verifyAuth = async () => {
      console.log("AuthGuard: Checking authentication for path:", location.pathname);
      console.log("AuthGuard: Token exists:", !!cookies.token);
      console.log("AuthGuard: All cookies:", document.cookie);
      
      // If we're already on login or signup page, don't check auth
      if (location.pathname === "/login" || location.pathname === "/signup") {
        console.log("AuthGuard: On login/signup page, skipping auth check");
        setIsAuthenticated(false);
        setIsLoading(false);
        return;
      }

      // Check both react-cookie and document.cookie
      const tokenFromCookie = cookies.token;
      const tokenFromDocument = document.cookie.split('; ').find(row => row.startsWith('token='))?.split('=')[1];
      
      console.log("AuthGuard: Token from react-cookie:", !!tokenFromCookie);
      console.log("AuthGuard: Token from document.cookie:", !!tokenFromDocument);
      
      if (!tokenFromCookie && !tokenFromDocument) {
        console.log("AuthGuard: No token found, redirecting to login");
        setIsAuthenticated(false);
        setIsLoading(false);
        navigate("/login");
        return;
      }

      try {
        console.log("Verifying token...");
        // Use the token from document.cookie if react-cookie doesn't have it
        const tokenToUse = tokenFromCookie || tokenFromDocument;
        console.log("Using token for verification:", !!tokenToUse);
        
        const { data } = await axios.post(
          API_ENDPOINTS.VERIFY,
          {},
          { withCredentials: true }
        );
        
        console.log("Verification response:", data);
        
        if (data.status) {
          console.log("Authentication successful");
          setIsAuthenticated(true);
        } else {
          console.log("Verification failed:", data.message);
          removeCookie("token");
          setIsAuthenticated(false);
          navigate("/login");
        }
      } catch (error) {
        console.error("Auth verification error:", error);
        removeCookie("token");
        setIsAuthenticated(false);
        navigate("/login");
      } finally {
        setIsLoading(false);
      }
    };

    verifyAuth();
  }, [cookies.token, navigate, removeCookie, location.pathname]);

  // Add a separate effect to handle successful login redirects
  useEffect(() => {
    if (isAuthenticated && (location.pathname === "/login" || location.pathname === "/signup")) {
      navigate("/home");
    }
  }, [isAuthenticated, location.pathname, navigate]);

  if (isLoading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        fontSize: '18px'
      }}>
        Loading...
      </div>
    );
  }

  // For login/signup pages, show them regardless of auth status
  if (location.pathname === "/login" || location.pathname === "/signup") {
    return children;
  }

  // For other pages, only show if authenticated
  if (!isAuthenticated) {
    return null; // Will redirect to login
  }

  return children;
};

export default AuthGuard; 