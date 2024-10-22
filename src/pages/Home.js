import "./Home.css"
import BGIMG from "..//images/white.jpg"
import diamond from "..//images/diamond.gif";
import { Image, Container, Row, Col } from 'react-bootstrap';


const Home = () => {
  return (
    <div className="">

      <Image src={BGIMG} fluid className="bgimg" />;

      <section className="get-ideas">
        <Container fluid className="">

          <Row className="tst">
            <Col xs={12} md={6} className="tst1">
              <p className="tst1a1 ubuntu-regular-italic">Get your ideas Designed & Developed
                <span className="tst1a2"> by the Best</span>
              </p>

              <p className="ubuntu-regular-italic tst1a3">
              We, <span className="tst1a2">JCians</span> mainly focus on perfection and innovation as our core essentials, in design and development.
              </p>
            </Col>
            <Col xs={12} md={6} className="tst2">

             <Image src={diamond} fluid className="tst2a1" />;
               
            </Col>
          </Row>

        </Container>


      </section>
    </div>

  );
};

export default Home;
