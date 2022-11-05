import "../css/landing.css";
import styled from "styled-components";
import ColourPalette, { Colours } from "../constants/ColourPalette.js"
import { BrowserRouter, Route, Switch, Router } from 'react-router-dom';
import LogIn from "./LogIn";

const Button = styled.button`
  background-color: ${(props) => Colours.white};
  color: white;
  padding: 5px 15px;
  border-radius: 5px;
  outline: 0;
  text-transform: uppercase;
  margin: 10px 0px;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  transition: ease background-color 250ms;
  &:hover {
    background-color: ${(props) => Colours.dark_blue};
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;

function LandingPage() {
    function navigateLogIn() {
        // redirect user to new screen
    }
    return (
        <div className="container">
            <div className="header">
                <div className="logo-container"></div>
                <div className="sign-in-container">
                    {/* <Router>
                        <Switch>
                            <Route exact path="/login" component={LogIn}></Route>
                        </Switch>
                        
                    </Router> */}
                </div>
            </div>
            <div className="tagline">
                <div className="name">
                    UFound
                </div>
                <div className="slogan">
                    Lost it? UFound it!
                </div>
            </div>
            <div className="description"></div>
        </div>
    )
}

export default LandingPage;