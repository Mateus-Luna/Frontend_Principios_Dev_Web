// Dados para cadastro
export interface UserRegister {
    name: string;
    email: string;
    password: string;
    confirmPassword?: string; // Apenas para validação no front
  }
  
  // Dados para login
  export interface LoginCredentials {
    email: string;
    password: string;
  }
  
  export interface AuthResponse {
    user?: {
      id: string;
      name: string;
      email: string;
    };
    token?: string;
    message?: string; // Para erros
  }