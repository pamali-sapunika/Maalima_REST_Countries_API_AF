import { useState, useEffect } from 'react';

export const useUserSession = () => {
  const [user, setUserState] = useState(null);

  // Check if user session exists in localStorage
  useEffect(() => {
    const stored = localStorage.getItem('user');
    if (stored) {
      setUserState(JSON.parse(stored)); // Parse and set user data from localStorage
    }
  }, []);

  const setUser = (userData) => {
    localStorage.setItem('user', JSON.stringify(userData));
    setUserState(userData);
  };

  const handleLogout = () => {
    localStorage.removeItem('user'); // Remove session from localStorage
    setUserState(null); // Clear user state
  };

  return { user, setUser, handleLogout };
};

