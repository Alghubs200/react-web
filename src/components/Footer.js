import { Image, Container, Row, Col } from 'react-bootstrap';
import "./Footer.css"
import jcslogo from "..//images/Jclick-White.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faGlobe} from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

const Footer = () => {
  return <footer>

<section>
<Container fluid className='footer-class'>
  <Row className=''>
    <Col xs={12} md={4}>
    <Image src={jcslogo} fluid className="" />
    <div className='logo-dtls'>
      <ul className='unstyle'>
        <li>
        <FontAwesomeIcon icon={faEnvelope} />
         <span>info@jclicksolutions</span>
        </li>
        <li>
        <FontAwesomeIcon icon={faPhone} />
         <span>91 9025357947</span>
        </li>
        <li>
        <Link to='https://www.jclicksolutions.in/' className='linking'>
        <FontAwesomeIcon icon={faGlobe} />
        <span>Jclicksolutions</span>        
        </Link>
        </li>
      </ul>
      <p className='copyright'>© 2024 Jcs Info Tech. All Rights Reserved.</p>
    </div>

    </Col>
    <Col xs={12} md={2}>
2
    </Col>
    <Col xs={12} md={2}>
3
    </Col>
    <Col xs={12} md={2}>
4
    </Col>
    <Col xs={12} md={2}>
5
    </Col>


  </Row>
</ Container>
</section>


  </footer>
};

export default Footer;
