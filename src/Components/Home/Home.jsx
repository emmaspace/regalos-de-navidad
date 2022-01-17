import { Typography } from "@mui/material";
import { GeneralContainer } from "../styling";
import React, { useEffect, useState } from "react";
import { List, ListItem } from "@mui/material";

import "./Home.scss";

export default function Home() {
  const [gifts, setGifts] = useState([]);
  const [error, setError] = useState("");

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
        variant="h3"
        component="h2"
        sx={{ marginBottom: 0 }}
      >
        Regalos
      </Typography>
      <List>
        {gifts.length > 0
          ? gifts.map((gift) => <ListItem key={"gift" + gift.id}>{gift.name}</ListItem>)
          : error}
      </List>
    </GeneralContainer>
  );
}
