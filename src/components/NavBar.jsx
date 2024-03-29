function NavBar({ pokemonIndex, pokemonList, handlePrevious, handleNext }) {
  return (
    <div>
      {pokemonIndex > 0 ? (
        <button onClick={handlePrevious}>Précédent</button>
      ) : null}
      {pokemonIndex < pokemonList.length - 1 ? (
        <button onClick={handleNext}>Suivant</button>
      ) : null}
    </div>
  );
}

export default NavBar;
