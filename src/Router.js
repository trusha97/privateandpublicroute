import React from 'react';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';
import FourZeroFour from './FourZeroFour';

const getToken = () => localStorage.getItem('token');

// PrivateRoute: requires token, otherwise to /login
const PrivateRoute = ({ children }) => {
  const token = getToken();
  const location = useLocation();
  return token
    ? children
    : <Navigate to="/login" replace state={{ from: location }} />;
};

// PublicRoute: if token exists, redirect to dashboard, otherwise show children
const PublicRoute = ({ children }) => {
  return getToken()
    ? <Navigate to="/dashboard" replace />
    : children;
};

const Router = () => {
  return (
    <Routes>
      {/* ===== Root ===== */}
      <Route
        path="/"
        element={
          getToken()
            ? <Navigate to="/dashboard" replace />
            : <Navigate to="/login" replace />
        }
      />

      {/* ===== Public Routes ===== */}
      <Route
        path="/login"
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />
      <Route
        path="/register"
        element={
          <PublicRoute>
            <Register />
          </PublicRoute>
        }
      />

      {/* ===== Private Route ===== */}
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />

      {/* ===== 404 Page ===== */}
      <Route path="*" element={<FourZeroFour />} />
    </Routes>
  );
};

export default Router;
