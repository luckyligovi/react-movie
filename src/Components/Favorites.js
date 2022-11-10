import React from "react";

function Favorites() {
    const song = {
        image : "https://bekaboy.com/wp-content/uploads/2021/01/Sukari-VIDEO-640x321.jpg",
        name : "Phocey"
    }

    return (
    <div>
        <h1 className="fav-h1"> Favorite music</h1>
        <p>{song.name}</p>
        <img className="fav-img" src={song.image} alt="phoncey album" />
        
    </div>
    );
  }

  
export default Favorites;