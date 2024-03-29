function NavBar({ setPokemonIndex, pokemonList }) {
  const handlePokemon = (index) => {
    setPokemonIndex(index);
  };

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

export default NavBar;
