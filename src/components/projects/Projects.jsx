import React, { useEffect, useState } from "react";
import "./projects.scss";
import ProjectList from "../projectList/ProjectList";
import { videoapp, shopapp, bookingapp, fiverrapp, blogapp } from "../../data";

const Projects = () => {
  const [selected, setSelected] = useState("fiverr");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "fiverr",
      title: "Fiverr",
    },
    {
      id: "blog",
      title: "Blog",
    },
    {
      id: "booking",
      title: "Booking",
    },
    {
      id: "videoapp",
      title: "Video App",
    },
    {
      id: "shop",
      title: "Shop",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "fiverr":
        setData(fiverrapp);
        break;
      case "booking":
        setData(bookingapp);
        break;
      case "shop":
        setData(shopapp);
        break;
      case "blog":
        setData(blogapp);
        break;
      case "videoapp":
        setData(videoapp);
        break;
      default:
        setData(fiverrapp);
    }
  }, [selected]);
  return (
    <div className="projects">
      <div className="container">
        <h2 className="projectsTitle">My other web projects</h2>
        <div>
          <ul>
            {list.map((item) => (
              <ProjectList
                title={item.title}
                active={selected === item.id}
                setSelected={setSelected}
                id={item.id}
                key={item.id}
              />
            ))}
          </ul>
        </div>
        <div className="gridCard">
          {data.map((d) => (
            <div className="item" key={d.id}>
              <img src={d.img} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
