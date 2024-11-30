import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:3000/api' });

export const loginUser = (data) => API.post('/auth/login', data);
export const signupUser = (data) => API.post('/auth/signup', data);
export const fetchProducts = (token) => API.get('/products', { headers: { Authorization: `Bearer ${token}` } });
export const createProduct = (token, product) =>
  API.post('/products', product, { headers: { Authorization: `Bearer ${token}` } });
export const updateProduct = (token, id, product) =>
  API.put(`/products/${id}`, product, { headers: { Authorization: `Bearer ${token}` } });
export const deleteProduct = (token, id) =>
  API.delete(`/products/${id}`, { headers: { Authorization: `Bearer ${token}` } });