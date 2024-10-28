import "./Home.css"
import BGIMG from "..//images/bgm3.jpg"
import diamond from "..//images/diamond.gif";
import { Image, Container, Row, Col } from 'react-bootstrap';
import 'animate.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  return (
    <div className="">
      <Image src={BGIMG} fluid className="bgimg" />
      <section className="get-ideas">
        <Container fluid className="">

          <Row className="tst">
            <Col xs={12} md={6} className="tst1">
              <p className="tst1a1 ubuntu-regular-italic animate__zoomInUp">Get your ideas Designed & Developed
                <span className="tst1a2"> by the Best</span>
              </p>

              <p className="ubuntu-regular-italic tst1a3">
                We, <span className="tst1a2">JCians</span> mainly focus on perfection and innovation as our core essentials, in design and development.
              </p>
            </Col>
            <Col xs={12} md={6} className="tst2">

              {/* <Image src={diamond} fluid className="tst2a1" />; */}

            </Col>
          </Row>

        </Container>

      </section>
      <section className='core-section'>
        {/* <Image src={BGIMG} fluid className="bgimg1" /> */}

        <Container>
          <Row className='core-services'>
            <Col xs={12} md={9} className="core-col">
              <h1 className="core-cont">
                Core <span className="services-span">Services</span>
              </h1>
            </Col>
            <Col xs={12} md={3} className="">
              <div className="book-consult">
                <p>
                  Book Free Consultation
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <p className="core-para">We’re all about bringing your ideas to life through innovative, tailor-made digital solutions. From sleek websites to engaging mobile apps and effective digital marketing strategies, we have everything you need to grow in today’s fast-paced digital world. Our experts don’t just build for today—we build with tomorrow in mind. Looking for design, development, or marketing solutions? Capecom is your partner for success. Ready to create something amazing?</p>
        </Container>

      </section>
      <Container fluid className="blank">
        <Container fluid className="box-contaienr">
          <Row className='mt-5'>
            <Col xs={12} md={3} className="corebox1 ">
              <div className="corebox">
                <Row>
                  <Col>
                    <FontAwesomeIcon icon={faGlobe} className="globe m-2" size="3x" />
                  </Col>
                  <Col>
                    <p>
                      Web Development
                    </p>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col xs={12} md={3} className="corebox2 ">
              <div className="corebox">
              </div>
            </Col>
            <Col xs={12} md={3} className="corebox3 ">
              <div className="corebox">
              </div>
            </Col>
            <Col xs={12} md={3} className="corebox4 ">
              <div className="corebox">
              </div>
            </Col>
          </Row>
        </Container>
      </Container>


    </div>

  );
};

export default Home;
