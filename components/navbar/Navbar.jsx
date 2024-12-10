import React, { useEffect, useState } from "react";
import "./navbar.scss";
import Link from "next/link";

const Navbar = ({ menuOpen, setMenuOpen }) => {
  const [active, setActive] = useState(false);

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  return (
    <div className={"navbar " + (active && "navActive")}>
      <div className="container mx-auto">
        <div className={"nav " + (menuOpen && "active")}>
          <Link href="/">
            <div className="headLeft">
              <img src="/img/AF.png" alt="adib firoz" />
              <span>AdibFiroz</span>
            </div>
          </Link>
          <div className="headRight">
            <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
              <span className="line1"></span>
              <span className="line2"></span>
              <span className="line3"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
