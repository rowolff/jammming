import React, { Component } from 'react';
import './App.css';

// components

import SearchBar     from './components/Search/Bar/Bar.js';
import SearchResults from './components/Search/Results/Results.js';
import Playlist      from './components/Playlist/Playlist.js';

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
