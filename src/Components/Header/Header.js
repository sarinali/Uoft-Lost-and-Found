import React from "react";
import { NavLink } from 'react-router-dom';
import './header.css';
import logo from '../../Images/Logo (1).svg';

const Header = () =>{
    return(
        <nav>
            <div className='div-header'>
                <img className="logo" src= {logo} alt="logo"/>
                <div style = {{display:"flex",flexDirection:"row"}}>
                    <NavLink to="/home"><button className="header-button"><b>Home</b></button></NavLink>
                    <NavLink to="/my_listings"><button className="header-button"><b>My Listings</b></button></NavLink>
                    <NavLink to="/post_listing"><button className="header-button"><b>Post Listing</b></button></NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Header;