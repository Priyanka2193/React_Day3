import React, { useState, useEffect } from "react";
import Select from "react-select";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  const [categories, setCategories] = useState([]);
  const [category, setcategory] = useState({});
  const [catResults, setCatResults] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, [categories]);

  async function fetchCategories() {
    const url = "https://api.thecatapi.com/v1/categories";
    const response = await axios.get(url);
    const newCategories = response.data;
    const selectorOptions = newCategories.map(
      (category, index) =>
        (category = {
          label: category.name,
          id: category.id
        })
    );
    setCategories(selectorOptions);
  }

  async function handleSetCategories(Selected) {
    setcategory(Selected);
    const url = "https://api.thecatapi.com/v1/images/search?category_ids=1";

    const response = await axios.get(url);
    const newCatResults = response.data;
    setCatResults(newCatResults);
  }

  return (
    <div>
      <h1>Cat world</h1>

      <Select options={categories} onChange={handleSetCategories} />
      <div>
        <h2>Search Results</h2>
        {catResults.map(catResult => (
          <Link key={catResult.id} to={"/cats/" + catResults.id}>
            <img src={catResult.url} key={catResult.id} alt="cats" />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
