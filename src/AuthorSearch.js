import React, { useState, useEffect } from "react";
import axios from "axios";

export default function AuthorSearch(props) {
  // console.log(props.code);
  let [authorName, setAuthorName] = useState();
  let [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);
  }, [props.code]);

  function handleResponse(response) {
    setAuthorName(response.data.name);
    setLoaded(true);
  }

  function Search() {
    let apiUrl = `https://openlibrary.org${props.code}.json`;

    axios.get(apiUrl).then(handleResponse);
  }
  if (loaded) {
    return (
      <div className="AuthorSearch">
        <h3>
          <span>Author(s): </span> {authorName}
        </h3>
      </div>
    );
  } else {
    Search();
    return null;
  }
}
