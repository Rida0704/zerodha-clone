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
    window.location.href = process.env.REACT_APP_DASHBOARD_URL || "http://localhost:3001";
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

  return (
    <>
      <div className="hero-section">
        <div className="hero-content">
          <h1>India's biggest stock broker by retail equity volumes</h1>
          <p>Trade with confidence on India's most trusted trading platform</p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={handleDashboard}>
              Go to Dashboard
            </button>
            <button className="btn-secondary" onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Hero;