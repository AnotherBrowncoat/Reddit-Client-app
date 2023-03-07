// libraries
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import logo from './logo.svg';

// my elements
import { Counter } from './features/counter/Counter';
import Home from './features/Home/Home';

// styling
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <main className="App-main">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;


/*

*/