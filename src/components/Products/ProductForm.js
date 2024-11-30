import React, { useState } from 'react';
import { createProduct } from '../../utils/api';
import { useAuth } from '../../context/AuthContext';

const ProductForm = () => {
  const [product, setProduct] = useState({ name: '', price: '', description: '' });
  const { authData } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createProduct(authData.token, product);
      alert('Product created successfully');
      setProduct({ name: '', price: '', description: '' });
    } catch (error) {
      console.error('Error creating product:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={product.name}
        onChange={handleChange}
        placeholder="Product Name"
        required
      />
      <input
        type="number"
        name="price"
        value={product.price}
        onChange={handleChange}
        placeholder="Price"
        required
      />
      <textarea
        name="description"
        value={product.description}
        onChange={handleChange}
        placeholder="Description"
        required
      />
      <button type="submit">Create Product</button>
    </form>
  );
};

export default ProductForm;