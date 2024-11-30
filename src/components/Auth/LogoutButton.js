import React from 'react';
import { useAuth } from '../../context/AuthContext';

const LogoutButton = () => {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    window.location.href = '/';
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;