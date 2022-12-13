import React from "react";
// import image from "./airLogo.png";
import "./NavbarTwo.css";

const NavnarTwo = () => {
  return (
    <>
      <div id="navbarTwoContainer">
        <div id="imgDiv">
          <img src="./images/airLogo.png" alt="" id="airLogo" />
        </div>
        <div id="contentDiv">
          <ul id="navbarTwo">
            <div id="slidingMarguee"></div>
            <li>
              <a href="">Home </a>
            </li>
            <li>
              <a href="">About </a>
            </li>
            <li>
              <a href="">Admission </a>
            </li>
            <li>
              <a href="">Scholarship </a>
            </li>
            <li>
              <a href="">Faculty </a>
            </li>
            <li>
              <a href="">Research </a>
            </li>
            <li>
              <a href="">Offices </a>
            </li>
            <li>
              <a href="">Contact Us </a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <marquee id="slide" height="auto" width="auto" direction="">
          Student Feedback Fall 2022 Islamabad || Admission Here || Student
          Feedback Fall 2022 Islamabad || Academic Calender 2022-2023
        </marquee>
      </div>
    </>
  );
};

export default NavnarTwo;
