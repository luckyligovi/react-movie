import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const MusicDetails = ({deleteSong}) => {
    const [song, setSong] = useState(null);
    const { id } = useParams();
    const history = useHistory();

    useEffect(()=>{
        fetch(`htp://localhost:9292/songs/${id}`)
        .then(response => response.json())
        .then(setSong);
    }, [id])

    if (!song) return <h2>Loading...</h2>;

    const handleDelete = () => {
      fetch(`http://localhost:9292/songs/${id}`, {
        method: "DELETE"
      })
      .then(() => history.push('/browse'))
      deleteSong(id)
    }



  return (
    <div className='music-details'>
        <img src={song.img_url} alt={song.title}/>
        <h2> Title: {song.title} </h2>
        <h3>Genre: {song.genre_id}</h3>
        <h3>Album: {song.album_id}</h3>
        <h3>Artists Names:</h3>{song.artist_id}
        <p>...Lyrics will be made available soon...<br/> Stay connected </p>
        <h2>Reviews</h2>
        <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default MusicDetails;