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
import LogIn from "./landing_page/LogIn";

function App() {
  return (
      <Router>
        <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route exact path="/login" element={<LogIn />} />
            {/* <Route path="*" element={Error Page}> </> */}
        </Routes>
      </Router>
  );
}

export default App;
