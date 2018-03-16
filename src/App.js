import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// components

import SearchBar     from './components/Search/Bar';
import SearchResults from './components/Search/Results';
import Playlist      from './components/Playlist';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
        <SearchBar />
          <div className="App-playlist">
            <SearchResults />
            <Playlist />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
