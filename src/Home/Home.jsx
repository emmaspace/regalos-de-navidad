import { helpHTTP } from "../helpers/helpHTTP";
import React, { useEffect, useState } from "react";

import "./Home.scss"

export default function Home() {
  const [gifts, setGifts] = useState([]);
  useEffect(() => {
    helpHTTP()
      .get("http://localhost:3004/regalos")
      .then((res) => setGifts(res))
      .catch((err) => console.log(err));
  }, []);
  return (
    <main>
      <h1>Regalos:</h1>
      <ul>
        {gifts.map((gift) => (
          <li key={"gift" + gift.id}>{gift.name}</li>
        ))}
      </ul>
    </main>
  );
}
