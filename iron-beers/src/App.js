import React from 'react';
import 'milligram';
import Home from './pages/Home'
import Beers from './pages/Beers'
import RandomBeer from './pages/RandomBeer'
import NewBeer from './pages/NewBeer'
import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <header>
        <h1>Reactive BeersJS</h1>
      </header>
      <Home/>
      <Beers/>
      <RandomBeer/>
      <NewBeer/>
    </div>
    </Router>
  );
}

export default App;

// {/* <Link path='/beers' to={Beers}>Beers</Link>
// <Link path='/random-beer' to={RandomBeer}>Random Beers</Link>
// <Link path='/new-beer' to={NewBeer}>New Beer</Link> */}