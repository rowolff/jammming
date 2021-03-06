import React from 'react';
import './Playlist.css';
import TrackList from '../Tracklist/Tracklist.js';

class Playlist extends React.Component {
  render() {
    return (
      <div className="Playlist">
        <input value="New Playlist"/>
        <TrackList />
        <a className="Playlist-save">SAVE TO SPOTIFY</a>
      </div>
    );
  }
}

export default Playlist;
