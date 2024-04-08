import useFecthCharacters from './hooks/useFecthCharacters.js';
import Card from './components/Card.jsx';
import './App.css';

function App() {
  const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/1';
  const urlRick = 'https://rickandmortyapi.com/api/character/1';
  const pokemon = useFecthCharacters(urlPokemon);
  const rickMorty = useFecthCharacters(urlRick)
  
  
  return (
    <>
      <h2>Personaje Pokemon</h2>
        <Card character={pokemon.character} image={pokemon.image}/>
      
        <h2>Personaje Rick and Morty</h2>
        <Card character={rickMorty.character} image={rickMorty.image} />
        
    </>
  );
}

export default App;
