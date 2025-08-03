import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { API_ENDPOINTS } from "../../config";

const Hero = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const { data } = await axios.post(
          API_ENDPOINTS.VERIFY,
          {},
          { withCredentials: true }
        );
        
        if (data.status) {
          setUsername(data.user);
          toast(`Welcome back, ${data.user}!`, {
            position: "top-right",
          });
        }
      } catch (error) {
        console.error("Error getting user info:", error);
      } finally {
        setIsLoading(false);
      }
    };
    
    getUserInfo();
  }, []);

  const handleLogout = () => {
    removeCookie("token");
    setUsername("");
    navigate("/login");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const handleSignup = () => {
    navigate("/signup");
  };

  const handleDashboard = () => {
    const dashboardUrl = process.env.REACT_APP_DASHBOARD_URL || "https://zerodha-clone-dashboard-ce0c.onrender.com";
    console.log("Redirecting to dashboard:", dashboardUrl);
    window.location.href = dashboardUrl;
  };

  if (isLoading) {
    return (
      <div className="hero-section">
        <div className="hero-content">
          <h1>Loading...</h1>
        </div>
      </div>
    );
  }

  if (username) {
  return (
    <>
      <div className="hero-section authenticated">
        <div className="hero-content">
          <h1>Welcome back, <span className="username">{username}</span>!</h1>
          <p>Ready to trade? Access your dashboard to manage your portfolio.</p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={handleDashboard}>
              Go to Dashboard
            </button>
            <button className="btn-secondary" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
  }

  // Return null or empty div for non-authenticated users
  return null;
};

export default Hero;