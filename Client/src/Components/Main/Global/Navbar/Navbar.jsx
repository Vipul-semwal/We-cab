import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <header className="relative">
      <nav className="flex justify-between navbar fix-navbar items-center">
        <div className="logo">
          <Link to="/">
            <img width="100%" src="wecare_logo.svg" alt="logo" />
          </Link>
        </div>

        <ul className="text-black flex justify-evenly items-center gap-10">
          <li>
            <Link to="/home">
              <h5>Home</h5>
            </Link>
          </li>
          <li>
            <Link to="/destination">
              <h5>Destination</h5>
            </Link>
          </li>
          <li>
            <Link to="/booking">
              <h5>Cars</h5>
            </Link>
          </li>
          <li>
            <Link to="/overview">
              <h5>Blogs</h5>
            </Link>
          </li>
          <li>
            <h5>Pages</h5>
          </li>
        </ul>

        {isMenuVisible ? (
          <FaTimes className="menu" onClick={toggleMenu} />
        ) : (
          <FaBars className="menu" onClick={toggleMenu} />
        )}
      </nav>

      <div className={`hidden-menus ${isMenuVisible ? "active" : ""}`}>
        <ul className="text-black flex flex-col p-4 justify-evenly items-center gap-4 w-full">
          <li>
            <Link to="/home">
              <h5>Home</h5>
            </Link>
          </li>
          <li>
            <Link to="/destination">
              <h5>Destination</h5>
            </Link>
          </li>
          <li>
            <Link to="/booking">
              <h5>Cars</h5>
            </Link>
          </li>
          <li>
            <Link to="/blogs">
              <h5>Blogs</h5>
            </Link>
          </li>
          <li>
            <h5>Pages</h5>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
