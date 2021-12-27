import React, { useState } from "react";
import auth from "./auth-manager";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = (e) => {
    e.preventDefault();
    auth("login", email, password);
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
    </>
  );
}
