import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({setShow}) => {
  return (
    <nav>
      <NavLink to="/songs" onClick={()=>setShow(true)} >Songs</NavLink>
      <NavLink to="/favorites" onClick={()=>setShow(true)}  >Favorites</NavLink>
      <NavLink to="/addmusic" onClick={()=>setShow(false)}  >Add Music</NavLink>
    </nav>
  )
}

export default Navbar;