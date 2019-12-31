import React from "react";
import "../stylesheets/PokemonList.scss";
import Pokemon from "./Pokemon";

/* function PokemonList(props) {
  return (
    <ul className="container">
      <p>{props.children}</p>
    </ul>
  );
}

export default PokemonList; */

function PokemonList(props) {

  console.log(props.data[0].name);
  return (
    <ul >
      {props.data.map(pokemon => {
        return (
          <Pokemon name={pokemon.name} image={pokemon.url} types={pokemon.types} />
        )
      })}

    </ul>
  );
}

export default PokemonList;
