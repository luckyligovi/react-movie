import React from "react";
import { useState } from "react";
let music ={
    id:0,
    img:'https://ralingo.com/wp-content/uploads/2020/05/mejja-okwonkwo.jpg',
    artist_name:'Major',
    genre:'genge',
    rating:5,
    views :0
}

function MusicDetails({addToFavorite}){
    //create state to hold the rating
    const [rating,setRating] = useState(music.rating);
    const [views, setViews] =useState(music.views);
    return (
        <div className ="wrapper">
            <div>
                <img src={music.img} alt={music.artist_name} className="img-responsive"></img>
                <button onClick={(e)=>{setRating((rating) =>rating+1)}}> Give a 5★ rating </button>
                <button onClick={()=>addToFavorite(music.id)}>Add to Favorite</button> 
                <p>Artist: {music.artist_name} Views: {music.views} Rating:{music.rating}</p> 
            </div>
        </div>
        );
}
export default MusicDetails

