import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ onChange, darkMode }) {
  function changeTheme() {
    onChange((prevMode) => !prevMode);
  }

  return (
    <div className="bg-dark">
      <div className="container">
        <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark mb-5 ">
          <span className="navbar-brand mb-2 h1 mx-auto">
            Music Info Finder
          </span>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ml-auto">
              <Link className="nav-item nav-link text-center" to="/">
                Home
              </Link>
              <Link className="nav-item nav-link text-center" to="/about">
                About
              </Link>
              <div className="toggle-box mx-auto mt-1 mb-1">
                <input
                  type="checkbox"
                  onChange={() => changeTheme()}
                  id="toggle-box-checkbox"
                  defaultChecked={darkMode}
                />
                <label
                  htmlFor="toggle-box-checkbox"
                  className="toggle-box-label-left"
                ></label>
                <label
                  htmlFor="toggle-box-checkbox"
                  className="toggle-box-label"
                ></label>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
