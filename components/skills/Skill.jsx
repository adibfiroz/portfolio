import React from "react";
import "./skills.scss";

const Skill = () => {
  return (
    <div className="skill bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-900 via-blue-950 to-blue-900">
      <div className="container">
        <h2>My Skills</h2>
        <p>I keep upgrading myself with new skills</p>
        <div className="slider">
          <div className="slide-track">
            <div className="slide">React js</div>
            <div className="slide">Node js</div>
            <div className="slide">Express</div>
            <div className="slide">Context API</div>
            <div className="slide">Saas</div>
            <div className="slide">Next js</div>
            <div className="slide">React js</div>
            <div className="slide">Node js</div>
            <div className="slide">Express</div>
            <div className="slide">Context API</div>
            <div className="slide">Saas</div>
            <div className="slide">Next js</div>
          </div>
        </div>

        <div className="slider">
          <div className="slide-track1">
            <div className="slide">Javascript</div>
            <div className="slide">Jquery</div>
            <div className="slide">Bootstrap</div>
            <div className="slide">HTML</div>
            <div className="slide">CSS</div>
            <div className="slide">Material UI</div>
            <div className="slide">Javascript</div>
            <div className="slide">Jquery</div>
            <div className="slide">Bootstrap</div>
            <div className="slide">HTML</div>
            <div className="slide">CSS</div>
            <div className="slide">Material UI</div>
          </div>
        </div>

        <div className="slider">
          <div className="slide-track">
            <div className="slide">MongoDB Atlas</div>
            <div className="slide">OpenAI</div>
            <div className="slide">VSS</div>
            <div className="slide">Postman</div>
            <div className="slide">Software Testing</div>
            <div className="slide">Agile</div>
            <div className="slide">MongoDB Atlas</div>
            <div className="slide">OpenAI</div>
            <div className="slide">VSS</div>
            <div className="slide">Postman</div>
            <div className="slide">Software Testing</div>
            <div className="slide">Agile</div>
          </div>
        </div>

        <div className="slider">
          <div className="slide-track1">
            <div className="slide">shadcn/ui</div>
            <div className="slide">Tailwind</div>
            <div className="slide">prisma</div>
            <div className="slide">typescript</div>
            <div className="slide">vercel</div>
            <div className="slide">stripe</div>
            <div className="slide">shadcn/ui</div>
            <div className="slide">Tailwind</div>
            <div className="slide">prisma</div>
            <div className="slide">typescript</div>
            <div className="slide">vercel</div>
            <div className="slide">stripe</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
