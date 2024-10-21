import React from "react";
import "../style/MusicHome.css"; // Add your styles in a separate CSS file
import { Card, CardBody, CardHeader, Button } from "@nextui-org/react";

// Playlist Card Imports
import PLC1 from "../Assets/PLC1.jpg";

export default function MusicHome() {
  return (
    <div className="abc">
      <div className="container">
        {/* Intro Section */}
        <div className="music-home-container">
          <div className="header-section">
            <div className="text-content">
              <h1 className="main-heading my-4">
                Discover Your Favorite Music
              </h1>
              <p className="sub-heading">
                Stream the latest{" "}
                <u id="font">
                  <i id="font">Songs, Albums,</i>
                </u>{" "}
                and{" "}
                <u id="font">
                  <i id="font">Playlists.</i>
                </u>
              </p>
              <p>
                Create your own playlists and enjoy your favorite tunes.
                <b> Start listening</b>
              </p>
              <div className="button-group">
                <a href="#" className="start-listening-button">
                  <button className="custom-button btn-primary" type="button">
                    Learn More <span aria-hidden="true">→</span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Trending Section */}
        <section className="trending-section my-5">
          <h2 className="titlePL">Trending Playlists</h2>
          <div className="playlist-cards">
            {/* Playlist Card 1 */}
            <Card className="custom-card-horizontal mx-3 my-3">
              <CardBody className="flex-row">
                <img
                  src={PLC1}
                  alt="Playlist Cover"
                  className="playlist-image-horizontal"
                />
                <div className="text-content">
                  <p className="text-tiny uppercase font-bold">Daily Mix</p>
                  <small className="text-default-500">12 Tracks</small>
                  <h4 className="font-bold text-large">Throwback</h4>
                </div>
              </CardBody>
            </Card>
            {/* Playlist Card 2 */}
            <Card className="custom-card-horizontal mx-3 my-3">
              <CardBody className="flex-row">
                <img
                  src={PLC1}
                  alt="Playlist Cover"
                  className="playlist-image-horizontal"
                />
                <div className="text-content">
                  <p className="text-tiny uppercase font-bold">Upbeat Mix</p>
                  <small className="text-default-500">18 Tracks</small>
                  <h4 className="font-bold text-large">World Wide</h4>
                </div>
              </CardBody>
            </Card>
            {/* Playlist Card 3 */}
            <Card className="custom-card-horizontal mx-3 my-3">
              <CardBody className="flex-row">
                <img
                  src={PLC1}
                  alt="Playlist Cover"
                  className="playlist-image-horizontal"
                />
                <div className="text-content">
                  <p className="text-tiny uppercase font-bold">Mix track</p>
                  <small className="text-default-500">25 Tracks</small>
                  <h4 className="font-bold text-large">Relax vibes</h4>
                </div>
              </CardBody>
            </Card>
            {/* Playlist Card 4 */}
            <Card className="custom-card-horizontal mx-3 my-3">
              <CardBody className="flex-row">
                <img
                  src={PLC1}
                  alt="Playlist Cover"
                  className="playlist-image-horizontal"
                />
                <div className="text-content">
                  <p className="text-tiny uppercase font-bold">Ponk Mix</p>
                  <small className="text-default-500">25 Tracks</small>
                  <h4 className="font-bold text-large">International Hits</h4>
                </div>
              </CardBody>
            </Card>
            {/* Playlist Card 5 */}
            <Card className="custom-card-horizontal mx-3 my-3">
              <CardBody className="flex-row">
                <img
                  src={PLC1}
                  alt="Playlist Cover"
                  className="playlist-image-horizontal"
                />
                <div className="text-content">
                  <p className="text-tiny uppercase font-bold">Pop Mix</p>
                  <small className="text-default-500">25 Tracks</small>
                  <h4 className="font-bold text-large">Ultimate Hits</h4>
                </div>
              </CardBody>
            </Card>
            {/* Playlist Card 6 */}
            <Card className="custom-card-horizontal mx-3 my-3">
              <CardBody className="flex-row">
                <img
                  src={PLC1}
                  alt="Playlist Cover"
                  className="playlist-image-horizontal"
                />
                <div className="text-content">
                  <p className="text-tiny uppercase font-bold">Mix</p>
                  <small className="text-default-500">25 Tracks</small>
                  <h4 className="font-bold text-large">Sandal Wood Hits</h4>
                </div>
              </CardBody>
            </Card>
            {/* Repeat for other Playlist Cards */}
          </div>
        </section>
      </div>
    </div>
  );
}
// you may add below things
{
  /* ---------------------------------------------- New Releases Section------------------------------------------ */
}

{
  /* --------------------------------------------------Genres Section --------------------------------------------- */
}
