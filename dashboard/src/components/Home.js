import React from "react";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = ({ username, handleLogout }) => {
  return (
    <>
      <TopBar username={username} handleLogout={handleLogout} />
      <Dashboard />
    </>
  );
};

export default Home;
