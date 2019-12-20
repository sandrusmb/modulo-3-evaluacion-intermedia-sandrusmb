import React from "react";
import Pokemon from "./Pokemon";
import "../stylesheets/PokemonList.scss";

function PokemonList(props) {
  return (
    <ul className="container">
      <p>{props.children}</p>
      <p>{props.name}</p>
      <p>{props.types}</p>
      <Pokemon />
    </ul>
  );
}

export default PokemonList;
