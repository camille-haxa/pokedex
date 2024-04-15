import PropTypes from "prop-types";

function NavBar({ setPokemonIndex, pokemonList, pokemon }) {
  const handlePokemon = (index) => {
    setPokemonIndex(index);
  };
  if (pokemon.name === "pikachu") {
    alert("pika!pika!");
  }

  return (
    <div>
      {pokemonList.map((p, index) => (
        <button key={p.name} onClick={() => handlePokemon(index)}>
          {p.name}
        </button>
      ))}
    </div>
  );
}

NavBar.propTypes = {
  setPokemonIndex: PropTypes.number.isRequired,
  pokemonList: PropTypes.array.isRequired,
  pokemon: PropTypes.string,
};

export default NavBar;
