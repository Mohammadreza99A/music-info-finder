import React from 'react';

function Navbar({ darkMode, onChange }) {
  function changeTheme(mode) {
    onChange((prevMode) => !prevMode);
  }

  return (
    <nav className="navbar sticky-top navbar-dark bg-dark mb-5">
      <span className="navbar-brand mb-0 h1 mx-auto">Music Info Finder</span>
      <div className="toggle-box mx-auto">
        <input
          type="checkbox"
          onChange={() => changeTheme(darkMode)}
          id="toggle-box-checkbox"
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
    </nav>
  );
}

export default Navbar;
