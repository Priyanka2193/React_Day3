import React, { useState, useEffect } from "react";

import Axios from "axios";

function Cat(props) {
  const [cat, setcat] = useState({});
  const [meme, setMeme] = useState("");
  const [displayMeme, setDisplayMeme] = useState();

  useEffect(() => {
    const id = props.match.params.id;
    fetchCat(id);
  }, [props]);

  async function fetchCat(id) {
    const url = "https://api.thecatapi.com/v1/images/" + id;
    const response = await Axios.get(url);

    const cat = response.data;
    setcat(cat);
  }
  function handlesetMeme(event) {
    setMeme(event.target.value);
  }
  function applyMeme() {
    setDisplayMeme(meme);
  }

  return (
    <div>
      <h1>Cats</h1>
      <img src={cat.url} alt="cat" />
      <p id="meme">{displayMeme}</p>
      <input type="text" onChange={handlesetMeme} value={meme} />
      <button onClick={applyMeme}>Apply Meme </button>
    </div>
  );
}

export default Cat;
