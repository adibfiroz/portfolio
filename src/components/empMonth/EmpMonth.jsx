import React from "react";
import "./empMonth.scss";

const EmpMonth = () => {
  return (
    <div className="empMonth">
      <div className="container">
        <div className="empFlex">
          <h2>Employee of the Month</h2>
          <div className="empphoto">
            <img className="trophy" src="/img/trophy.png" alt="" />
            <img className="emp" src="/img/emp.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmpMonth;
