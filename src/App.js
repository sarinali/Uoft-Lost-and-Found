import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import LandingPage from "./landing_page/LandingPage";
import { ProtectedRoutes, LogIn } from "./landing_page/LogIn";
import CreateListing from "./home/CreateListing";
import Home from "./home/Home";
import PostListing from "./home/PostListing";
import MyProfile from "./home/MyProfile";
import Header from "./Components/Header/Header"

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/login" element={<LogIn />} />
        <Route element={<ProtectedRoutes />}>
          <Route exact path="/my_profile" element={<MyProfile />} />
          <Route exact path="/post_listing" element={<PostListing />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/create_listing" element={<CreateListing />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;