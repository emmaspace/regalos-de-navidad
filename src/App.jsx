import React from "react";
import { BrowserRouter } from "react-router-dom";
import AuthDataProvider from "./providers/auth-provider";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Router from "./Router";
import "./App.scss";

const darkTheme = createTheme({
  typography: { allVariants: { color: "#D3B7B0" } },
  palette: {
    mode: "dark",
    primary: { main: "#D3B7B0", contrastText: "#1B060D" },
    secondary: { main: "#B76A7C", contrastText: "#1E2B44" },
    error: { main: "#EA3F2D" },
    warning: { main: "#D7BD70" },
    info: { main: "#7DA3B5" },
    success: { main: "#49AB58" },
  },
});

/* const lightTheme = createTheme({
  palette: {
    primary: "#1B060D",
    secondary: "#1E2B44",
    error: "#B11806",
    warning: "#ED6007",
    info: "#1D7B85",
    success: "#0C824B",
  },
}); */

function App() {
  return (
    <BrowserRouter>
      <AuthDataProvider>
        <ThemeProvider theme={darkTheme}>
          <Router />
        </ThemeProvider>
      </AuthDataProvider>
    </BrowserRouter>
  );
}

export default App;
