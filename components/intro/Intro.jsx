import React from "react";
import "./intro.scss";
import TypewriterComponent from "typewriter-effect";
import { motion } from "framer-motion";

const Intro = () => {
  return (
    <div className="intro homeBanner" id="intro">
      <div className="container">
        <div className="introFlex">
          <div className="introl">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="txt1"
            >
              Hello I{`'`}m
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="name"
            >
              Adib Firoz
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="title"
            >
              <TypewriterComponent
                options={{
                  strings: [
                    "React Developer.",
                    "FrontEnd Developer.",
                    "Mern stack Developer.",
                    "Web Developer.",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="contact"
            >
              <a href="#contact" className="blue-gradient">
                Contact
              </a>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="intror"
          >
            <div
              className="imgContainer"
              style={{ backgroundImage: `url(/img/adib.png)` }}
            >
              <div className="exp">
                <div className="expl">3+</div>
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
          </motion.div>
        </div>
        <h1 className="fistn">Adib</h1>
      </div>
      <h1 className="lastn">Firoz</h1>
    </div>
  );
};

export default Intro;
