import React from 'react'
import {Link} from "react-router-dom"

const MusicCard = ({ id, song, updateFavorite }) => {
  console.log(song)
  
  const { img_url, title, description, favorite} = song;

  const handleFavorite =(favorite) => {
    fetch(`http://localhost:9292/songs/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify({favorite: favorite})
    })
    .then(res => res.json())
    .then(data => updateFavorite(data.id, data.favorite))
   }

  return (
    <>
        <div className='music-card'>
            <img src={img_url} alt="Ops! Nothing to show"/>
            <h4> {title} </h4>
            <h5>{description} </h5>
            <div>
              <label>Favorite?</label>
              <input 
                type="checkbox" 
                onChange={(e)=> handleFavorite(e.target.checked)}
                checked={favorite}/>
            </div>
            <p>Rating *</p>
            <p><Link to={`/songs/${id}`}> See Detailss</Link></p>
        </div>
    </>    
  )
}

export default MusicCard;