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

export const getProducts = () => api.get('/produtos');
export const getProductById = (id: number) => api.get(`/produtos/${id}`);
export const addToCart = (productId: number, quantity: number) => 
  api.post('/carrinho', { productId, quantity });
export const login = (email: string, password: string) => 
  api.post('/login', { email, password });
export const register = (userData: { nome: string; email: string; senha: string }) => 
  api.post('/registro', userData);