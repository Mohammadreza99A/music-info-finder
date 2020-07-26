import React from 'react';
import {
  Container,
  Navbar as NavbarItem,
  NavbarBrand,
  Nav,
  NavItem,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import SearchForm from './SearchForm';

const Navbar = ({ onChange, darkMode }) => {
  function changeTheme() {
    onChange((prevMode) => !prevMode);
  }

  return (
    <div className="bg-dark">
      <Container>
        <NavbarItem
          sticky="top"
          expand="lg"
          variant="dark"
          bg="dark"
          className="mb-5"
        >
          <NavbarBrand href="/">Music Info Finder</NavbarBrand>

          <NavbarItem.Toggle aria-controls="navbarCollaps" />
          <NavbarItem.Collapse id="navbarCollaps">
            <Nav className="mr-auto text-center">
              <NavItem href="/">
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
              </NavItem>
              <NavItem href="/about">
                <Nav.Link as={Link} to="/about">
                  About
                </Nav.Link>
              </NavItem>
              <NavItem>
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
              </NavItem>
            </Nav>
            <SearchForm />
          </NavbarItem.Collapse>
        </NavbarItem>
      </Container>
    </div>
  );
};

export default Navbar;
