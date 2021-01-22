import React from "react";
import { Navbar } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";

export default function Header() {
  const { currentUser } = useAuth();
  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand>Reactibook</Navbar.Brand>
      <Navbar.Toggle />
      {currentUser !== undefined ? (
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>
      ) : (
        ""
      )}
    </Navbar>
  );
}
