import React from "react";
import "./intro.scss";
import TypewriterComponent from "typewriter-effect";
import { motion } from "framer-motion";
import { ArrowDownward, HandshakeOutlined } from "@mui/icons-material";

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
            <div className="flex-col sm:flex-row flex gap-x-5">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="contact"
              >
                <a href="#works" className="border border-white/15  rounded-xl">
                  Explore my work <ArrowDownward className="text-lg" />
                </a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="contact"
              >
                <a href="#contact" className="blue-gradient rounded-xl">
                  <HandshakeOutlined className="text-xl mr-2" /> Let{`'`}s
                  Connect
                </a>
              </motion.div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="intror outline outline-2 outline-white/20 rounded-2xl bg-gradient-to-t from-sky-900 to-transparent"
          >
            <div
              className="imgContainer"
              style={{ backgroundImage: `url(/img/adib-png.png)` }}
            >
              <div className="exp hidden lg:flex items-center gap-4">
                <div className="expl">4+</div>
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
