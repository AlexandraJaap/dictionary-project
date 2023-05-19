import React from "react";
import Phonetic from "./Phonetic";
import Meaning from "./Meaning";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        {props.results.map(function (definition, index) {
          return (
            <div key={index}>
              <section>
                <h2>{definition.word}</h2>
                <div>
                  {definition.phonetics.map(function (phonetic, index) {
                    return (
                      <div key={index}>
                        <Phonetic phonetic={phonetic} />
                      </div>
                    );
                  })}
                </div>
              </section>
              <br />
              <section>
                {definition.meanings.map(function (meaning, index) {
                  return <Meaning meaning={meaning} key={index} />;
                })}
              </section>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
