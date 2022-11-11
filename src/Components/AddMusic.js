import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const AddMusic = () => {

  const [images, setImages] = useState("");
  const [title, setTitle] =  useState("");
  const [description, setDescription] = useState("");
  const [genre, setGenre] = useState("");
  const [album, setAlbum] = useState("");
  const [artists, setArtists] = useState(["Ops! Artists name not available."]);
  const [favorite, setFavorite] = useState(true);

  const history = useHistory();

  console.log(setArtists);

  const handleSubmit = (e) => {
    e.preventDefault();
    const musicObj = { 
      images: images,
      title: title,
      description
      : description
      ,
      genre: genre,
      album: album,
      artists: artists,
      favorite: favorite
    }

    fetch("http://localhost:9292/songs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(musicObj)
    })
    .then(res => res.json())
    .then(data => history.push(`/songs/${data.id}`))
  }

  return (
    <div className='addform' id="addmusic">
      <form onSubmit={handleSubmit}>
        <label>Image:</label>
        <input 
          className='addform-input' 
          type="text" name="images" 
          placeholder="A valid image url..." 
          onChange={(e) => setImages(e.target.value)}
        />
        <label>Title:</label>
        <input  
          className='addform-input' 
          type="text" name="title" 
          placeholder='Music title' 
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>description
          :</label>
        <input 
          type="text" 
          name="description
          " 
          placeholder='artists e.g. Rihana & Beyonce' 
          onChange={(e) => setDescription(e.target.value)}
        />
        <label>Genre:</label>
        <input 
          type="text" 
          name="genre" 
          placeholder='Genre' 
          onChange={(e) => setGenre(e.target.value)}
        />        
        <label>Album:</label>
        <input 
          type="text" 
          name="album" 
          placeholder='Album name' 
          onChange={(e) => setAlbum(e.target.value)}
        />
        <label htmlFor='checkbox'>Favorite?</label>
        <input          
          type="checkbox" 
          id="favorite"           
          onChange={(e) => setFavorite(e.target.checked)}
        />
        <button className='addform-input' >Add Music</button>
      </form>
    </div>
  )
}

export default AddMusic;