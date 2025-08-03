import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API_ENDPOINTS } from "../../config";

const LoginPage = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-left",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Attempting login with:", inputValue);
      console.log("API endpoint:", API_ENDPOINTS.LOGIN);
      console.log("Making request to:", API_ENDPOINTS.LOGIN);
      
      const { data } = await axios.post(
        API_ENDPOINTS.LOGIN,
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      console.log("Login response:", data);
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        console.log("Login successful, checking cookies...");
        // Check if cookie was set
        console.log("Current cookies:", document.cookie);
        console.log("Redirecting to /home");
        setTimeout(() => {
          console.log("Redirecting now...");
          // Force a page reload to ensure cookies are properly set
          window.location.href = "/home";
        }, 1500);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log("Login error:", error);
      console.log("Error details:", {
        message: error.message,
        code: error.code,
        response: error.response?.data,
        status: error.response?.status,
        headers: error.response?.headers
      });
      
      if (error.response) {
        // Server responded with error status
        console.log("Server responded with error:", error.response.status);
        handleError(error.response.data?.message || "Login failed");
      } else if (error.request) {
        // Request was made but no response received
        console.log("No response received from server");
        handleError("Server is not responding. Please check if backend is running.");
      } else {
        // Something else happened
        console.log("Other error:", error.message);
        handleError("Login failed. Please try again.");
      }
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
    });
  };

  return (
    <div className="form_container">
      <h2>Login Account</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={handleOnChange}
          />
        </div>
        <button type="submit">Submit</button>
        <span>
          Don't have an account? <Link to={"/signup"}>Signup</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
  );
};

export default LoginPage;