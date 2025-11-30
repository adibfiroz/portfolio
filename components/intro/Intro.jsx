import React from "react";
import "./intro.scss";
import TypewriterComponent from "typewriter-effect";
import { motion } from "framer-motion";
import { ArrowDownward, HandshakeOutlined } from "@mui/icons-material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Intro = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoStart: true,
    autoplay: true,
    slidesToScroll: 1,
  };

  return (
    <div className="intro h-screen homeBanner" id="intro">
      <div className="container">
        <div className="introFlex flex flex-col-reverse justify-center lg:flex-row lg:justify-between gap-3 h-full">
          <div className="introl flex flex-col items-center lg:items-start justify-center">
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
              className=" font-semibold text-white text-4xl md:text-5xl lg:text-6xl my-5"
            >
              Adib Firoz
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="title font-medium"
            >
              <TypewriterComponent
                options={{
                  strings: [
                    "React Developer.",
                    "Software Engineer.",
                    "Frontend Developer.",
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
            className="intror flex lg:items-center justify-center lg:justify-end "
          >
            <div className="relative">
              <div className=" size-40 lg:size-96 overflow-hidden rounded-2xl ">
                <Slider {...settings} className="w-full h-full">
                  <div className=" aspect-square bg-cover bg-[url('/adib-upscale.png')]"></div>
                  <div className=" aspect-square bg-cover bg-center bg-[url('/adib3.jpg')]"></div>
                  <div className=" aspect-square bg-cover bg-center bg-[url('/adib2.jpg')]"></div>
                  <div className=" aspect-square bg-cover bg-center bg-[url('/adib1.jpg')]"></div>
                  <div className=" aspect-square bg-cover bg-center bg-[url('/adib4.jpg')]"></div>
                  <div className=" aspect-square bg-cover bg-center bg-[url('/adib5.jpg')]"></div>
                </Slider>
              </div>
              <div className="exp hidden lg:flex items-center gap-4">
                <div className="expl">5</div>
                <div className="expr">
                  Years of
                  <br />
                  Exp.
                </div>
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
