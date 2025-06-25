import { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import api from './api';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';

const ProtectedRoute = ({ allowedRoles }) => {
  const {setUser,setIsAuthenticated,setLoading,loading,isAuthenticated,user} = useContext(AuthContext);



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

  return <Outlet context={{ user }} />;
};

export default ProtectedRoute;