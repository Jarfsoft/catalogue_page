function getPokemon(name, setInfo) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then((response) => response.json()).then((data) => {
    console.log(data);
    setInfo(data);
  });
}

export default getPokemon;
