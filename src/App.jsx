import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import GameView from './GameView';
import Home from './Home';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<GameView />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
