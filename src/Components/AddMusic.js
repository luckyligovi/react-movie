import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const AddMusic = () => {
  const [images, setImages] = useState("");
  const [title, setTitle] =  useState("");
  const [description, setDescription] = useState("");
  const [genre, setGenre] = useState("");
  const [album, setAlbum] = useState("");
  const [artistName, setArtistName] = useState("");
  
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    // remove the id assignment after created a method in the models to generate id for each instance
    const albumObj = {
      id: Math.floor(Math.random() * 100000),
      name:album
    };
    const genreObj = {
      id: Math.floor(Math.random() * 100000),
      name: genre
    };
    const artistObj = {
      id: Math.floor(Math.random() * 100000),
      full_name: artistName
    }
    const musicObj = { 
      id:Math.floor(Math.random() * 100000),
      title: title,
      description: description,
      img_url: images,
      artist_id: artistObj.id,
      genre_id: genreObj.id,
      album_id: albumObj.id
    }

    fetch("http://localhost:9292/albums", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(albumObj)
    }).then(res => res.json())
  
    fetch("http://localhost:9292/genres", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(genreObj)
    }).then(res => res.json())

  fetch("http://localhost:9292/artists", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(artistObj)
  }).then(res => res.json())


  fetch("http://localhost:9292/songs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(musicObj)
  })
  .then(res => {res.json();
    alert(musicObj.title + '' + 'added to songs successfuly refresh page to view songs')});
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
        <label>Main Artist:</label>
        <input 
          type="text" 
          name="artistName" 
          placeholder='Artist name' 
          onChange={(e) => setArtistName(e.target.value)}
        />
        <button className='addform-input' >Add Music</button>
      </form>
    </div>
  )
}

export default AddMusic;