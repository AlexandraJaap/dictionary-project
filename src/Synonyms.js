import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="Synonyms">
        <span className="synonyms-heading">Synonyms: </span>
        {props.synonyms.map(function (synonym, index) {
          return <span key={index}>{synonym}</span>;
        })}
      </div>
    );
  } else {
    return null;
  }
}
