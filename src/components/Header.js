import React from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { Navbar } from "react-bootstrap";

export default function Home() {
  return (
    <Navbar style={{ backgroundColor: '#4dc497' }} variant="dark">
      <Navbar.Brand><strong>Reactibook</strong></Navbar.Brand>
      <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <a href="!#" className="icon-navbar white-text">
              <FaSignOutAlt />
            </a>
          </Navbar.Text>
        </Navbar.Collapse>
    </Navbar>
  );
}
