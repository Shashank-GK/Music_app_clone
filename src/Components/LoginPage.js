import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "../style/LoginPage.css";

export default function LoginPage() {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Implement your authentication logic here
    // On successful login, navigate to the desired page
    navigate("/desired-path"); // Replace '/desired-path' with the actual path you want to navigate to
  };

  return (
    <div>
      <div id="login-page" className="login-container">
        <form className="form" onSubmit={handleLogin}>
          {" "}
          {/* Attach the handleLogin function */}
          <div className="flex-column">
            <label>Email </label>
          </div>
          <div className="inputForm">
            <svg
              height="20"
              viewBox="0 0 32 32"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Layer_3" data-name="Layer 3">
                <path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z"></path>
              </g>
            </svg>
            <input
              type="text"
              className="input"
              placeholder="Enter your Email"
              required
            />
          </div>
          <div className="flex-column">
            <label>Password </label>
          </div>
          <div className="inputForm">
            <svg
              height="20"
              viewBox="-64 0 512 512"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0"></path>
              <path d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0"></path>
            </svg>
            <input
              type="password"
              className="input"
              placeholder="Enter your Password"
              required
            />
          </div>
          <div className="flex-row">
            <div>
              <input type="checkbox" />
              <label>Remember me </label>
            </div>
            <span className="span">Forgot password?</span>
          </div>
          <button className="button-submit" type="submit">
            Sign In
          </button>{" "}
          {/* Specify type="submit" */}
          <p className="p">
            Don't have an account? <span className="span">Sign Up</span>
          </p>
          <p className="p line">Or With</p>
          <div className="flex-row">
            <button className="btn google">
              <svg
                version="1.1"
                width="20"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 512 512"
                style={{ enableBackground: "new 0 0 512 512" }} // Use camelCase for style properties
              >
                <path
                  style={{ fill: "#FBBB00" }}
                  d="M113.47,309.408L95.648,375.94l-65.139,1.378C11.042,341.211,0,299.9,0,256
				c0-43.905,11.042-84.211,30.509-119.318l65.139,1.378l17.822,66.532L113.47,309.408z"
                />
                <path
                  style={{ fill: "#518EF8" }}
                  d="M238.698,78.746C285.109,78.746,326.437,110.16,353.715,144.111L286.49,212.162L238.698,78.746z"
                />
                <path
                  style={{ fill: "#28B446" }}
                  d="M238.698,433.254c-56.196,0-106.043-23.458-142.382-59.157L85.858,464.62
				C138.784,497.193,189.728,512,238.698,512c103.522,0,195.788-66.663,228.427-159.882L238.698,433.254z"
                />
                <path
                  style={{ fill: "#FF3D00" }}
                  d="M486.42,257.139C486.42,273.358,480.211,289.637,469.516,304.021L486.42,257.139z"
                />
                <path
                  style={{ fill: "#D93F00" }}
                  d="M238.698,433.254c-19.338,0-37.418-2.358-54.608-6.661l134.951-72.642
				c40.165,15.434,86.346,24.075,138.857,24.075C497.837,478.026,403.422,512,238.698,512
				c-52.156,0-101.467-15.233-143.517-41.646L238.698,433.254z"
                />
              </svg>
              Google
            </button>
            <button className="btn facebook">
              <svg
                width="20"
                height="20"
                viewBox="0 0 576 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M287.9 0C128.9 0 0 128.9 0 287.9c0 143.5 104.9 262.5 240.5 285.5v-202h-72.5v-83h72.5v-63.6c0-71.7 43.8-110.1 109.6-110.1 31.2 0 63.2 5.5 63.2 5.5v69.5h-35.6c-35.1 0-45.8 21.7-45.8 43.9v52.1h83l-13.1 83h-69.9v202C471.1 550.4 576 431.4 576 287.9 576 128.9 447.1 0 287.9 0z" />
              </svg>
              Facebook
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
