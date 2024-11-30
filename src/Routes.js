import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import ProductList from './components/Products/ProductList';
import { useAuth } from './context/AuthContext';

const RoutesComponent = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      <Route path="/" element={isAuthenticated ? <Navigate to="/products" /> : <Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/products"
        element={isAuthenticated ? <ProductList /> : <Navigate to="/" />}
      />
    </Routes>
  );
};

export default RoutesComponent;