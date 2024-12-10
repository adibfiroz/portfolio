"use client";

import React, { useEffect, useState } from "react";
import "./projects.scss";
import ProjectList from "../projectList/ProjectList";
import {
  videoapp,
  shopapp,
  bookingapp,
  fiverrapp,
  blogapp,
  spotifyclone,
} from "../../data";

const Projects = () => {
  const [selected, setSelected] = useState("fiverr");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "fiverr",
      title: "Fiverr",
      giturl: "https://github.com/adibfiroz/projects/tree/fiverrapp",
    },
    {
      id: "spotify",
      title: "Spotify clone",
      giturl: "https://github.com/adibfiroz/spotify-clone",
    },
    {
      id: "blog",
      giturl: "https://github.com/adibfiroz/projects/tree/blogapp",
      title: "Blog",
    },
    {
      id: "booking",
      title: "Booking",
      giturl: "https://github.com/adibfiroz/projects/tree/booking",
    },
    {
      id: "videoapp",
      giturl: "https://github.com/adibfiroz/projects/tree/videoapp",
      title: "Video App",
    },
    {
      id: "shop",
      giturl: "https://github.com/adibfiroz/projects/tree/shop",
      title: "Shop",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "fiverr":
        setData(fiverrapp);
        break;
      case "spotify":
        setData(spotifyclone);
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
    <div className="projects mb-32">
      <div className="container">
        <h2 className="projectsTitle text-white text-3xl md:text-5xl">
          Other Projects
        </h2>
        <div>
          <ul>
            {list.map((item) => (
              <ProjectList
                title={item.title}
                active={selected === item.id}
                setSelected={setSelected}
                id={item.id}
                key={item.id}
                giturl={item.giturl}
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
