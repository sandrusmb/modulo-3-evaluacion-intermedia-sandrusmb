import React from "react";
import "../stylesheets/Pokemon.scss";

function Pokemon(props) {
  return (
    <li className="card">
      <img src={props.url} alt={props.name} />
      <p>{props.name}</p>
      <p>{props.types}</p>
    </li>
  );
}

export default Pokemon;
