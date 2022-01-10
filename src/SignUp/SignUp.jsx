import React, { useState } from "react";
import auth from "../auth/auth-manager";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const createUser = async (e) => {
    e.preventDefault();
    let signup = {};
    try {
      const res = await auth("login", email, password);
      if (res) signup = res;
      else setError("Something went wrong");
      // navigate to home
    } catch {
      setError("Something went wrong");
    }
    return signup;
  }
  
  return (
    <>
      <h1>SignUp:</h1>
      <p>{error}</p>
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
