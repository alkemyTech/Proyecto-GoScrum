import React, { useState } from "react";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email || !password) {
      alert(
        "Es indispensable que para que aprendas cosas interesantes que completes"
      );
    } else {
      window.location = "http://cybermap.kaspersky.com";
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Iniciar sesión</h1>
        <div>
          <label>Email</label>
          <input
            name="email"
            type="text"
            value={email}
            onChange={(event) => setEmail(event.currentTarget.value)}
          />
        </div>
        <div>
          <label>Contraseña</label>
          <input
            name="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.currentTarget.value)}
          />
        </div>
        <div>
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  );
};
