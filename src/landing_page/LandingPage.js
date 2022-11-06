import "../css/landing.css";
import React from "react";
import styled from "styled-components";
import ColourPalette, { Colours } from "../constants/ColourPalette.js"
// import {useNavigate } from 'react-router-dom';
import LogIn from "./LogIn";
// import {BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import {Link} from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
    return (
        <div className="container"> 
            <div className="header">
            </div>
            <div>  
                <Link to="/login"><button className="login-button" onclick="Login()">LogIn</button></Link>
            </div>
            <div className="tagline">
                <div className="name">
                    UFound
                </div>
                <div className="slogan">
                    Lost it? UFound it!
                </div>
            </div>
            <div className="description">A platform made by UofT students FOR UofT students. Ever find yourself losing your valuables and don’t know where to look? UFound provides the students of UofT a platform to search for and post items that they have lost or found. Imagine a virtual lost and found, but just for UofT students! With built in authentication for UTORIDs, a stream for all listings and easy contact with the finder, recover your lost goods faster than ever.</div>
            {/* <div className="spacer"></div>
            <div className="footer">
                <div>Bison, Avi, Yifei, Sarina</div>
                <div>2022</div>
            </div> */}
        </div>
    )
}

export default LandingPage;
