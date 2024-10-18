
import "./Home.css";
import {Container, Row, Col, Image} from 'react-bootstrap';
import React from 'react';
import BGIMG from "../../images/bg_img.jpg";


const Home = () => {
    return (

    
    <>
    <div>
    <Container  >
    <Image src={BGIMG} className="bgimgg" fluid />
    </Container>
   
    </div>
    </>
    );
}

export default Home;