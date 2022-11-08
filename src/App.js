import react from 'react'
//import { Switch, Route } from "react-router-dom"
import Navbar from './Components/Navbar';
import SearchBar from './Components/SearchBar';
import MusicCard  from './Components/MusicCard';

function App() {

    return (
        <div className='App'>
            <Navbar />
            <SearchBar />
            <MusicCard />
        </div>
    )
}

export default App;
