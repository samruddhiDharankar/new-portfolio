import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/about_profile.svg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I'm an experienced Full Stack Developer with over 2 years of
              software development experience. I'm an experienced Full Stack
              Developer with over 2 years of software development experience.
            </p>
            <p>
              I have a Master's degree in Computer Science from University of
              California Irvine. I'm an experienced Full Stack Developer with
              over 2 years of software development experience.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              {/* <hr stype={{ width: "50%" }} /> */}
            </div>
            <div className="about-skill">
              <p>Javascript</p>
              {/* <hr stype={{ width: "70%" }} /> */}
            </div>
            <div className="about-skill">
              <p>React</p>
              {/* <hr stype={{ width: "60%" }} /> */}
            </div>
            <div className="about-skill">
              <p>Python</p>
              {/* <hr stype={{ width: "50%" }} /> */}
            </div>
            <div className="about-skill">
              <p>C++</p>
              {/* <hr stype={{ width: "50%" }} /> */}
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>2+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>90+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>15+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
