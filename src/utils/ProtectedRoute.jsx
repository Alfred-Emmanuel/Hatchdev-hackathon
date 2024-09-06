import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { authUser } = useAuth();

  if (!authUser) {
    return <Navigate to="/sign_in" replace />;
  }

  return children;
};

export default ProtectedRoute;
