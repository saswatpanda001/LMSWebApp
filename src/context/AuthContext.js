// context/AuthContext.js
import { createContext, useState, useEffect } from 'react';
import api from '../api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  // Check auth status on app load
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const { data } = await api.get('/auth/verify/'); 
        setUser(data.user);
        setIsAuthenticated(true);
      } catch (err) {
        console.error("Not authenticated");
      } finally {
        setLoading(false);
      }
    };
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, loading }}>
      {children}
    </AuthContext.Provider>
  );
};