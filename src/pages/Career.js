import "./Career.css"
import { Image, Container, Row, Col,Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Career1 from "..//images/career.png"


const Career = () => {
  return (

      
        <Container fluid className='jcian'>
          <Container>
            <Row className="jrow">
              <Col xs={12} md={6} className="jcol1">
                <h1 className="ubuntu-regular-italic BJCian">
                  Become a Jcian
                </h1>
                <p className="ubuntu-regular-italic ">
                  Invest in your professional growth in the dynamic Tech industry.
                  Join JCS Info-Tech and evolve your career with us
                </p>
                <Button variant="info" size="lg">Explore Openings</Button>{' '}
              </Col>
              <Col xs={12} md={6} className="jcol2">
                <Image src={Career1} fluid className="career1" />;

              </Col>
            </Row>
          </Container>
        </Container>

  
  
  );
};

export default Career;
