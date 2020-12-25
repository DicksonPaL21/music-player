import React, { useState } from 'react';
// Import Styles
import './styles/app.scss';

// Adding Components
import Song from './components/Song';
import Player from './components/Player';
import Library from './components/Library';

// Import Util
import data from './util';

function App() {
// State
const [songs, setSongs] = useState(data());
const [currentSong, setCurrentSong] = useState(songs[0]);
const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player isPlaying={isPlaying} setIsPlaying={setIsPlaying} currentSong={currentSong} />
      <Library songs={songs} />
    </div>
  );
}

export default App;