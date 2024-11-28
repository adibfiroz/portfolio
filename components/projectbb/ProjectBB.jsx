import React from "react";
import "./projectbb.scss";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

const ProjectBB = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div
      className="projectbb bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-900 via-blue-950 to-blue-900"
      id="projects"
    >
      <div className="container ">
        <div className="bbflex" style={{ marginBottom: "40px" }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bbl"
          >
            <div className="pName">Project: Future Ai</div>
            <div className="pDesc">
              It{`'`}s an Ai Saas website using replicate API. you create Images
              and chat with the model. interact with community images, follow
              users, also make your images private and much more.
            </div>
            <div className="techUse">
              Tech: next js, node, replicate, mongoDB, cloudinary, shadcn/ui
            </div>
            <div className="viewBB">
              <a href="https://future-ai.vercel.app/" target="_blank">
                View project <ArrowOutwardRoundedIcon className="icon" />
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bbr"
          >
            <Slider {...settings}>
              <div>
                <img src="/img/future2.png" />
              </div>
              <div>
                <img src="/img/future1.png" />
              </div>
              <div>
                <img src="/img/future3.png" />
              </div>
              <div>
                <img src="/img/future4.png" />
              </div>
            </Slider>
          </motion.div>
        </div>
        <div className="bbflex">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bbl"
          >
            <div className="pName">Project: Bluwberry</div>
            <div className="pDesc">
              Details: This project has products for softwares where you can
              browse through different softwares and categories. you can write
              reviews of software, saved them and more...
            </div>
            <div className="techUse">Tech: React, node, express, mongoDB</div>
            <div className="viewBB">
              <a href="https://bluwbery.onrender.com/" target="_blank">
                View project <ArrowOutwardRoundedIcon className="icon" />
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bbr"
          >
            <Slider {...settings}>
              <div>
                <img src="/img/b1.png" />
              </div>
              <div>
                <img src="/img/b2.png" />
              </div>
              <div>
                <img src="/img/b3.png" />
              </div>
              <div>
                <img src="/img/b4.png" />
              </div>
            </Slider>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectBB;
