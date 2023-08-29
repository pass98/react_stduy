import './App.css';
import PokeBorad from './components/PokeBorad';
import './style/poke.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const Pokemon = () => {
  return (
    <div className="App">
      <PokeBorad></PokeBorad>
    </div>
  );
}

export default Pokemon;
