import React, { useState } from "react";
import auth from "./auth-manager";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createUser = (e) => {
    e.preventDefault();
    auth("signup", email, password);
  }
  
  return (
    <>
      <h1>SignUp:</h1>
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
      <button onClick={(e) => /* console.log("Holi") */createUser(e)}>Enviar</button>
    </>
  );
}
