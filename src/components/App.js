import React from "react";
import "../stylesheets/App.css";
import Header from "./Header";
import PokemonList from "./PokemonList";
import apiData from "../api/data.json";

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Header />
        <PokemonList />
      </div>
    );
  }
}

export default App;
