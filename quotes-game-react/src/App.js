import { Route, Routes } from 'react-router';
import Home from './Home/Home';
import Game from './Game/Game';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='game' element={<Game />} />
      </Routes> 
    </div>
  );
}

export default App;
