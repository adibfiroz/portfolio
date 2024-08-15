import React from "react";
import "./empMonth.scss";
import { motion } from "framer-motion";

const EmpMonth = () => {
  return (
    <div className="empMonth">
      <div className="container">
        <div className="empFlex">
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Employee of the Month
          </motion.h2>
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
