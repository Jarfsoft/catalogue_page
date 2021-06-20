const getPokemon = (id, pushPokemon) => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id.toString()}`).then((response) => response.json()).then((data) => pushPokemon(data));
};

export default getPokemon;
