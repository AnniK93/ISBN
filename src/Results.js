import React from "react";
import "./Results.css";
import AuthorSearch from "./AuthorSearch";

//9781846256493

//9780802408143

//9783724524663

//9781784986841

export default function Results(props) {
  //console.log(props);
  return (
    <div className="Results">
      <div className="row">
        <div className="col-6">
          <h2>{props.results.title}</h2>
          <ul>
            <li>
              <AuthorSearch code={props.results.authors} />
            </li>
            <li>
              <h3>
                <span>Publisher: </span>
                {props.results.publishers}
              </h3>
            </li>
            <li>
              <h3>
                <span>Date of publishing: </span>
                {props.results.publishDate}
              </h3>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
