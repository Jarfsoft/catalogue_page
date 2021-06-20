async function getPokemon(name) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`,
    { mode: 'cors' });
  const data = await response.json();

  return data;
}

const returnInfo = (name) => {
  getPokemon(name).then((data) => {
    return data;
  });
};

export default returnInfo;