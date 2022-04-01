import React, { useState } from "react";
import "./Search.css";
import axios from "axios";
import Results from "./Results";

export default function Search() {
  let [ISBN, setISBN] = useState();
  let [results, setResults] = useState({ ready: false });

  function showISBN(response) {
    console.log(response);
    setResults({
      ready: true,
      title: response.data.title,
      publishDate: response.data.publish_date,
      publishers: response.data.publishers,
      authors: response.data.authors[0].key,
    });
    // console.log(results);
  }
  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://openlibrary.org/isbn/${ISBN}.json`;

    axios.get(url).then(showISBN);
  }

  function updateISBN(event) {
    setISBN(event.target.value);
  }
  if (results.ready) {
    return (
      <div className="search">
        <div className="searchForm">
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Enter an ISBN..."
              onChange={updateISBN}
            />
            <button type="Submit">Search</button>
          </form>
        </div>
        <Results results={results} />
      </div>
    );
  } else {
    return (
      <div className="search">
        <div className="searchForm">
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Enter an ISBN..."
              onChange={updateISBN}
            />
            <button type="Submit">Search</button>
          </form>
        </div>
      </div>
    );
  }
}
