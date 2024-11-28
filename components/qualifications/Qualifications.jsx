import React from "react";
import "./qualifications.scss";
import { motion } from "framer-motion";

const Qualifications = () => {
  return (
    <div className="qualifications" id="qualifications">
      <div className="container">
        <h2>My Qualifications</h2>
        <div className="qflex">
          <div className="ql ">
            <div className="qcard shadow-lg shadow-white/5">
              <div className="qcardl">
                <img src="/img/ssc.jpg" alt="ssc" />
              </div>
              <div className="qcardr">
                <div className="qtitle">SSC standard 10th</div>
                <div className="qstudy">At St. Xavier{`'`}s High School</div>
                <div className="passYear">2013 passing Year</div>
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="percent"
                >
                  71
                </motion.span>
              </div>
            </div>
          </div>
          <div className="qr">
            <div className="qcard shadow-lg shadow-white/5">
              <div className="qcardl">
                <img src="/img/diploma.jpg" alt="ssc" />
              </div>
              <div className="qcardr">
                <div className="qtitle">Diploma</div>
                <div className="qstudy">Electronics and Telecommunications</div>
                <div className="passYear">2016 passing Year</div>
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="percent"
                >
                  73
                </motion.span>
              </div>
            </div>
          </div>
        </div>
        <div className="degree">
          <div className="qcard shadow-lg shadow-white/5">
            <div className="qcardl">
              <img src="/img/degree.png" alt="ssc" />
            </div>
            <div className="qcardr">
              <div className="qtitle">Bachlor{`'`}s Degree</div>
              <div className="qstudy">Electronics and Telecommunications</div>
              <div className="passYear">2019 passing Year</div>
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="percent"
              >
                6.8
              </motion.span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qualifications;
