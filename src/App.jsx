import { useState } from "react";
import PokemonCard from "./components/Pokemoncard";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },

  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },

  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  const handlePrevious = () => {
    setPokemonIndex(pokemonIndex - 1);
  };

  const handleNext = () => {
    setPokemonIndex(pokemonIndex + 1);
  };

  return (
    <div>
      <div>
        <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      </div>
      {pokemonIndex > 0 ? (
        <button onClick={handlePrevious}>précédent</button>
      ) : (
        ""
      )}

      {pokemonIndex < pokemonList.length - 1 ? (
        <button onClick={handleNext}>suivant</button>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
