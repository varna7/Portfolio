import React from "react";
import { Row, Col } from "react-bootstrap";
import Typewriter from "typewriter-effect";
import Particle from "./Particle";


const Home = () => {
  return (
    <div
      className="home p-xs-2 p-lg-5"
      
    >
      {/* <Particle/> */}
      <Row className="p-5 mx-5 text-white">
        <h1>Hi There!</h1>
        <h1>
          I'M<strong style={{ color: "blueviolet" }} className="display-3"> VARNA M V</strong>
        </h1>
      </Row>
      <Row className="p-3 px-5 mx-5 text-white h3">
        <Typewriter
          options={{
            strings: [
              "Software Developer",
              "Web Designer",
              "MERN Stack Developer",
              
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
      </Row>
      <img className="prof-pic" src="https://media.licdn.com/dms/image/C5603AQEGgpuqBNTajQ/profile-displayphoto-shrink_400_400/0/1650730907734?e=1709769600&v=beta&t=ca0DnHdbUVTtdiClwPiqTWIWcdV6LlD7CfLf_-zsti0" alt="" />
    </div>
  );
};

export default Home;
