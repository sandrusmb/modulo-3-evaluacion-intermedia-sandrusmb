import React from "react";
import Pokemon from "./Pokemon";
import "../stylesheets/PokemonList.scss";

function PokemonList(props) {
  return <ul className="container">{props.children}</ul>;
}

export default PokemonList;
