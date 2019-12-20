import React from "react";
import "../stylesheets/App.css";
import Header from "./Header";
import PokemonList from "./PokemonList";
import api from "../api/data.json";
import Pokemon from "./Pokemon";

/* class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemons: apiData
    };
  }

  render() {
    console.log(this.state.pokemons);
    return (
      <div>
        <Header />
        <PokemonList pokemons={this.state.pokemons} />
      </div>
    );
  }
} */

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
