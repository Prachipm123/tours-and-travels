import React from "react";
import Link from "next/link";
import { SiYourtraveldottv } from "react-icons/si";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("navBar");
  const showNav = () => {
    setActive("navBar activeNavbar");
  };

  const removeNav = () => {
    setActive("navBar");
  };

  const [transparant, setTransparant] = useState("header");
  const addBg = () => {
    if (window.scrollY >= 10) {
      setTransparant("header activeHeader");
    } else {
      setTransparant("header");
    }
  };

  return (
    <section className="navBarSection">
      <div className={transparant}>
        <div className="logoDiv">
          <Link href="/" className="logo">
            <h1 className="flex">
              <SiYourtraveldottv className="icon" />
              Dot
            </h1>
          </Link>
        </div>

        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <Link href="/" className="navLink">
                Home
              </Link>
            </li>

            <li className="navItem">
              <Link href="/about" className="navLink">
                About us
              </Link>
            </li>

            <li className="navItem">
              <Link href="/contact" className="navLink">
                Contact Us
              </Link>
            </li>

            <div className="headerBtns flex">
              <button className="btn loginBtn">
                <Link href="#">Login</Link>
              </button>

              <button className="btn">
                <Link href="#">Sign Up</Link>
              </button>
            </div>
          </ul>
          <div onClick={removeNav} className="closeNavbar">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>

        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className="icon" />
        </div>
      </div>
    </section>
  );
};

export default Navbar;
