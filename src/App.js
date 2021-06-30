import { useState, useEffect } from 'react';

import Axios from 'axios';

import pokebolaImg from './assets/pokebola.png';

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    async function getPokemons() {
      const response = await Axios.get('https://pokeapi.co/api/v2/pokemon/');

      setPokemons(response.data.results)
    }

    getPokemons();
  }, [])

  return (
    <div className="container">
      <header className="header">
        <div className="logo">
          <img src={pokebolaImg} alt="Pokebola" />
          <h1>POKEDEX</h1>
        </div>
      </header>
      <main>
        <div className="content">
          {pokemons.map(pokemon => {
            const numberPokemon = pokemon.url.replace('https://pokeapi.co/api/v2/pokemon/', '').replace('/', '')
            const imgUrl = `https://pokeres.bastionbot.org/images/pokemon/${numberPokemon}.png`
            return(
            <div key={pokemon.name} className="card">
              <img src={imgUrl} alt="Foto Pokemon"/>
              <strong>{pokemon.name}</strong>
            </div>
          )
          })}
        </div>
      </main>
    </div>
  );
}

export default App;


