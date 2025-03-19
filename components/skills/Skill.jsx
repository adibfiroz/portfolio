"use client";

import React, { useRef } from "react";
import Card from "../card";
import Image from "next/image";
import CardHeader from "../card-header";
import SkillItem from "./skill-item";
import { motion } from "framer-motion";

const skillItems = [
  {
    title: "HTML5",
    icon: "img/html5.svg",
  },
  {
    title: "Javascript",
    icon: "img/javascript.svg",
  },
  {
    title: "CSS3",
    icon: "img/css3.svg",
  },
  {
    title: "React",
    icon: "img/react.svg",
  },
  {
    title: "Boostrap",
    icon: "img/bootstrap.svg",
  },
  {
    title: "Jquery",
    icon: "img/jquery.svg",
  },
  {
    title: "Material UI",
    icon: "img/material.svg",
  },
  {
    title: "Mongodb",
    icon: "img/mongodb.svg",
  },
];

const skillItem2 = [
  {
    title: "Tailwind",
    icon: "img/tailwind.svg",
  },
  {
    title: "Next js",
    icon: "img/next-js.svg",
  },
  {
    title: "Node js",
    icon: "img/node-js.svg",
  },
  {
    title: "Postman",
    icon: "img/postman.svg",
  },
  {
    title: "Prisma",
    icon: "img/prisma.svg",
  },
  {
    title: "Scss",
    icon: "img/sass.svg",
  },
  {
    title: "Stripe",
    icon: "img/stripe.svg",
  },
  {
    title: "Typescript",
    icon: "img/typescript.svg",
  },
];

const hobbies = [
  {
    title: "Gaming",
    icon: "🕹️",
    img: "img/gaming.jpg",
    left: "5%",
    top: "5%",
  },
  {
    title: "Food",
    icon: "🍟",
    img: "img/food.jpg",
    left: "50%",
    top: "5%",
  },
  {
    title: "Hiking",
    icon: "🚶‍♂️",
    img: "img/hiking.jpg",
    left: "10%",
    top: "35%",
  },
  {
    title: "Movies",
    icon: "📽️",
    img: "img/movie.jpeg",
    left: "35%",
    top: "40%",
  },
  {
    title: "Travel",
    icon: "🚌",
    img: "img/travel.jpg",
    left: "70%",
    top: "45%",
  },
  {
    title: "Anime",
    icon: "🎬",
    img: "img/anime.jpg",
    left: "5%",
    top: "65%",
  },
  {
    title: "RC Hobby",
    icon: "🛩️",
    img: "img/rc.jpg",
    left: "45%",
    top: "70%",
  },
];

const Skill = () => {
  const constraintRef = useRef(null);

  return (
    <div className="container mx-auto p-5">
      <div className="flex flex-col gap-8">
        <div className="grid grid-cols-1 gap-8 md:grid md:grid-cols-5 lg:grid-cols-3">
          <Card className="h-[320px] md:col-span-2 lg:col-span-1 p-0">
            <CardHeader
              title="My Reads"
              desc="Exploring, learning the tools use to build AI. -> TensorFlow"
              className="px-6 pt-6 md:px-10 md:pt-8"
            />
            <div className="w-40 mx-auto mt-8">
              <img src="img/tensorflow.png" className="" alt="" />
            </div>
          </Card>
          <Card className="h-[320px] p-0 md:col-span-3 lg:col-span-2">
            <CardHeader
              title="My Skills"
              desc=" Explore the technologies and tools i use to craft exceptional
              experiences."
              className="px-6 pt-6 md:px-10 md:pt-8"
            />
            <SkillItem
              skillItems={skillItems}
              className="mt-10"
              itemWrapperClassname="animate-move-left [animation-duration:40s]"
            />
            <SkillItem
              skillItems={skillItem2}
              className="mt-6"
              itemWrapperClassname="animate-move-right [animation-duration:30s]"
            />
          </Card>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid md:grid-cols-5 lg:grid-cols-3">
          <Card className="h-[320px] p-0 flex flex-col md:col-span-3  lg:col-span-2">
            <CardHeader
              title="Beyond the Code"
              desc="Explore my interest and hobbies and what i like to do."
              className="px-6 pt-6 md:px-10 md:pt-8"
            />
            <div className=" relative flex-1" ref={constraintRef}>
              {hobbies.map((item) => (
                <motion.div
                  key={item.title}
                  className="cursor-pointer blue-gradient rounded-full py-1.5 absolute"
                  style={{
                    left: item.left,
                    top: item.top,
                  }}
                  drag
                  dragConstraints={constraintRef}
                >
                  <div className="inline-flex items-center gap-2 px-6  relative group/item">
                    <span className="font-medium text-stone-800">
                      {item.title}
                    </span>
                    <span>{item.icon}</span>
                    <img
                      src={item.img}
                      className=" aspect-square absolute left-0 right-0 invisible opacity-0 transition duration-300 bottom-8 group-hover/item:visible group-hover/item:opacity-100 object-cover rounded-md"
                      width={200}
                      height={200}
                      alt=""
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>
          <Card className="h-[320px] p-0 relative md:col-span-2  lg:col-span-1">
            <img
              src="/img/map.png"
              alt="map"
              className="w-full h-full object-cover"
            />
            <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full p-2">
              <div className=" absolute blue-gradient -z-20 inset-0 rounded-full animate-ping [animation-duration:2s]"></div>
              <div className=" absolute blue-gradient -z-10 inset-0 rounded-full"></div>
              <Image
                src="/img/adib.png"
                className=" rounded-full w-16 h-16 object-cover object-top"
                alt="map"
                width={50}
                height={50}
              />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Skill;
