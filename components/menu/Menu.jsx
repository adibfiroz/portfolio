import React from "react";
import "./menu.scss";
import { motion } from "framer-motion";
import Link from "next/link";

const Menu = ({ menuOpen, setMenuOpen }) => {
  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  const links = [
    {
      label: "Home",
      href: "#intro",
    },
    {
      label: "Work Exp.",
      href: "#works",
    },
    {
      label: "Projects",
      href: "#projects",
    },
    {
      label: "Qualifications",
      href: "#qualifications",
    },
    {
      label: "Contact",
      href: "#contact",
    },
  ];

  return (
    <div className={"menu " + (menuOpen && "active")}>
      {menuOpen && (
        <motion.ul variants={listVariants} initial="closed" animate="opened">
          {links.map((item) => (
            <motion.li
              variants={listItemVariants}
              onClick={() => setMenuOpen(false)}
              key={item.label}
            >
              <Link href={item.href}>{item.label}</Link>
            </motion.li>
          ))}
        </motion.ul>
      )}
    </div>
  );
};

export default Menu;
