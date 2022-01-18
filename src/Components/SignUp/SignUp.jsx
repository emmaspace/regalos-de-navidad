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

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const createUser = async (e) => {
    e.stopPropagation();
    e.preventDefault();
    let signup = {};
    try {
      const res = await auth("signup", email, password, name);
      if (res) {
        signup = res;
        navigate("/");
      } else setError("Algo salió mal, por favor vuelve a intentar");
    } catch {
      setError("Algo salió mal, por favor vuelve a intentar");
    }
    return signup;
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
          sx={{ height: "80%", justifyContent: "space-around" }}
        >
          <Typography
            gutterBottom
            variant="h3"
            component="h2"
            sx={{ marginBottom: 0 }}
          >
            Registro:
          </Typography>
          {error ? <Alert severity="error">{error}</Alert> : null}

          <FormControl>
            <InputLabel htmlFor="name">Name</InputLabel>
            <Input
              id="name"
              required
              type="text"
              variant="standard"
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>

          <FormControl>
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
              id="password"
              required
              type="password"
              variant="standard"
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>

          <Button
            component="button"
            size="large"
            color="primary"
            variant="outlined"
            onClick={(e) => createUser(e)}
            sx={{ borderRadius: "20px", width: 2 / 3, alignSelf: "center" }}
          >
            Enviar
          </Button>
        </FormGroup>
        <Typography component="p" sx={{ alignSelf: "center" }}>
          ¿Ya tienes una cuenta?
        </Typography>
        <Typography
          color="secondary"
          sx={{ alignSelf: "center", fontFamily: "Roboto" }}
          to="/login"
          component={Link}
        >
          Inicia sesión
        </Typography>
      </Container>
    </GeneralContainer>
  );
}
