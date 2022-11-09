import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ()=>{
    return (
        <div>
            <nav>
            <NavLink className="logo">Muziki</NavLink>
            <NavLink>Home</NavLink>
            <NavLink>Favorites</NavLink>
            </nav>
        </div>
    )
}

export default Navbar;