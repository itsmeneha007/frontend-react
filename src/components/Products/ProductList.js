
import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../../utils/api';
import { useAuth } from '../../context/AuthContext';
import ProductCard from './ProductCard';

const ProductList = () => {
  const { authData } = useAuth();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetchProducts(authData.token);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    getProducts();
  }, [authData.token]);

  return (
    <div>
      <h2>Product List</h2>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;