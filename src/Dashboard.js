import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate(); // ✅ react-router-dom v6 hook

  useEffect(() => {
    document.title = 'Dashboard'; // set page title
  }, []);

  const onLogout = () => {

    localStorage.removeItem('token');
    // localStorage.removeItem("isLoggedIn");

    navigate('/');
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Dashboard</h1>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;



