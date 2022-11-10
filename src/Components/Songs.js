import React from 'react'
import MusicCard from "./MusicCard"

const Songs = ({songs, updateFavorite}) => {
  const musicList = songs.map((song)=>{
      return <MusicCard
      key={song.id}
      song={song}
      id={song.id} 
      updateFavorite={updateFavorite}     
    />
  })

  return (
    <div id="songs" className='container'>
      {musicList}
    </div>
  )
}


export default Songs;