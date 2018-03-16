import React from 'react';
import './Results.css';
import TrackList from '../Tracklist';

class SearchResults extends React.Component {
  render() {
    return (
      <div className="SearchResults">
        <h2>Results</h2>
        <TrackList />
      </div>
    );
  }
}

export default SearchResults;
