import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import LoginPage from "./Components/LoginPage";
import MusicHome from "./Components/MusicHome";
import MusicExplore from "./Components/MusicExplore";
import "./App.css"; // Your main CSS file

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MusicHome />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/explore" element={<MusicExplore />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
