import React from "react";
import "./work.scss";
import BusinessIcon from "@mui/icons-material/Business";
import DescriptionIcon from "@mui/icons-material/Description";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { motion } from "framer-motion";
import Link from "next/link";

const workExp = [
  {
    id: 1,
    company: "Caregility",
    url: "https://caregility.com/",
    location: "A healthcare company in New York, USA",
    duration: "2024 - Present",
    workMode: "Remote",
    details: [
      "From the beginning, I was involved in a new project called iCare. I had the opportunity to select some of the technologies used in building the platform. This project aims to enhance patient care efficiency by providing a platform where doctors and nurses can manage and track patient tasks, with automation based on recurrence and frequency.",
      "I have been responsible for implementing the frontend, including API integrations and UI enhancements, addressing challenges as they arise.",
      "The project was presented at a conference, where it was showcased to multiple clients and received highly positive feedback.",
    ],
  },
  {
    id: 2,
    company: "Acoup",
    url: "https://www.acoup.com/",
    location: "A Recruitment company in Dubai, UAE",
    duration: "January 2020 - March 2024",
    workMode: "Onsite",
    details: [
      "When I was hired, a senior developer mentioned that despite competing with candidates who had twice the experience, I was chosen for my speed and efficiency.",
      "Gained proficiency in the Laravel PHP framework.",
      "Focused on ensuring an optimal user experience across devices by implementing responsive designs using media queries and flexible grid systems, ensuring seamless transitions between desktop and mobile.",
      "Kept up with the latest front-end development trends and technologies by actively participating in online courses and developer communities, applying best practices to projects.",
    ],
  },
  {
    id: 3,
    company: "MouthShut.com",
    url: "https://www.mouthshut.com/",
    location: "A digital marketing company in Mumbai, India",
    duration: "July 2020 - October 2023",
    workMode: "Remote/Hybrid",
    details: [
      "Responsible for the development and maintenance of the company website.",
      "Developed newsletters and responsive web pages, including new features and modifications to existing ones.",
      "Led a team for 1.8 years, managing project execution and team coordination.",
      "Implemented SEO best practices, conducted testing, and optimized web performance.",
      "Resolved error logs, fixed bugs, and ensured smooth website functionality.",
      "Worked in an agile environment, contributing to the software development lifecycle.",
      "Demonstrated strong problem-solving skills, quickly analyzing and resolving issues systematically and efficiently.",
    ],
  },
];
const Work = () => {
  return (
    <div className="work mt-12 md:mt-20" id="works">
      <div className="container">
        <h2 className="workTitle text-white text-3xl md:text-5xl">
          Work Experience
        </h2>
        <div className="workcontainer">
          <div className="grid xl:grid-cols-3 gap-10">
            {workExp.map((work, i) => (
              <motion.div
                key={work.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-800 rounded-3xl overflow-hidden relative z-0 after:z-10 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-3xl after:outline-white/20 p-8 after:pointer-events-none"
              >
                <div className="workFlex">
                  <BusinessIcon className="icon" />
                  <div className="mothshut">
                    <Link href={work.url} target="_blank">
                      {work.company}
                    </Link>{" "}
                    - <i>{work.location}</i>
                  </div>
                </div>
                <div className="workFlex" style={{ marginTop: "20px" }}>
                  <CalendarMonthIcon className="icon" />
                  <div className="mothshut">
                    {work.duration} - <i>{work.workMode}</i>
                  </div>
                </div>
                <div className="workFlex" style={{ marginTop: "20px" }}>
                  <DescriptionIcon className="icon" />
                  <div className="mothshut">
                    My work at {work.company}
                    <ul>
                      {work.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
