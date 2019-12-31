import React from "react";
import "../stylesheets/App.css";
import Header from "./Header";
import PokemonList from "./PokemonList";
import api from "../api/data.json";
import Pokemon from "./Pokemon";

/* class App extends React.Component {
  constructor() {
    super();
    this.state = { data: api }
  }

  render() {
    return (
      <div>
        <Header />
        <PokemonList>
          {this.state.data.map(pokemon => {
            return <Pokemon image={pokemon.url} name={pokemon.name} types={pokemon.types} />;
          })}
        </PokemonList>
      </div>
    );
  }
}

export default App; */

function App() {
  return (
    <div>
      <Header />
      <PokemonList data={api} />
    </div>
  );
}

export default App;
