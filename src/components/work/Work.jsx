import React from "react";
import "./work.scss";
import BusinessIcon from "@mui/icons-material/Business";
import DescriptionIcon from "@mui/icons-material/Description";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const Work = () => {
  return (
    <div className="work" id="works">
      <div className="container">
        <h2 className="workTitle">Work Experience</h2>
        <div className="workcontainer">
          <div className="workl">
            <img src="/img/work.jpg" alt="work" />
          </div>
          <div className="workr">
            <div className="workFlex">
              <BusinessIcon className="icon" />
              <div className="mothshut">
                MouthShut.com - <i>Frontend Developer</i>{" "}
              </div>
            </div>
            <div className="workFlex" style={{ marginTop: "20px" }}>
              <CalendarMonthIcon className="icon" />
              <div className="mothshut">2020 - working</div>
            </div>
            <div className="workFlex" style={{ marginTop: "20px" }}>
              <DescriptionIcon className="icon" />
              <div className="mothshut">
                Working at MouthShut.com for 3 years.
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
                  <li>and much more...</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
