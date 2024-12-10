import React, { useState } from "react";
import "./certifications.scss";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { motion } from "framer-motion";

const certif = [
  {
    id: 1,
    img: "/img/dap.png",
  },
  {
    id: 2,
    img: "/img/dvp.png",
  },
  {
    id: 3,
    img: "/img/pds.png",
  },
  {
    id: 4,
    img: "/img/webd.jpg",
  },
  {
    id: 5,
    img: "/img/gcp.png",
  },
  {
    id: 6,
    img: "/img/emp.jpg",
  },
];

const Certifications = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
    document.body.classList.add("scrollHide");
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  return (
    <div className="certifications">
      {open && (
        <div className="slidercert">
          <CloseRoundedIcon
            className="close"
            onClick={() =>
              setOpen(false, document.body.classList.remove("scrollHide"))
            }
          />
          <ArrowBackIosNewRoundedIcon
            className="arrow"
            onClick={() => handleMove("l")}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.1 }}
            className="sliderWrapper"
          >
            <img src={certif[slideNumber].img} alt="" className="sliderImg" />
          </motion.div>
          <ArrowForwardIosRoundedIcon
            className="arrow"
            onClick={() => handleMove("r")}
          />
        </div>
      )}
      <div className="container max-w-5xl">
        <h2 className="text-white text-3xl md:text-5xl">Certifications</h2>
        <p className="text-center md:text-lg lg:text-xl max-w-md mx-auto text-white/60">
          Click on below to view
        </p>
        <div className="certGall mt-12">
          {certif.map((photo, i) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="gallCard"
              onClick={() => handleOpen(i)}
              key={photo.id}
            >
              <img src={photo.img} alt="gall" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
