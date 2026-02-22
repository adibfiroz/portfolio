import React from "react";
import "./projectbb.scss";
import Link from "next/link";
import { ArrowOutwardOutlined } from "@mui/icons-material";
import Card from "../card";

const ProjectBB = () => {
  const featuredProjects = [
    {
      id: 1,
      name: "Pernida",
      desc: "Welcome to the future of creativity. My new Generative AI suite empowers you to transform ideas into stunning images and videos instantly. Explore community-driven inspiration, use our intuitive design tools, or keep your creations secure with private generation modes. Your imagination, powered by AI.",
      tech: "next js, react, mongoDB, prisma, shadcn/ui, tyescript, redux",
      url: "https://www.pernida.com/",
      img: "img/pernida2.png",
      btnText: "Visit Live Site",
    },
    // {
    //   id: 2,
    //   name: "Pixsider",
    //   desc: "Created by me and Built for AI, where you can browse thousands of AI images, you can download, like and save your images through collections. you can also generate captions of images and much more...",
    //   tech: "next js, react, stripe, mongoDB, prisma, ant design",
    //   url: "https://pixsider.com/",
    //   img: "img/pixsider.png",
    //   btnText: "Visit Live Site",
    // },
    {
      id: 3,
      name: "ICare Cordinator",
      desc: "Implemented a real-time patient monitoring system using websockets with camera controls. Different views to observe patients one with task and other with batch monitoring",
      url: "/",
      tech: "react, tyescript, redux, REST API, tailwind css, ant design, vite",
      img: "img/icare.png",
      btnText: "Visit Site",
    },
    {
      id: 4,
      name: "The Kaizoku labs",
      desc: "An E-commerce platform built with React, featuring a modern UI and seamless user experience. A full-featured shopping experience with cart and many other features.",
      tech: "react, typescript, tailwind css, next js, shadcn/ui",
      url: "https://www.thekaizokulabs.com/",
      img: "img/ecommerce.png",
      btnText: "Visit Demo Site",
    },
  ];

  return (
    <section className="my-10 projectbb" id="projects">
      <div className="container">
        <h2 className="text-white text-3xl md:text-5xl">Featured Projects</h2>
        <p className=" text-center md:text-lg lg:text-xl max-w-md mx-auto text-white/60 mt-4">
          See how i tranformed concepts into engaging digital experiences.
        </p>

        <div className="flex flex-col gap-20 mt-10 md:mt-20 px-5">
          {featuredProjects.map((project, i) => (
            <Card
              className="px-8 pt-8 pb-0 md:px-12 md:pt-12 lg:pt-16 lg:px-20 sticky"
              key={project.id}
              style={{ top: `calc(80px + ${i * 40}px` }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <h3 className="text-2xl md:text-4xl text-white font-semibold">
                    {project.name}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <p className=" text-sm md:text-base text-white/50 mt-4 md:mt-5">
                    {project.desc}
                  </p>
                  <p className="text-sm md:text-base text-white/50 mt-4">
                    tech: {project.tech}.
                  </p>
                  <Link
                    href={project.url}
                    target="_blank"
                    className={`${
                      project.name === "ICare Cordinator" &&
                      " pointer-events-none opacity-50"
                    }`}
                  >
                    <button className=" text-white blue-gradient inline-flex items-center justify-center gap-2 font-semibold capitalize px-8 py-3 mt-8 w-full md:w-auto text-lg rounded-xl">
                      {project.btnText} <ArrowOutwardOutlined />
                    </button>
                  </Link>
                </div>

                <div className=" relative">
                  <img
                    src={project.img}
                    alt={project.name}
                    className="mt-8 lg:mt-0 lg:absolute lg:h-full rounded-t-xl border border-white/20 lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectBB;
