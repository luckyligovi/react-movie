import React from "react";
import Searchbar from "./Searchbar";
import { NavLink } from "react-router-dom";

const Header = ({ setSearch,endPoint, onSetQuery, submitHandler, show, setShow }) => {

    return (
        <header className="header">
            <div className="header_logo">           
                <NavLink exact to="/" onClick={()=>setShow(false)}>Muziki</NavLink>
            </div>
            {
                show? <Searchbar 
                setSearch={setSearch}
                endPoint = {endPoint} 
                onSetQuery={onSetQuery} 
                submitHandler={submitHandler}
            /> : <h2><NavLink exact to="/" >Home</NavLink></h2>
            }
        </header>
    );
}

export default Header;