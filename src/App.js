import logo from './logo.svg';
import './App.css';
import {CounterDisplay} from "./components/CounterDisplay";
import {PokemonDisplay} from "./components/PokemonDisplay";


function App() {

  return (
    <>
      <h1>Pokemon</h1>
      {/* <CounterDisplay/> */}
      <PokemonDisplay />
    </>
  );
}

export default App;
