import "./Home.css"
import BGIMG from "..//images/bgimg.jpg"
import {Container, Image} from 'react-bootstrap'

const Home = () => {
  return (
    <div className="">
      <Image src={BGIMG} fluid className="bgimg" />;
    </div>
  );
};

export default Home;
