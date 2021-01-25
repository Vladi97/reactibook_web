import React from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Header() {
  const { currentUser, logout } = useAuth();
  return (
    <Navbar style={{ backgroundColor: "#4dc497", width: "100%" }} variant="dark">
      <Navbar.Brand>
        <strong>Reactibook</strong>
      </Navbar.Brand>
      <Navbar.Toggle />
      {currentUser !== undefined ? (
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <Link onClick={() => {logout()}} className="icon-navbar white-text">
              <FaSignOutAlt />
            </Link>
          </Navbar.Text>
        </Navbar.Collapse>
      ) : (
        ""
      )}
    </Navbar>
  );
}
