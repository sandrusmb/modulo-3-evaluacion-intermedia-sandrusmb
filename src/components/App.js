import React from "react";
import "../stylesheets/App.css";
import Header from "./Header";
import PokemonList from "./PokemonList";
import api from "../api/data.json";
import Pokemon from "./Pokemon";

function App() {
  return (
    <div>
      <Header />
      <PokemonList>
        {api.map(api => {
          return <Pokemon image={api.url} name={api.name} types={api.types} />;
        })}
      </PokemonList>
    </div>
  );
}

export default App;
