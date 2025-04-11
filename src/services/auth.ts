import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { UserRegister, LoginCredentials, AuthResponse } from '../../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly apiUrl = `${environment.apiUrl}/auth`; 

  constructor(private http: HttpClient) {}

  // Cadastro de usuário
  register(userData: UserRegister): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/register`, userData);
  }

  // Login de usuário
  login(credentials: LoginCredentials): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/login`, credentials);
  }

  // Verifica se o usuário está autenticado (opcional)
  isAuthenticated(): boolean {
    return !!localStorage.getItem('authToken'); // Verifica se existe token
  }

  // Logout (opcional)
  logout(): void {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
  }
}