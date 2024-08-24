import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.svg";
import my_profile_img from "../../assets/my_profile_img.jpg";
import Samruddhi_Dharankar_Resume from "../../assets/Samruddhi_Dharankar_Resume.pdf";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      {/* <img src={my_profile_img} alt="" /> */}
      <h1>
        <span>I'm Samruddhi,</span> Software Developer in the USA
      </h1>
      <p>
        I'm living in California, USA, with 2 years of software development
        experience and project management experience. I love hacky solutions.
        I'm curious minded and always eager to learn new stuff. I enjoy daily
        Wordle and Crosswords. My favorite crossword site is The Globe & Mail.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect With Me
          </AnchorLink>
        </div>
        <div className="hero-resume">
          <a
            href={Samruddhi_Dharankar_Resume}
            target="_blank"
            rel="noopener noreferrer"
            className="resume-link"
          >
            My Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
