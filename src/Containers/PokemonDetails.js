import { React, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { getPokemon } from '../pokeApi';
import './PokemonDetails.css';

function PokemonDetails() {
  const params = useParams();

  const capitalize = (s) => {
    if (typeof s !== 'string') return '';
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  const [data, setData] = useState();

  useEffect(() => {
    getPokemon(params.id, setData);
  }, []);

  return (
    <div className="poke-details">
      <div className="poke-details-card">
        <div className="profile">
          <h1>{data ? capitalize(data.name) : ''}</h1>
          <img src={data ? data.sprites.front_default : ''} alt="Pokemon sprite" />
        </div>
        <div className="details-data">
          <p className="item1">
            <b>ID:</b>
            {data ? data.id : ''}
          </p>
          <p className="item2">
            <b>Type:</b>
            {data ? capitalize(data.types[0].type.name) : ''}
          </p>
          <p className="item3">
            <b>Height:</b>
            {data ? `${data.height} ft` : ''}
          </p>
          <p className="item4">
            <b>Weight:</b>
            {data ? `${data.weight} lb` : ''}
          </p>
          <div className="item5">
            <b>Abilities:</b>
            <br />
            <div className="abilities">
              <ul>
                {data ? data.moves.slice(0, 10).map((p) => <li key={p.move.name}>{p.move.name}</li>) : ''}
              </ul>
            </div>
          </div>
        </div>
        <Link to="/">Back</Link>
      </div>
    </div>
  );
}

export default PokemonDetails;
