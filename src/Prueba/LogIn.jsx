import auth from "./auth-manager";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useAuthDataContext } from "./auth-provider";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { onLogin } = useAuthDataContext();

  const loginUser = async (e) => {
    e.preventDefault();
    let loginInfo = {};
    try {
      const res = await auth("login", email, password);
      if (res) loginInfo = res;
      else setError("Please check your email and password");
      // navigate to home
    } catch {
      setError("Please check your email and password");
    }
    onLogin(loginInfo);
  };

  return (
    <>
      <h1>LogIn:</h1>
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
      <button onClick={(e) => loginUser(e)}>
        Enviar
      </button>
      <p>¿No tienes una cunta?</p>
      <Link to="/signup">
        Regístrate
      </Link>
    </>
  );
}
