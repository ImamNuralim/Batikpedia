import React, { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {

    const [isLoggedIn, setIsLoggedIn] = useState(() => {
      const storedIsLoggedIn = localStorage.getItem('isLoggedIn');
      return storedIsLoggedIn ? JSON.parse(storedIsLoggedIn) : false;
    });

    useEffect(() => {
      localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));
    }, [isLoggedIn]);

    return (
      <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        {children}
      </AuthContext.Provider>
    );
  };