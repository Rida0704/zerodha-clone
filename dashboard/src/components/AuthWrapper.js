import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API_ENDPOINTS } from "../config";

const AuthWrapper = ({ children }) => {
  const [cookies, removeCookie] = useCookies([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const verifyAuth = async () => {
      if (!cookies.token) {
        setIsAuthenticated(false);
        setIsLoading(false);
        window.location.href = process.env.REACT_APP_FRONTEND_URL || "http://localhost:3000/login";
        return;
      }

      try {
        const { data } = await axios.post(
          API_ENDPOINTS.VERIFY,
          {},
          { withCredentials: true }
        );
        
        if (data.status) {
          setUsername(data.user);
          setIsAuthenticated(true);
          toast(`Welcome back, ${data.user}!`, {
            position: "top-right",
          });
        } else {
          removeCookie("token");
          setIsAuthenticated(false);
          window.location.href = process.env.REACT_APP_FRONTEND_URL || "http://localhost:3000/login";
        }
      } catch (error) {
        console.error("Auth verification error:", error);
        removeCookie("token");
        setIsAuthenticated(false);
        window.location.href = process.env.REACT_APP_FRONTEND_URL || "http://localhost:3000/login";
      } finally {
        setIsLoading(false);
      }
    };

    verifyAuth();
  }, [cookies, removeCookie]);

  const handleLogout = () => {
    removeCookie("token");
    setIsAuthenticated(false);
    window.location.href = process.env.REACT_APP_FRONTEND_URL || "http://localhost:3000/login";
  };

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

  if (!isAuthenticated) {
    return null; // Will redirect to login
  }

  return (
    <>
      {React.cloneElement(children, { username, handleLogout })}
      <ToastContainer />
    </>
  );
};

export default AuthWrapper; 