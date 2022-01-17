import {
  Link,
  Alert,
  Input,
  Button,
  Container,
  FormGroup,
  InputLabel,
  Typography,
  FormControl,
} from "@mui/material";
import { GeneralContainer } from "../styling";
import React, { useState } from "react";
import auth from "../../auth/auth-manager";
import { useAuthDataContext } from "../../providers/auth-provider";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");

  const { onLogin } = useAuthDataContext();

  const loginUser = async (e) => {
    e.preventDefault();
    let loginInfo = {};
    try {
      const res = await auth("login", email, password);
      if (res) loginInfo = res;
      else setError("Tu email o contraseña son incorrectos");
    } catch {
      setError("Algo salió mal, por favor vuelve a intentar");
    }
    onLogin(loginInfo);
  };

  return (
    <GeneralContainer>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          height: 1,
          justifyContent: "space-around",
        }}
      >
        <FormGroup
          component="form"
          sx={{ height: "80%", justifyContent: "space-around" }}
        >
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
        </FormGroup>
        <Typography component="p" sx={{ alignSelf: "center" }}>
          ¿No tienes una cuenta?
        </Typography>
        <Link
          href="/signup"
          color="secondary"
          onClick={(e) => {
            e.stopPropagation();
            e.nativeEvent.stopImmediatePropagation();
          }}
          sx={{ alignSelf: "center", fontFamily: "Roboto" }}
        >
          Regístrate
        </Link>
      </Container>
    </GeneralContainer>
  );
}
