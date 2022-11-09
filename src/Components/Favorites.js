import React from "react";

function Favorites() {
    const song = {
        image : "https://pictures-kenya.jijistatic.com/17577705_20210225-153359_1500x1125.webp",
        name : "Phocey"
    }

    return (
    <div>
        <h1>Favorite music</h1>
        <p>{song.name}</p>
        <img src={song.image} alt="phoncey album" />
    </div>
    );
  }

  
export default Favorites;