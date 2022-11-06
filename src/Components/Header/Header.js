import React from "react";
import { NavLink } from 'react-router-dom';
import './header.css';
import logo from "../../Images/LogoSmall.svg"
import { LogIn } from "../../landing_page/LogIn"




const Header = () =>{
    return(
        <nav>
            <div className='div-header'>
                <img src= {logo} alt="logo" width='110' height='110'/>
                <div style = {{display:"flex",flexDirection:"row"}}>
                    <NavLink to="/home"><button className='header-button'>Home</button> </NavLink>
                    <NavLink to="/my_profile"><button className='header-button'>My Profile</button></NavLink>
                    <NavLink to="/post_listing"> <button className='header-button'>Post Listing</button></NavLink>
                    <NavLink to="/create_listing"> <button className='header-button'>Browse Listing</button></NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Header;