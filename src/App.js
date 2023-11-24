import "./App.css";
import { useEffect, useState } from "react";
import PokemonApplication from "./PokemonApplication";
import Pokemon from "./Pokemon";

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        let response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
        let data = await response.json();
        setList(data.results);
      } catch (error) {
        console.error("Error fetching Pokemon:", error);
      }
    };

    fetchPokemon();
  }, []); // Pass an empty dependency array to ensure useEffect runs only once on mount

  return (
    <div className="App">
      <PokemonApplication list={list} setList={setList} />
      <Pokemon list={list} setList={setList} />
    </div>
  );
}

export default App;
