import React from "react";
import "./work.scss";
import BusinessIcon from "@mui/icons-material/Business";
import DescriptionIcon from "@mui/icons-material/Description";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { motion } from "framer-motion";

const Work = () => {
  return (
    <div className="work" id="works">
      <div className="container">
        <h2 className="workTitle">Work Experience</h2>
        <div className="workcontainer">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="workl"
          >
            <div className="workFlex">
              <BusinessIcon className="icon" />
              <div className="mothshut">
                <a href="https://www.acoup.com/" target="_blank">
                  Acoup
                </a>{" "}
                - <i>Dubai, UAE</i>
              </div>
            </div>
            <div className="workFlex" style={{ marginTop: "20px" }}>
              <CalendarMonthIcon className="icon" />
              <div className="mothshut">2020 Jan - 2024 March</div>
            </div>
            <div className="workFlex" style={{ marginTop: "20px" }}>
              <DescriptionIcon className="icon" />
              <div className="mothshut">
                My work at Acoup
                <ul>
                  <li>
                    This is what a senior developer told me when I was hired.
                    After my interview there were 5 to 6 more people with twice
                    as much experience, but they said I was the fastest one of
                    them.
                  </li>
                  <li>Learned Laravel php framework.</li>
                  <li>
                    Ensuring an optimal user experience across devices is a
                    cornerstone of my approach. I{`'`}ve consistently delivered
                    responsive designs, leveraging media queries and flexible
                    grid systems to guarantee a seamless transition from desktop
                    to mobile.
                  </li>
                  <li>
                    In the fast-paced world of front-end development, staying
                    current with the latest trends and technologies is
                    paramount. Regularly participating in courses online
                    communities, I bring fresh insights and best practices to
                    every project.
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="workr"
          >
            <div className="workFlex">
              <BusinessIcon className="icon" />
              <div className="mothshut">
                <a href="https://www.mouthshut.com/" target="_blank">
                  MouthShut.com
                </a>{" "}
                - <i>Mumbai, India</i>
              </div>
            </div>
            <div className="workFlex" style={{ marginTop: "20px" }}>
              <CalendarMonthIcon className="icon" />
              <div className="mothshut">2020 July - 2023 October</div>
            </div>
            <div className="workFlex" style={{ marginTop: "20px" }}>
              <DescriptionIcon className="icon" />
              <div className="mothshut">
                Worked at MouthShut.com for 3 years.
                <ul>
                  <li>
                    my work invovles development & maintainence of the company
                    website.
                  </li>
                  <li>
                    I have develop newsletters, responsive websites. from
                    creating new pages to changes in existing one.
                  </li>
                  <li>OOCSS practices</li>
                  <li>Seo pratices, testing & optimzation. </li>
                  <li>Solved error logs issues, bugs.</li>
                  <li>
                    Worked in agile environment on software development cylce.
                  </li>
                  <li>
                    Quickly analyzing problems and devising effective and
                    efficient solutions. Diagnosing and resolving issues in a
                    systematic manner.
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Work;
