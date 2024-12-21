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

const HomeComponents = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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

  useEffect(() => {
    const updateViews = async () => {
      try {
        await UpdateViews();
      } catch (error) {
        console.error("Failed to update views:", error);
      }
    };

    updateViews();
  }, []);

  const [views, setViews] = useState(0);

  useEffect(() => {
    const fetchViews = async () => {
      try {
        const views = await GetViews();
        setViews(views);
      } catch (error) {
        console.error("Failed to fetch views:", error);
      }
    };
    fetchViews();
  }, []);

  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasClicked, setHasClicked] = useState(false);

  // Function to handle user interaction for first-time click
  const handleFirstClick = () => {
    if (!hasClicked) {
      audioRef.current.play();
      setIsPlaying(true);
      setHasClicked(true);
    }
  };

  // Play/pause button handler
  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    // Add a one-time click event listener to the document
    document.addEventListener("click", handleFirstClick, { once: true });
    return () => document.removeEventListener("click", handleFirstClick);
  }, [hasClicked]);

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

      <div className="sections">
        <Intro />

        <div className="bg_social blue-gradient">
          <div className="flex1 container">
            <div>
              <Tooltip title="Views" placement="top">
                <div className="bg_View">
                  <VisibilityIcon className="animate-pulse" />
                  {views}
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
        <ProjectBB />
        <Projects />
        <TapeSection />
        <Skill />
        <Qualifications />
        <Certifications />
        <EmpMonth />
        <Contact />
        <div className="footer">
          <div className="container">
            <img src="/img/AF.png" alt="af" />
            <span>
              Made with Next js @23 - {new Date().getFullYear()} By Adib Firoz
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeComponents;
