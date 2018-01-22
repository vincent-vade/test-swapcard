import React from 'react';
import { Route, Link } from 'react-router-dom';

// components
import Home from '../home';
import ShowArtist from '../showArtist';

import './app.css';

const App = () => {
  return (
    <div className="app">
      <header>
        <Link to="/">Home</Link>
      </header>
      <div className="main">
        <Route exact path="/" component={Home} />
        <Route exact path="/artists/:artistId" component={ShowArtist} />
      </div>
    </div>
  );
}

export default App;
