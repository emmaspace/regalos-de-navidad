import { Route, Routes, Navigate } from "react-router-dom";
import { useAuthDataContext } from "./auth/auth-provider";

import Home from "./Home/Home";
import LogIn from "./Login/LogIn";
import SignUp from "./SignUp/SignUp";

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
