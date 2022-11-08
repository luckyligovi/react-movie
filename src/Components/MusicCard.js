import React from "react";
import { useEffect, useState } from "react";

import MusicDetails from './MusicDetails'
  
function MusicCard(){
/*     const [songs, setSongs] = useState([]);
    const [favorite, setFavorite] = useState([])
    const [count, setCount] = useState(0)
    useEffect(()=>{
        fetch('enter backend api').then(res => res.json())
        .then(data =>setProducts(data));
    },[]) */
    
    function addToFavorite(id){
/*         const filteredData = songs.filter(el =>el.id ===id)
        setFavorite((favorite) => favorite.concat(filteredData))
        setCount((count) =>count +1) */
        alert('clicky')
    }

    // for every song item returned from the api the music details component should be loaded
    
    return(
        <div>
            <MusicDetails addToFavorite ={addToFavorite}/>
        </div> 
    ); 
}
export default MusicCard;