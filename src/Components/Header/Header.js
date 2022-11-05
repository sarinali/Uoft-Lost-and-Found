import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import {ReactComponent as LogoB} from "../../Images/LogoBig.svg"
import {ReactComponent as LogoS} from "../../Images/LogoSmall.svg"
import './header.css';


const Header = () =>{
    return(
        <nav>
            <div className='div-header'>
                <div className='div-svg'>
                    <LogoS/>
                </div>
                <div style = {{display:"flex",flexDirection:"row"}}>
                    <NavLink to="/home"> Home </NavLink>
                    <NavLink to="/my_profile"> My Profile </NavLink>
                    <NavLink to="/post_listing"> Post Listing</NavLink>
                    <NavLink to="/create_listing"> Create Listing</NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Header;