import React, { useState } from "react";
import "./home.scss";
import Intro from "../../components/intro/Intro";
import Projects from "../../components/projects/Projects";
import ProjectBB from "../../components/projectbb/ProjectBB";
import Navbar from "../../components/navbar/Navbar";
import Menu from "../../components/menu/Menu";
import Work from "../../components/work/Work";
import Skill from "../../components/skills/Skill";
import Qualifications from "../../components/qualifications/Qualifications";
import Certifications from "../../components/certifications/Certifications";
import EmpMonth from "../../components/empMonth/EmpMonth";
import Contact from "../../components/contact/Contact";
import { Link } from "react-router-dom";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    });
  });

  return (
    <div className="home">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <a href="#contact" className="openwork">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Open to work
      </a>
      <div className="sections">
        <Intro />
        <Work />
        <ProjectBB />
        <Projects />
        <Skill />
        <Qualifications />
        <Certifications />
        <EmpMonth />
        <Contact />
        <div className="footer">
          <div className="container">
            <img src="/img/AF.png" alt="af" />
            <span>
              Made with Vite-React {new Date().getFullYear()} By Adib Firoz
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
