import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/about_profile.svg";
import my_profile_img from "../../assets/my_profile_img.jpg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={my_profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I'm an experienced Full Stack Developer with over 2 years of
              software development experience and a Master's in Computer Science
              from University of California, Irvine.
            </p>
            <p>
              I'm a proactive team player and problem solver, with excellent
              communication skills, and I'm always eager to learn new
              technologies and take on new challenges.
            </p>
          </div>
          <div className="about-skills-box">
            <div className="about-skills">
              <div className="about-skill">
                <p>HTML/CSS</p>
              </div>
              <div className="about-skill">
                <p>Javascript</p>
              </div>
              <div className="about-skill">
                <p>React</p>
              </div>
              <div className="about-skill">
                <p>Next</p>
              </div>
              <div className="about-skill">
                <p>NodeJS</p>
              </div>
              <div className="about-skill">
                <p>Typescript</p>
              </div>
            </div>
            <div className="about-skills">
              <div className="about-skill">
                <p>C++</p>
              </div>
              <div className="about-skill">
                <p>Python</p>
              </div>
              <div className="about-skill">
                <p>Java</p>
              </div>
            </div>
            <div className="about-skills">
              <div className="about-skill">
                <p>SQL</p>
              </div>
              <div className="about-skill">
                <p>MongoDB</p>
              </div>
              <div className="about-skill">
                <p>Neo4j</p>
              </div>
              <div className="about-skill">
                <p>Cassandra</p>
              </div>
              <div className="about-skill">
                <p>GraphQL</p>
              </div>
            </div>
            <div className="about-skills">
              <div className="about-skill">
                <p>Databricks</p>
              </div>
              <div className="about-skill">
                <p>Spark</p>
              </div>
              <div className="about-skill">
                <p>Hadoop</p>
              </div>
            </div>
            <div className="about-skills">
              <div className="about-skill">
                <p>AWS</p>
              </div>
              <div className="about-skill">
                <p>Docker</p>
              </div>
              <div className="about-skill">
                <p>Kubernetes</p>
              </div>
              <div className="about-skill">
                <p>Git</p>
              </div>
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
          <h1>4</h1>
          <p>AWARDS WON TILL NOW</p>
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
