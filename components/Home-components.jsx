"use client";
import { useEffect, useRef, useState } from "react";
import React from "react";
import Navbar from "./navbar/Navbar";
import Menu from "./menu/Menu";
import Intro from "./intro/Intro";
import Work from "./work/Work";
import ProjectBB from "./projectbb/ProjectBB";
import Projects from "./projects/Projects";
import Skill from "./skills/Skill";
import Qualifications from "./qualifications/Qualifications";
import Certifications from "./certifications/Certifications";
import EmpMonth from "./empMonth/EmpMonth";
import Contact from "./contact/Contact";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Tooltip from "@mui/material/Tooltip";
import UpdateViews from "../app/actions/update-views";
import GetViews from "../app/actions/get-views";
import TapeSection from "./tape";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import { useScroll, motion, useTransform } from "framer-motion";
import LikeButton from "./Like";

const HomeComponents = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [views, setViews] = useState(0);

  const audioRef = useRef(null);
  const titleRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: titleRef,
    offset: ["start end", "end start"],
  });

  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      });
    });
  });

  const updateViews = async () => {
    try {
      await UpdateViews();
    } catch (error) {
      console.error("Failed to update views:", error);
    }
  };

  useEffect(() => {
    updateViews();
  }, []);

  const fetchViews = async () => {
    setIsLoading(true);
    try {
      const views = await GetViews();
      setViews(views);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error("Failed to fetch views:", error);
    }
  };

  useEffect(() => {
    fetchViews();
  }, []);

  // Play/pause button handler
  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const transFormTop = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const transFormBottom = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

  return (
    <div className="home bg-gray-900 ">
      <div className="fixed bottom-5 left-5 z-10 ">
        {isPlaying && <img src="img/music.gif" width={50} height={50} alt="" />}
        <audio ref={audioRef} src="/blackmoor-2.MP3" loop />
        <button
          onClick={togglePlayPause}
          className="w-10 h-10 bg-blue-500 text-white rounded-full"
        >
          {isPlaying ? <VolumeUpIcon /> : <VolumeOffIcon />}
        </button>
      </div>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      {/* <Link href="#contact" className=" fixed bottom-5 right-5 z-[4]">
        <button className="relative h-12 w-40 overflow-hidden  bg-[#217bfe] text-white shadow-2xl animate-bounce rounded-full">
          <span className="relative z-10">Open to work</span>
        </button>
      </Link> */}

      <LikeButton />

      <a
        href="/Adib-Firoz-CV.pdf" // The path to your resume in the public folder
        download="Adib-Firoz-CV.pdf"
        className=" fixed bottom-5 right-5 z-20 shadow-md hidden"
      >
        <button className="relative h-12 w-40 overflow-hidden  bg-[#217bfe] text-white shadow-2xl animate-bounce rounded-full">
          <span className="relative">Download CV</span>
        </button>
      </a>

      <div className="sections">
        <Intro />

        <div className="bg_social blue-gradient">
          <div className="flex1 container">
            <div>
              <Tooltip title="Views" placement="top">
                <div className="bg_View">
                  <VisibilityIcon className="animate-pulse" />
                  {isLoading ? (
                    <img
                      src="/btn-loading.gif"
                      width={18}
                      height={18}
                      alt="loader"
                      className="invert-[.60]"
                    />
                  ) : (
                    <>{views}</>
                  )}

                  <span className=" text-sm">views</span>
                </div>
              </Tooltip>
            </div>
            <div className="flex2">
              <Link href="https://github.com/adibfiroz" target="_blank">
                <GitHubIcon className="icon" />
              </Link>
              <Link
                href="https://linkedin.com/in/adib-firoz-52352719b"
                target="_blank"
              >
                <LinkedInIcon className="icon" />
              </Link>
            </div>
          </div>
        </div>
        <Work />

        <section className="pt-28 pb-10">
          <h2
            className="text-4xl md:text-7xl lg:text-8xl flex flex-col overflow-hidden"
            ref={titleRef}
          >
            <motion.span
              className=" whitespace-nowrap text-white"
              style={{ x: transFormTop }}
            >
              Experienced working with international clients
            </motion.span>
            <motion.span
              className=" whitespace-nowrap self-end text-[#64b8fb]"
              style={{ x: transFormBottom }}
            >
              Experienced working with international clients
            </motion.span>
          </h2>
        </section>
        <ProjectBB />
        <Projects />
        <TapeSection />
        <Skill />
        <Qualifications />
        <Certifications />
        <EmpMonth />

        <div className="mb-20">
          <div className=" container mx-auto px-4 ">
            <div className="text-center p-4 py-10 bg-gray-800 rounded-3xl overflow-hidden outline-white/20 outline-2">
              <h2 className="text-white text-3xl md:text-4xl font-bold">
                Also a Content Creator
              </h2>
              <p className="text-sm lg:text-base text-white/60 mt-2">
                besides my work, i like to make content for memes and anime.
              </p>

              <div className="mt-10 flex items-center gap-5 sm:gap-12 justify-center">
                <Link
                  className=""
                  href="https://www.youtube.com/@AdibFiroz"
                  target="_blank"
                >
                  <div className="mb-3">
                    <img
                      src="/ai-adib.png"
                      className="size-20 rounded-full object-cover"
                      alt="adib"
                    />
                  </div>
                  <div className=" relative w-fit mx-auto">
                    <img
                      src="/youtube.svg"
                      className="size-12 relative z-10"
                      alt="youtube"
                    />
                    <span className=" absolute size-4 top-4 right-4 -z-1 bg-white"></span>
                  </div>
                </Link>
                <Link
                  className=" relative"
                  href="https://www.instagram.com/daily_pirates/"
                  target="_blank"
                >
                  <div className="mb-3">
                    <img
                      src="/luffy.webp"
                      className="size-20 rounded-full object-cover"
                      alt="adib"
                    />
                  </div>
                  <div className=" relative w-fit mx-auto">
                    <img
                      src="/instagram.svg"
                      className="size-12 relative z-10"
                      alt="instagram"
                    />
                  </div>
                </Link>
                <Link
                  className=" relative"
                  href="https://www.youtube.com/@DailyPirates"
                  target="_blank"
                >
                  <div className="mb-3">
                    <img
                      src="/luffy.webp"
                      className="size-20 rounded-full object-cover"
                      alt="adib"
                    />
                  </div>
                  <div className=" relative w-fit mx-auto">
                    <img
                      src="/youtube.svg"
                      className="size-12 relative z-10"
                      alt="youtube"
                    />
                    <span className=" absolute size-4 top-4 right-4 -z-1 bg-white"></span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <Contact />
        <div className="footer">
          <div className="container">
            <img src="/logo-adib.png" className="object-cover" alt="adib" />
            <span>
              Made By Adib Firoz using Next js @23 - {new Date().getFullYear()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeComponents;
