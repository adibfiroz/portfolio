import React from "react";
import "./intro.scss";
import Background from "/img/background.jpg";
import BackgroundPic from "/img/adib.png";
const Intro = () => {
  return (
    <div className="intro" id="intro">
      <div className="backimg">
        <div
          className="image"
          style={{ backgroundImage: `url(${Background})` }}
        ></div>
      </div>

      <div className="container">
        <div className="introFlex">
          <div className="introl">
            <div className="txt1">Hello I'm</div>
            <h1 className="name">Adib Firoz</h1>
            <div className="title">
              <div className="wrapper">
                <h3 className="job">Software Developer</h3>
                <h3 className="job">Full-Stack Developer</h3>
                <h3 className="job">Web Developer</h3>
                <h3 className="job">FrontEnd Developer</h3>
              </div>
            </div>
            <div className="contact">
              <a href="#contact">Contact</a>
            </div>
          </div>
          <div className="intror">
            <div
              className="imgContainer"
              style={{ backgroundImage: `url(${BackgroundPic})` }}
            >
              <div className="exp">
                <div className="expl">3</div>
                <div className="expr">
                  Years of
                  <br />
                  Exp.
                </div>
              </div>
              <div className="trophy">
                <img alt="trophy" src="/img/trophy.png" />
              </div>
            </div>
          </div>
        </div>
        <h1 className="fistn">Adib</h1>
      </div>
      <h1 className="lastn">Firoz</h1>
    </div>
  );
};

export default Intro;
