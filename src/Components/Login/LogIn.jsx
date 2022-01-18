import {
  Alert,
  Input,
  Button,
  Container,
  FormGroup,
  InputLabel,
  Typography,
  FormControl,
} from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../auth/auth-manager";
import { GeneralContainer } from "../custom";
import { useAuthDataContext } from "../../providers/auth-provider";

/* const disableAllUserEvents = () => {
  const events = [
    "click",
    /* "contextmenu",
    "dblclick",
    "mousedown",
    "mouseenter",
    "mouseleave",
    "mousemove",
    "mouseover",
    "mouseout",
    "mouseup",
    "keydown",
    "keypress",
    "keyup",
    "blur",
    "change",
    "focus",
    "focusin",
    "focusout",
    "input",
    "invalid",
    "reset",
    "search",
    "select",
    "submit",
    "drag",
    "dragend",
    "dragenter",
    "dragleave",
    "dragover",
    "dragstart",
    "drop",
    "copy",
    "cut",
    "paste",
    "mousewheel",
    "wheel",
    "touchcancel",
    "touchend",
    "touchmove",
    "touchstart", 
  ];

  const handler = (event) => {
    event.stopPropagation();
    event.preventDefault();

    return false;
  };

  for (let i = 0, l = events.length; i < l; i++) {
    document.addEventListener(events[i], handler, true);
  }

  return () => {
    for (let i = 0, l = events.length; i < l; i++) {
      document.removeEventListener(events[i], handler, true);
    }
  };
};

disableAllUserEvents(); */

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");

  const { onLogin } = useAuthDataContext();
  const navigate = useNavigate();

  const loginUser = async (e) => {
    e.preventDefault();
    let loginInfo = {};
    try {
      const res = await auth("login", email, password);
      if (res) {
        loginInfo = res;
        navigate("/");
      } else setError("Tu email o contraseña son incorrectos");
    } catch {
      setError("Algo salió mal, por favor vuelve a intentar");
    }
    onLogin(loginInfo);
  };

  return (
    <GeneralContainer>

        {/* <FormGroup
          component="form"
          sx={{ height: "80%", justifyContent: "space-around" }}
        > */}
          <Typography
            gutterBottom
            variant="h3"
            component="h2"
            sx={{ marginBottom: 0 }}
          >
            Iniciar sesión:
          </Typography>
          {error ? <Alert severity="error">{error}</Alert> : null}

          <FormControl color="primary">
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input
              id="email"
              required
              type="email"
              variant="standard"
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>

          <FormControl>
            <InputLabel htmlFor="password">Contraseña</InputLabel>
            <Input
              required
              id="password"
              type="password"
              variant="standard"
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>

          <Button
            size="large"
            color="primary"
            variant="outlined"
            onClick={(e) => loginUser(e)}
            sx={{ borderRadius: "20px", width: 2 / 3, alignSelf: "center" }}
          >
            Enviar
          </Button>
        {/* </FormGroup> */}
        <Typography component="p" sx={{ alignSelf: "center" }}>
          ¿No tienes una cuenta?
        </Typography>
        <Typography
          color="secondary"
          sx={{ alignSelf: "center", fontFamily: "Roboto" }}
          to="/signup"
          component={Link}
        >
          Regístrate
        </Typography>

    </GeneralContainer>
  );
}
