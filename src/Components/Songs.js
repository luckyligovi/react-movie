import React from 'react'
import MusicCard from "./MusicCard"

const Songs = ({ search, songs, updateFavorite }) => {
  console.log(songs)
  // console.log(search)
  const filteredSongs= songs.filter((everySong) => everySong.title.toLowerCase().includes(search.toLowerCase()))

  return (
    <div id="songs" className='container'>
      {filteredSongs.map((song) => {
        return <MusicCard
          key={song.id}
          song={song}
          id={song.id}
          updateFavorite={updateFavorite}
        />
      })}
    </div>
  )
}


export default Songs;