import { Link } from "react-router-dom";
import "./NavBarr.css";
import ReactLogo from "..//images/logo-react.png"
import { Nav, Navbar, NavDropdown, Image, Container, Row, Col } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import jcslogo from "..//images/Jclick-White.png";

export default function Navbarr() {
  const [stickyClass, setStickyClass] = useState('');

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);
    return () => window.removeEventListener('scroll', stickNavbar);
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      // window height changed for the demo
      windowHeight > 5 ? setStickyClass('sticky-nav') : setStickyClass('');
    }
  };

  return <div className={`navbar ${stickyClass}`}>


    <Navbar expand="lg" className="main-navbar ubuntu-regular">
      <Container className="Cont-Class">

        <Link to='/home' className="txt-dcr logo">

          <Container>
            <Row className="logo-row">

              <Image src={jcslogo} fluid className="jclicklogo" />






              {/* <Col>
                <Image src={ReactLogo} fluid className="" />
              </Col>
              <Col className="brand-navbr">
                <Navbar.Brand href="#home">React Bootstrap</Navbar.Brand>
              </Col> */}



            </Row>

          </Container>


        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">


            <Link to='/home' className="txt-dcr">
              <Nav.Link href="#home" className="">Home</Nav.Link>

            </Link>



            <Link to='/career' className="txt-dcr">
              <Nav.Link href="#career">Career</Nav.Link>

            </Link>

            <Link to='/about' className="txt-dcr">
              <Nav.Link href="#about">About</Nav.Link>

            </Link>

            <Link to='/contact' className="txt-dcr txt-cnt">
              <Nav.Link href="#contact">Contact Us</Nav.Link>
            </Link>

            <div className="nav-drop-tittle">
              <NavDropdown title="Technologies" id="basic-nav-dropdown" >
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
            </div>


          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>



  </div>;
}



































// function NavBarr() {

//   return (

//     <Navbar expand="lg" className="main-navbar">
//       <Container className="Cont-Class">

//         <Link to='/home' className="txt-dcr logo">

//           <Container>
//             <Row className="logo-row">
//               <Col>
//                 <Image src={ReactLogo} fluid className="" />
//               </Col>
//               <Col className="brand-navbr">
//                 <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//               </Col>



//             </Row>

//           </Container>


//         </Link>

//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto ">


//             <Link to='/home' className="txt-dcr">
//               <Nav.Link href="#home" className="">Home</Nav.Link>

//             </Link>

//             <Link to='/contact' className="txt-dcr">
//               <Nav.Link href="#contact">Contact</Nav.Link>
//             </Link>

//             <Link to='/career' className="txt-dcr">
//               <Nav.Link href="#career">Career</Nav.Link>

//             </Link>

//             <Link to='/about' className="txt-dcr">
//               <Nav.Link href="#about">About</Nav.Link>

//             </Link>
//             <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//               <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action/3.4">
//                 Separated link
//               </NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavBarr;




