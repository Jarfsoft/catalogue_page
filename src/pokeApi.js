const getPokemon = (id, setPokemon) => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id.toString()}`).then((response) => response.json()).then((data) => setPokemon(data));
};

function getPokemons(start, type, setInfo) {
  const list = [];
  for (let i = start; list.length < 12; i += 1) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${i}`).then((response) => response.json()).then((data) => {
      if (data.types[0].type.name === type) {
        list.push(i);
        if (list.length === 12 || i === start + 200) {
          setInfo(list);
        }
      }
    });
    if (i === start + 350) break;
  }
}

export { getPokemon, getPokemons };
