import React from "react";
import { useState } from "react";
/* let music ={
    id:0,
    img:'https://ralingo.com/wp-content/uploads/2020/05/mejja-okwonkwo.jpg',
    artist_name:'Major',
    genre:'genge',
    rating:5,
    views :0
} */

function MusicDetails({song, addToFavorite}){
    //create state to hold the rating
    const [rating,setRating] = useState(song.rating);
    const [views, setViews] =useState(song.views);
    return (
        <div className ="wrapper">
            <div>
                <img src={song.img_url} alt={song.artist_name} className="img-responsive"></img>
                <button onClick={(e)=>{setRating((rating) =>rating+1)}}> Give a 5★ rating </button>
                <button onClick={()=>addToFavorite(song.id)}>Add to Favorite</button> 
                <p>Artist: {song.artist_name} Views: {song.views} Rating:{song.rating}</p> 
            </div>
        </div>
        );
}
export default MusicDetails

