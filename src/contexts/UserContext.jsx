/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useEffect, useState } from "react";

const UserContext = createContext({
  user: null,
  setUser: (user) => { },
  isLoggedIn: false,
  setIsLoggedIn: (isLoggedIn) => { },
});


const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // For fetch user 
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsLoggedIn(true);
    }
  }, []);

  // For update user and login state
  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  // Logout 
  const handleLogout = () => {
    setUser(null);
    setIsLoggedIn(false);
    localStorage.removeItem('user');
  }

  const value = {
    user,
    setUser,
    isLoggedIn,
    setIsLoggedIn,
    handleLogin,
    handleLogout
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
export { UserContext, UserProvider };

