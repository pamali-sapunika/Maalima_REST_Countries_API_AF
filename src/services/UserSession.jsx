// UserSession.js
import { useState, useEffect } from 'react';

export const useUserSession = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if user session exists in localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // Parse and set user data from localStorage
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user'); // Remove session from localStorage
    setUser(null); // Clear user state
  };

  return {
    user,
    setUser,
    handleLogout
  };
};
