import React from "react";

import { useState } from "react";
import { login } from "../services/api";
import "./Login.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await login(email, password);
      localStorage.setItem("token", response.data.token);
      navigate("/");
    } catch (error) {
      alert("Credenciais inválidas!");
    }
  };

  return (
    //<form onSubmit={handleSubmit}>
    //  <input
    //    type="email"
    //    value={email}
    //    onChange={(e) => setEmail(e.target.value)}
    //  />
    //  <input
    //    type="password"
    //    value={password}
    //    onChange={(e) => setPassword(e.target.value)}
    //  />
    //  <button type="submit">Login</button>
    //</form>
    <div className="container">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Senha</label>
          <input
            type="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Entrar</button>
        </form>
        <a href="#" className="forgot-password">
          Esqueci minha senha
        </a>
      </div>
    </div>
  );
}
