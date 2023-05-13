import React from "react";
import "./projectList.scss";

const ProjectList = ({ id, title, active, setSelected, giturl }) => {
  return (
    <li
      className={active ? "projectList active" : "projectList"}
      onClick={() => setSelected(id)}
    >
      {title}
      {active && (
        <div className="gitlink">
          <a href={giturl} target="_blank">
            View on GitHub
          </a>
        </div>
      )}
    </li>
  );
};

export default ProjectList;
