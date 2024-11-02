import "./Career.css"
import { Image, Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Career1 from "..//images/career.png"


const Career = () => {
  return (
    <div className="bg page2">
      <section className="">
        <Container fluid className='jcian'>
          <Container>
            <Row className="jrow">
              <Col xs={12} md={6} className="jcol1">
                <h1 className="ubuntu-regular-italic BJCian">
                  Become an Jcian
                </h1>
                <p className="ubuntu-regular-italic ">
                  Invest in your professional growth in the dynamic Tech industry.
                  Join Alo Info-Tech and evolve your career with us
                </p>
              </Col>
              <Col xs={12} md={6} className="jcol2">
                <Image src={Career1} fluid className="career1" />;

              </Col>
            </Row>
          </Container>
        </Container>

      </section>
    </div>
  );
};

export default Career;
