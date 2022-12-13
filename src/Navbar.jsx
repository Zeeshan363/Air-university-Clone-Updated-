import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div id="navbarContainer">
        <ul className="navbar">
          <li>
            <a href="">Jobs</a>
          </li>
          <li>
            <a href="">Email</a>
          </li>
          <li>
            <a href="">Ads & Tender</a>
          </li>
          <li>
            <a href="">Library</a>
          </li>
          <li>
            <a href="">Online Portals</a>
          </li>
          <li>
            <a href="">FMC</a>
          </li>
          <li>
            <a href="">Campuses</a>
          </li>
          <li>
            <a href="">Constituent Units</a>
          </li>
          <li>
            <a href="">Affiliated Institutes</a>
          </li>
          <li>
            <a href="">AULMS</a>
          </li>
          <li>
            <a id="admission" href="">
              Admissions Spring 2023
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
