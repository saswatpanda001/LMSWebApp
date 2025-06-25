
import { createContext, useState, useEffect } from 'react';
import api from '../api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, loading, setUser, setIsAuthenticated, setLoading}}>
      {children}
    </AuthContext.Provider>
  );
};