import { useEffect, useState } from "react";
import Pokemon from "./Pokemon";

const PokemonApplication = (props) => {
  const [showList, setShowList] = useState(false);
  const [pkmnInfo, setPkmnInfo] = useState(null); // Initialize pkmnInfo as null

  useEffect(() => {
    const pokemonData = async () => {
      if (props.list.length > 0) { // Check if the props.list is not empty
        let data = await fetch(props.list[0].url); // Access the first element in the list
        let response = await data.json();
        setPkmnInfo(response);
      }
    };
    pokemonData();
  }, [props.list]); // Add props.list as a dependency to useEffect

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
          props.list.map((pokemonObj, index) => { // Add index parameter for the key attribute
            return (
              <option key={index} value={pokemonObj.url}>
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
