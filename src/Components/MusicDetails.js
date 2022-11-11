import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';


const MusicDetails = ({deleteSong}) => {
    const [song, setSong] = useState(null);
    const [artist, setArtist] = useState([]);
    const [genre, setGenre] = useState([]);
    const [album, setAlbum] = useState([]);
    const [reviews, setReviews] = useState([]);
    const { id } = useParams();
    const history = useHistory();

    console.log(artist, genre, album)

    useEffect(()=>{
        fetch(`http://localhost:9292/songs/${id}`)
        .then(response => response.json())
        .then(setSong);
    }, [id])

    useEffect(() => {
      fetch(`http://localhost:9292/artists/${id}`)
      .then(r => r.json())
      .then(data => {
          setArtist(data)
      })
    }, [])
      
    useEffect(() => {
          fetch(`http://localhost:9292/genres/${id}`)
          .then(r => r.json())
          .then(data => {
              setGenre(data)
          })
    }, [])

    useEffect(() => {
        fetch(`http://localhost:9292/albums/${id}`)
        .then(r => r.json())
        .then(data => {
            setAlbum(data)
        })
    }, [])

    useEffect(() => {
      fetch(`http://localhost:9292/reviews/${id}`)
      .then(r => r.json())
      .then(data => {
          setReviews(data)
      })
    }, [])
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
        <h3>Genre: {genre.name}</h3>
        <h3>Album: {album.name}</h3>
        <h3>Artists Names:</h3>{artist.full_name}
        <h2>Reviews</h2>
        <p>{reviews.comment}</p>
        <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default MusicDetails;