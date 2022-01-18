import { GeneralContainer } from "../custom";
import { logout } from "../../auth/auth-manager";
import React, { useEffect, useState } from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import { Button, Typography, List, ListItem, Fab } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuthDataContext } from "../../providers/auth-provider";

export default function Home() {
  const [gifts, setGifts] = useState([]);
  const [error, setError] = useState("");

  const { onLogout } = useAuthDataContext();
    const navigate = useNavigate();


  const exit = (e) => {
    e.preventDefault();
    navigate("/");
    onLogout();
    logout();
  };

  useEffect(() => {
    const controller = new AbortController();
    const options = {
      headers: { "content-type": "application/json" },
      signal: controller.signal,
      method: "GET",
    };
    setTimeout(() => controller.abort(), 5000);
    const getGifts = async () => {
      try {
        const res = await (
          await fetch("http://localhost:3004/regalos", options)
        ).json();
        setGifts(res);
      } catch (err) {
        console.log(err);
        setError("Ocurró un error al buscar tus regalos, intenta más tarde");
      }
    };
    getGifts();
  }, []);

  return (
    <GeneralContainer>
      <Typography
        gutterBottom
        variant="h1"
        component="h2"
        sx={{ marginBottom: 0, fontFamily: "Milkshake", textAlign: "center" }}
      >
        Regalos
      </Typography>
      <Fab
        size="small"
        component={Button}
        aria-label="logout"
        color="contrastText"
        sx={{ position: "absolute", top: 35, right: 35 }}
        onClick={(e) => exit(e)}
      >
        <LogoutIcon color="secondary" />
      </Fab>
      <List>
        {gifts.length > 0
          ? gifts.map((gift) => (
              <ListItem key={"gift" + gift.id} color="primary">
                {gift.name}
              </ListItem>
            ))
          : error}
      </List>
    </GeneralContainer>
  );
}
