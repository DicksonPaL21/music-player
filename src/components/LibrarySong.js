import React from "react";

const LibrarySong = ({
  song,
  songs,
  setCurrentSong,
  setSongs,
  id,
  audioRef,
  isPlaying,
}) => {
  const songSelectHandler = async () => {
    const selectedSong = songs.filter((state) => state.id === id);
    await setCurrentSong(selectedSong[0]);

    // Add Active State
    setSongs(
      songs.map((song) => {
        return {
          ...song,
          active: song.id === id ? true : false,
        };
      })
    );

    // Check if song is playing
    if (isPlaying) audioRef.current.play();
  };

  return (
    <div
      onClick={songSelectHandler}
      className={`library-song ${song.active ? "selected" : ""}`}
    >
      <img src={song.cover} alt={song.name} />
      <div className="song-description">
        <h2>{song.name}</h2>
        <h3>{song.artist}</h3>
      </div>
    </div>
  );
};

export default LibrarySong;
