import { Link } from "react-router-dom";
import "./NavBarr.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function NavBarr() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>

        <Link to='/home' className="txt-dcr logo">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">


            <Link to='/home' className="txt-dcr">
              <Nav.Link href="#home" className="">Home</Nav.Link>

            </Link>

            <Link to='/contact' className="txt-dcr">
              <Nav.Link href="#contact">Contact</Nav.Link>


            </Link>

            <Link to='/career' className="txt-dcr">
              <Nav.Link href="#career">Career</Nav.Link>

            </Link>

            <Link to='/about' className="txt-dcr">
              <Nav.Link href="#about">About</Nav.Link>

            </Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarr;


