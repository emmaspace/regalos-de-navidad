import { Route, Routes, Navigate } from "react-router-dom";
import { useAuthDataContext } from "./providers/auth-provider";

import Home from "./Components/Home/Home";
import LogIn from "./Components/Login/LogIn";
import SignUp from "./Components/SignUp/SignUp";

function PrivateRoute({ children }) {
  const { email } = useAuthDataContext();
  return email ? children : <Navigate to="/login" />;
}

function PublicRoute({ children }) {
  const { email } = useAuthDataContext();
  return !email ? children : <Navigate to="/" />;
}

export default function Router() {
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
      <Route
        exact
        path="/login"
        element={
          <PublicRoute>
            <LogIn />
          </PublicRoute>
        }
      />
      <Route
        exact
        path="/signup"
        element={
          <PublicRoute>
            <SignUp />
          </PublicRoute>
        }
      />
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}
