import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../style/Navbar.css";
import Music_Logo from "../Assets/Music_logo.png";
import Profile_logo from "../Assets/Profile_logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const handleSearch = (e) => {
    e.preventDefault();
    const query = e.target.search.value; // Get the search query
    // Implement search logic here, e.g., redirecting or fetching data
    console.log("Search query:", query);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand mt-2 mt-lg-0" to="/">
          <img
            className="mx-2"
            src={Music_Logo}
            height="35"
            alt="Music App Logo"
            loading="lazy"
          />
        </Link>
        <Link className="navbar-brand" to="/">
          MusicApp
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto d-flex align-items-center">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/explore">
                Explore
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/current-playlists">
                Current Playlists
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/premium">
                Premium
              </Link>
            </li>
          </ul>
          <form className="form d-flex me-3" onSubmit={handleSearch}>
            <input
              name="search"
              className="form-control me-2 rounded-pill"
              type="search"
              placeholder="Search..."
              aria-label="Search"
            />
            <button
              className="btn btn-outline-light rounded-pill"
              type="submit"
              aria-label="Submit search"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.397l3.361 3.361a1 1 0 0 0 1.415-1.415l-3.36-3.36zm-5.14.63a5 5 0 1 1 0-10 5 5 0 0 1 0 10z" />
              </svg>
            </button>
          </form>
          <div className="dropdown">
            <Link
              className="dropdown-toggle d-flex align-items-center hidden-arrow"
              to="#"
              id="navbarDropdownMenuAvatar"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              aria-label="User options"
            >
              <img
                src={Profile_logo}
                className="rounded-circle"
                height="35"
                alt="User Avatar"
                loading="lazy"
              />
            </Link>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdownMenuAvatar"
            >
              <li>
                <Link className="dropdown-item" to="/profile">
                  My profile
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/settings">
                  Settings
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/logout">
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
