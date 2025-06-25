
import { createContext, useState, useEffect } from 'react';
import api from '../api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const checkAuth = async () => {
      try {
        const { data } = await api.get('/auth/api/verify/'); 
        setUser(data.user);
        setIsAuthenticated(true);
      } catch (err) {
        console.error("Not authenticated");
      } finally {
        setLoading(false);
      }
    };


  // Check auth status on app load
  useEffect(() => {
    checkAuth()
  }, []);

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, loading }}>
      {children}
    </AuthContext.Provider>
  );
};