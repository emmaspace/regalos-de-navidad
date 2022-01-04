import React from "react";
import { BrowserRouter } from "react-router-dom";
import AuthDataProvider from "./Prueba/auth-provider";

import Router from "./Router";

function App() {
  return (
    <BrowserRouter>
      <AuthDataProvider>
        <Router />
      </AuthDataProvider>
    </BrowserRouter>
  );
}

export default App;
