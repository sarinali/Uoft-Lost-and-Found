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
                    <NavLink to="/home"> Home </NavLink>
                    <NavLink to="/my_profile"> My Profile </NavLink>
                    <NavLink to="/post_listing"> Post Listing</NavLink>
                    <NavLink to="/create_listing"> Create Listing</NavLink>
                    <NavLink to="/login"> <button className='button-header'>LogOut</button> </NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Header;