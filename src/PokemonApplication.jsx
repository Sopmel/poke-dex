import { useEffect, useState } from "react";
import Pokemon from "./Pokemon";

const PokemonApplication = (props) => {
  const [showList, setShowList] = useState(false);
  const [pkmnInfo, setPkmnInfo] = useState([]);

useEffect(() => {
    const pokemonData = async () => {
      let data = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${props.list.i}`
      );
      let response = await data.json();
      setPkmnInfo(response);
    };
    pokemonData();
},[])

  return (
    <div>
      <button
        onClick={() => {
          setShowList(!showList);
        }}
      >
        Start App
      </button>
      <select>
        {showList &&
          props.list.map((pokemonObj) => {
            return (
              <option value={pokemonObj.url} >
                {pokemonObj.name}
              </option>
            );
          })}
      </select>
      <button>Load pokédex</button>
      <Pokemon
        pkmnInfo={pkmnInfo}
        setPkmnInfo={setPkmnInfo}
        
      />
    </div>
  );
};

export default PokemonApplication;
