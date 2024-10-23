import { Image, Container, Row, Col } from 'react-bootstrap';
import "./Footer.css"
import jcslogo from "..//images/Jclick-White.png";

const Footer = () => {
  return <footer>

<section>
<Container fluid className='footer-class'>
  <Row className=''>
    <Col xs={12} md={4}>
    <Image src={jcslogo} fluid className="" />;

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
