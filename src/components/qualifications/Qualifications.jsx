import React from "react";
import "./qualifications.scss";

const Qualifications = () => {
  return (
    <div className="qualifications" id="qualifications">
      <div className="container">
        <h2>My Qualifications</h2>
        <div className="qflex">
          <div className="ql">
            <div className="qcard">
              <div className="qcardl">
                <img src="/img/ssc.jpg" alt="ssc" />
              </div>
              <div className="qcardr">
                <div className="qtitle">SSC standard 10th</div>
                <div className="qstudy">At St. Xavier's High School</div>
                <div className="passYear">2013 passing Year</div>
                <span className="percent">71</span>
              </div>
            </div>
          </div>
          <div className="qr">
            <div className="qcard">
              <div className="qcardl">
                <img src="/img/diploma.jpg" alt="ssc" />
              </div>
              <div className="qcardr">
                <div className="qtitle">Diploma</div>
                <div className="qstudy">Electronics and Telecommunications</div>
                <div className="passYear">2016 passing Year</div>
                <span className="percent">73</span>
              </div>
            </div>
          </div>
        </div>
        <div className="degree">
          <div className="qcard">
            <div className="qcardl">
              <img src="/img/degree.png" alt="ssc" />
            </div>
            <div className="qcardr">
              <div className="qtitle">Bachlor's Degree</div>
              <div className="qstudy">Electronics and Telecommunications</div>
              <div className="passYear">2019 passing Year</div>
              <span className="percent">6.8</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qualifications;
