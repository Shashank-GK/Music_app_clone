import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import LoginPage from "./Components/LoginPage";
import MusicHome from "./Components/MusicHome";
import MusicExplore from "./Components/MusicExplore";
import MusicPlay from "./Components/MusicPlay";
import "./App.css"; // Your main CSS file

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<MusicHome />} />
        <Route path="/explore" element={<MusicExplore />} />
        <Route path="/current-playlists" element={<MusicPlay />} />
        {/* Redirect any unknown route to LoginPage */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
