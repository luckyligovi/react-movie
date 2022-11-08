import { NavLink } from 'react-router-dom';

const Navbar = ()=>{
    return (
        <nav>
            <NavLink className="logo">Muziki</NavLink>
            <NavLink>Home</NavLink>
            <NavLink>Favorites</NavLink>
            <NavLink>SearchBar</NavLink>
        </nav>
    )
}

export default Navbar;