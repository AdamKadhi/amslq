import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import PlayerList from './components/PlayerList';

function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <PlayerList/>
    </div>
  );
}

export default App;
