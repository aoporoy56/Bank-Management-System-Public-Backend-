import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function Header() {
  return (
    <div>
      <Navbar bg="" data-bs-theme="">
        <Container>
          <Navbar.Brand href="/">BMS(Bank Management System)</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/customer">Customer</Nav.Link>
            <Nav.Link href="/admin">Admin</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
