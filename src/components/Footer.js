import { Image, Container, Row, Col } from 'react-bootstrap';
import "./Footer.css"
import jcslogo from "..//images/Jclick-White.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';



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
        <FontAwesomeIcon icon={faEnvelope} />
         <span>info@jclicksolutions</span>
        </li>
        <li>
        <FontAwesomeIcon icon={faEnvelope} />
         <span>info@jclicksolutions</span>
        </li>
      </ul>
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
