// import logo from './logo.svg';
// import './App.css';
// import LandingPage from './landing_page/LandingPage';
// import {BrowserRouter, Route, Router, Routes } from 'react-router-dom';
// import LogIn from "./landing_page/LogIn";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import LandingPage from "./landing_page/LandingPage";
import { ProtectedRoutes, LogIn } from "./landing_page/LogIn";
import CreateListing from "./home/CreateListing"
import Home from "./home/Home"
import Messaging from "./home/Messaging"
import MyProfile from "./home/MyProfile"

// const userLog = {loggedIn: false};

function App() {
  return (
    <Router>
      <nav>
        <Link to="/home"> Home </Link>
        <Link to="/my_profile"> My Profile </Link>
        <Link to="messaging"> Messaging </Link>
        <Link to="create_listing"> CreateListing </Link>
      </nav>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/login" element={<LogIn />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/create_listing" element={<CreateListing />} />
        <Route element={<ProtectedRoutes />}>
          <Route exact path="/my_profile" element={<MyProfile />} />
          <Route exact path="/messaging" element={<Messaging />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;