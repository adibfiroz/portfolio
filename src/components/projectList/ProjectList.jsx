import React from "react";
import "./projectList.scss";

const ProjectList = ({ id, title, active, setSelected }) => {
  return (
    <li
      className={active ? "projectList active" : "projectList"}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
};

export default ProjectList;
