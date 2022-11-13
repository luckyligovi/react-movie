import React, { useState, useEffect } from 'react';
import { Switch, Route} from "react-router-dom";
import Header from './Components/Header';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Songs from './Components/Songs';
import Favorites from './Components/Favorites';
import MusicDetails from './Components/MusicDetails';
import AddMusic from './Components/AddMusic';

function App() {

  const [songs, setSongs] = useState([]);
  const [show, setShow] = useState(false);
  const [query, setQuery] = useState("")
  const[search, setSearch]=useState("")
  useEffect(()=>{
    const fetchData = () => {
      fetch(`http://localhost:9292/songs?q=${query}`)
      .then(response => response.json())
      .then((data)=>{
        console.log(data)
        setSongs(data)
      });
    };

    if (query.length === 0 || query.length > 2) fetchData();

  }, [query])




  const submitHandler = (e) => {
    console.log("clicked")
    e.preventDefault();
    setQuery("");
  }
  const updateFavorite = (id, favorite) => {
    setSongs(songs.map(song => id === song.id ? {...song, favorite} : song))
  }

  const deleteSong =(id) => {
    setSongs(songs.filter(song => song.id !== id))
  }

  return (
    <div className="App">
      <Header 
        onSetQuery= {setQuery}
        submitHandler={submitHandler} 
        show={show}
        setShow={setShow}
        setSearch={setSearch} 
      />
      <Navbar setShow={setShow} />

      <Switch>
        <Route exact path="/" >
          <Home />
        </Route>
        <Route exact path="/songs" >
          <Songs songs={songs} search={search} updateFavorite={updateFavorite} />
        </Route>
        <Route path="/songs/:id" >
          <MusicDetails deleteSong={deleteSong} />
        </Route>
        <Route path="/favorites">
          <Favorites songs={songs.filter(song=> song.favorite)} updateFavorite={updateFavorite} />
        </Route>
        <Route path="/addmusic" >
          <AddMusic />
        </Route>
      </Switch>
    </div>
  );
}

export default App;