import React from "react";
import "../style/MusicExplore.css";
import { Card, CardBody } from "@nextui-org/react";
import ExpPlc1 from "../Assets/ExpPlc1.jpg";
import ExpPlc2 from "../Assets/ExpPlc2.jpg";
import ExpPlc3 from "../Assets/ExpPlc3.jpg";

export default function MusicExplore() {
  const handleSearch = (e) => {
    e.preventDefault();
    const query = e.target.inputBox.value; // Get the search query
    console.log("Searching for:", query);
    // Implement search logic here
  };

  return (
    <div className="BgImg">
      <div className="music-home-container">
        <div className="header-section">
          <div className="text-content text-center">
            <h1 className="main-heading my-4 text-4xl font-bold">
              What do you want to listen?
            </h1>
            <p className="sub-heading text-lg">
              Start Browsing the latest{" "}
              <u className="text-blue-500">
                <i>Songs, Albums,</i>
              </u>{" "}
              and{" "}
              <u className="text-blue-500">
                <i>Playlists.</i>
              </u>
            </p>
          </div>
        </div>

        {/* Centered Search Bar */}
        <div className="container">
          <div className="button-group text-center">
            <form
              onSubmit={handleSearch}
              className="d-flex justify-content-center"
            >
              <input
                className="inputBox mx-3 form-control"
                id="inputBox"
                type="text"
                placeholder="Search For song"
                aria-label="Search"
              />
              <button className="custom-button btn btn-primary" type="submit">
                <b>Search</b>
              </button>
            </form>
          </div>
        </div>

        {/* Section for Exploring Genres */}
        <div className="container">
          <div className="header-section">
            <div className="text-content text-center">
              <h1 className="main-heading my-4 text-1xl font-bold">
                Start Browsing
              </h1>
            </div>
          </div>
          <section className="trending-section my-5">
            <h2 className="titlePL">Explore Genres</h2>
            <div className="playlist-cards">
              {/* Playlist Card 1 */}
              <Card className="custom-card-horizontal mx-3 my-3">
                <CardBody className="flex-row">
                  <img
                    src={ExpPlc1}
                    alt="Playlist Cover"
                    className="playlist-image-horizontal"
                  />
                  <div className="text-content">
                    <p className="text-tiny uppercase font-bold">#Sandalwood</p>
                    <h4 className="font-bold text-large">Sandalwood Hits</h4>
                  </div>
                </CardBody>
              </Card>
              {/* Playlist Card 2 */}
              <Card className="custom-card-horizontal mx-3 my-3">
                <CardBody className="flex-row">
                  <img
                    src={ExpPlc2}
                    alt="Playlist Cover"
                    className="playlist-image-horizontal"
                  />
                  <div className="text-content">
                    <p className="text-tiny uppercase font-bold">
                      #Aggressive Phonk
                    </p>
                    <h4 className="font-bold text-large">World Wide</h4>
                  </div>
                </CardBody>
              </Card>
              {/* Playlist Card 3 */}
              <Card className="custom-card-horizontal mx-3 my-3">
                <CardBody className="flex-row">
                  <img
                    src={ExpPlc3}
                    alt="Playlist Cover"
                    className="playlist-image-horizontal"
                  />
                  <div className="text-content">
                    <p className="text-tiny uppercase font-bold">
                      #Release Radar
                    </p>
                    <h4 className="font-bold text-large">Discover</h4>
                  </div>
                </CardBody>
              </Card>
              {/* Playlist Card 4 */}
              <Card className="custom-card-horizontal mx-3 my-3">
                <CardBody className="flex-row">
                  <img
                    src={ExpPlc1}
                    alt="Playlist Cover"
                    className="playlist-image-horizontal"
                  />
                  <div className="text-content">
                    <p className="text-tiny uppercase font-bold">#Sandalwood</p>
                    <h4 className="font-bold text-large">Sandalwood Hits</h4>
                  </div>
                </CardBody>
              </Card>
              {/* Playlist Card 5 */}
              <Card className="custom-card-horizontal mx-3 my-3">
                <CardBody className="flex-row">
                  <img
                    src={ExpPlc3}
                    alt="Playlist Cover"
                    className="playlist-image-horizontal"
                  />
                  <div className="text-content">
                    <p className="text-tiny uppercase font-bold">
                      #Release Radar
                    </p>
                    <h4 className="font-bold text-large">Discover</h4>
                  </div>
                </CardBody>
              </Card>
              {/* Playlist Card 6 */}
              <Card className="custom-card-horizontal mx-3 my-3">
                <CardBody className="flex-row">
                  <img
                    src={ExpPlc3}
                    alt="Playlist Cover"
                    className="playlist-image-horizontal"
                  />
                  <div className="text-content">
                    <p className="text-tiny uppercase font-bold">
                      #Release Radar
                    </p>
                    <h4 className="font-bold text-large">Discover</h4>
                  </div>
                </CardBody>
              </Card>
            </div>
          </section>
        </div>

        {/* Browse All Section */}
        <div className="container">
          <div className="Section2">
            <div className="header-section">
              <div className="text-content">
                <h1 className="main-heading my-4 text-1xl font-bold">
                  <b>Browse All</b>
                </h1>
              </div>
            </div>

            {/* Parent container for Rows */}
            <div className="row-container">
              {/* Row 1 */}
              <div className="row">
                <Card className="custom-card-horizontal mx-1 my-3">
                  <CardBody className="flex-row">
                    <img
                      src={ExpPlc1}
                      alt="Playlist Cover"
                      className="playlist-image-horizontal"
                    />
                    <div className="text-content">
                      <p className="text-tiny uppercase font-bold">
                        #Sandalwood
                      </p>
                      <h4 className="font-bold text-large">Sandalwood Hits</h4>
                    </div>
                  </CardBody>
                </Card>
                <Card className="custom-card-horizontal mx-1 my-3">
                  <CardBody className="flex-row">
                    <img
                      src={ExpPlc1}
                      alt="Playlist Cover"
                      className="playlist-image-horizontal"
                    />
                    <div className="text-content">
                      <p className="text-tiny uppercase font-bold">
                        #Sandalwood
                      </p>
                      <h4 className="font-bold text-large">Sandalwood Hits</h4>
                    </div>
                  </CardBody>
                </Card>
                <Card className="custom-card-horizontal mx-1 my-3">
                  <CardBody className="flex-row">
                    <img
                      src={ExpPlc1}
                      alt="Playlist Cover"
                      className="playlist-image-horizontal"
                    />
                    <div className="text-content">
                      <p className="text-tiny uppercase font-bold">
                        #Sandalwood
                      </p>
                      <h4 className="font-bold text-large">Sandalwood Hits</h4>
                    </div>
                  </CardBody>
                </Card>
              </div>

              {/* Row 2 */}
              <div className="row">
                <Card className="custom-card-horizontal mx-1 my-3">
                  <CardBody className="flex-row">
                    <img
                      src={ExpPlc2}
                      alt="Playlist Cover"
                      className="playlist-image-horizontal"
                    />
                    <div className="text-content">
                      <p className="text-tiny uppercase font-bold">
                        #Aggressive Phonk
                      </p>
                      <h4 className="font-bold text-large">World Wide</h4>
                    </div>
                  </CardBody>
                </Card>
                <Card className="custom-card-horizontal mx-1 my-3">
                  <CardBody className="flex-row">
                    <img
                      src={ExpPlc1}
                      alt="Playlist Cover"
                      className="playlist-image-horizontal"
                    />
                    <div className="text-content">
                      <p className="text-tiny uppercase font-bold">
                        #Sandalwood
                      </p>
                      <h4 className="font-bold text-large">Sandalwood Hits</h4>
                    </div>
                  </CardBody>
                </Card>
                <Card className="custom-card-horizontal mx-1 my-3">
                  <CardBody className="flex-row">
                    <img
                      src={ExpPlc1}
                      alt="Playlist Cover"
                      className="playlist-image-horizontal"
                    />
                    <div className="text-content">
                      <p className="text-tiny uppercase font-bold">
                        #Sandalwood
                      </p>
                      <h4 className="font-bold text-large">Sandalwood Hits</h4>
                    </div>
                  </CardBody>
                </Card>
              </div>

              {/* Row 3 */}
              <div className="row">
                <Card className="custom-card-horizontal mx-1 my-3">
                  <CardBody className="flex-row">
                    <img
                      src={ExpPlc3}
                      alt="Playlist Cover"
                      className="playlist-image-horizontal"
                    />
                    <div className="text-content">
                      <p className="text-tiny uppercase font-bold">
                        #Release Radar
                      </p>
                      <h4 className="font-bold text-large">Discover</h4>
                    </div>
                  </CardBody>
                </Card>
                <Card className="custom-card-horizontal mx-1 my-3">
                  <CardBody className="flex-row">
                    <img
                      src={ExpPlc1}
                      alt="Playlist Cover"
                      className="playlist-image-horizontal"
                    />
                    <div className="text-content">
                      <p className="text-tiny uppercase font-bold">
                        #Sandalwood
                      </p>
                      <h4 className="font-bold text-large">Sandalwood Hits</h4>
                    </div>
                  </CardBody>
                </Card>
                <Card className="custom-card-horizontal mx-1 my-3">
                  <CardBody className="flex-row">
                    <img
                      src={ExpPlc1}
                      alt="Playlist Cover"
                      className="playlist-image-horizontal"
                    />
                    <div className="text-content">
                      <p className="text-tiny uppercase font-bold">
                        #Sandalwood
                      </p>
                      <h4 className="font-bold text-large">Sandalwood Hits</h4>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
