import React from "react";
import "./About.scss";

const About: React.FC = () => {
  return (
    <div className="about">
      <div className="card">
        <div className="about-details">
          <h1>About Me</h1>
          <h2>Hinata SEKIGUCHI</h2>
          <h4>4th year Student, Ochanomizu University</h4>
          <p className="about-contact">
            <span>Email:</span> g2120522[at]is.ocha.ac.jp
          </p>
          <p className="about-contact">
            <span>Phone:</span> +81-123-456-7890
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
