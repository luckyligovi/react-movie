import React from "react";
let music ={img:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.youtube.com%2Fchannel%2FUCuRGQqKKdPOSPB0XG5VNk5g&psig=AOvVaw3QAFEeqYmrVTddsKpJPdKr&ust=1667990862479000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCPiirai0nvsCFQAAAAAdAAAAABAE',
    artist_name:'Major',
    genre:'genge',
    rating:5}

function MusicDetails(){
    return (
        <div>
            <div>
                <img src={music.img} alt={music.artist_name} className="img-responsive"></img>
                <button>★</button>
                <button>Add to Favorite</button> 
                <p>Artist: {music.artist_name} Rating:{music.rating}</p> 
            </div>
        </div>
        );
}
export default MusicDetails

