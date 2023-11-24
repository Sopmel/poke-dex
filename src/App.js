import "./App.css";
import { useEffect, useState } from "react";
import PokemonApplication from "./PokemonApplication";
import Pokemon from "./Pokemon";

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      let pokemon = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
      let json = await pokemon.json();
      setList();
      //console.log(json);
    };
    fetchPokemon();
  });

  return (
    <div className="App">
      <PokemonApplication list={list} setList={setList} />
      <Pokemon list={list} setList={setList} />
    </div>
  );
}

export default App;
