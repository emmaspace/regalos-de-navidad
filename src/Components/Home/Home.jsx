import { Typography } from "@mui/material";
import { GeneralContainer } from "../styling";
import React, { useEffect, useState } from "react";

import "./Home.scss"

export default function Home() {
  const [gifts, setGifts] = useState([]);
  useEffect(() => {
    const controller = new AbortController();
    const options = {
      headers: { "content-type": "application/json" },
      signal: controller.signal,
      method: "GET",
    };
    setTimeout(() => controller.abort(), 5000);
    fetch("http://localhost:3004/regalos", options)
      .then((res) => setGifts(res))
      .catch((err) => console.log(err));
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
      <ul>
        {gifts.map((gift) => (
          <li key={"gift" + gift.id}>{gift.name}</li>
        ))}
      </ul>
    </GeneralContainer>
  );
}
