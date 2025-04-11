import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api',  
});

// Interceptor para adicionar token JWT às requisições
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export const getProducts = async () => {
  const response = await axios.get(`${api}/products`); // Endpoint deve bater com o backend

  return response;
};
export const getProductById = (id: number) => api.get(`/products/${id}`);

export const addToCart = (productId: number, quantity: number) => 
  api.post('/cart', { productId, quantity });
export const login = (email: string, password: string) => 
  api.post('/login', { email, password });
export const register = (userData: { nome: string; email: string; senha: string }) => 
  api.post('/register', userData);