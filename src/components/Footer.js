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
     <div className='footercol2'>
      <h5>QUICK LINKS</h5>
      <ul className='unstyle1 foot2ul'>
        <li className='footer2li'><Link to>Home</Link></li>
        <li className='footer2li'><Link to>About</Link></li>
        <li className='footer2li'><Link to>Careers</Link></li>
        <li className='footer2li'><Link to>Contact Us</Link></li>
        <li className='footer2li'><Link to>Blogs</Link></li>     
      </ul>
     </div>
    </Col>
    <Col xs={12} md={2}>
    <div className='footercol2'>
      <h5>TECHNOLOGIES</h5>
      <ul className='unstyle1 foot2ul'>
        <li className='footer2li'><Link to>PHP</Link></li>
        <li className='footer2li'><Link to>Flutter</Link></li>
        <li className='footer2li'><Link to>React Native</Link></li>
        <li className='footer2li'><Link to>Java</Link></li>
        <li className='footer2li'><Link to>.Net</Link></li>       
        <li className='footer2li'><Link to>Kotlin</Link></li>     
        <li className='footer2li'><Link to>Swift</Link></li>     
      </ul>
     </div>
    </Col>
    <Col xs={12} md={2}>
    <div className='footercol2'>
      <h5>EXPERTISE</h5>
      <ul className='unstyle1 foot2ul'>
        <li className='footer2li'><Link to>React JS</Link></li>
        <li className='footer2li'><Link to>Angular JS</Link></li>
        <li className='footer2li'><Link to>Flutter</Link></li>
        <li className='footer2li'><Link to>Laravel</Link></li>
        <li className='footer2li'><Link to>Python</Link></li>       
        <li className='footer2li'><Link to>Node JS</Link></li>     
        <li className='footer2li'><Link to>My SQL</Link></li>     
        <li className='footer2li'><Link to>Mongo DB</Link></li>     
      </ul>
     </div>
    </Col>
    <Col xs={12} md={2}>
    <div className='footercol2'>
      <h5>SERVICES</h5>
      <ul className='unstyle1 foot2ul'>
        <li className='footer2li'><Link to>Web App Development</Link></li>
        <li className='footer2li'><Link to>Mobile App Development</Link></li>
        <li className='footer2li'><Link to>React Native</Link></li>
        <li className='footer2li'><Link to>Digital Marketing</Link></li>
        <li className='footer2li'><Link to>IOT Development</Link></li>       
        <li className='footer2li'><Link to>Blockchain Development</Link></li>     
        <li className='footer2li'><Link to>Artificial Intelligence Solutions</Link></li>     
      </ul>
     </div>
    </Col>


  </Row>
</ Container>
</section>


  </footer>
};

export default Footer;
