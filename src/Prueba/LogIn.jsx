import React, { useState } from "react";
import auth from "./auth-manager";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = (e) => {
    e.preventDefault();
    auth("login", email, password);
  };
  const verUsuario = (e) => {
    e.preventDefault();
    const signup = "http://localhost:3004/users";
    const controller = new AbortController();
    const options = {
      headers: { "content-type": "application/json" },
      // body: JSON.stringify({ email, password }),
      signal: controller.signal,
      method: "GET",
    };
    setTimeout(() => controller.abort(), 5000);
    return fetch(`http://localhost:3004/users?email=${email}`, options)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h1>LogIn:</h1>
      <label forhtml="email">Email:</label>
      <input
        type="text"
        id="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <label forhtml="password">Password:</label>
      <input
        type="password"
        id="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={(e) => /* console.log("Holi") */ loginUser(e)}>
        Enviar
      </button>
      <button onClick={(e) => /* console.log("Holi") */ verUsuario(e)}>
        Ver Usuario
      </button>
    </>
  );
}
