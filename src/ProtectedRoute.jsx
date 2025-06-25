import { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import api from './api';

const ProtectedRoute = ({ allowedRoles }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const verifyAuth = async () => {
      try {
        const response = await api.get('/auth/api/verify/');
        setUser(response.data.user);
        
        if (allowedRoles && !allowedRoles.includes(response.data.user.role)) {
          setIsAuthenticated(false);
        } else {
          setIsAuthenticated(true);
        }
      } catch (error) {
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };


  useEffect(() => {
    verifyAuth();
  }, [allowedRoles]);

  if (loading) {
    return (<div>Loading...</div>); // Or a spinner
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet context={{ user }} />; // Pass user data to child routes
};

export default ProtectedRoute;