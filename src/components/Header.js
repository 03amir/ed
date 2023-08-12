import React from "react";
import logo from "../assets/LOGO.png";
import search_icon from "../assets/search_icon.png";
import "../styles/header.css";

export default function Header() {
  return (
    <>
      <div className="nav">
        <div className="left-nav">
          <img src={logo} />

          <select>
            <option>Courses</option>
          </select>

          <select>
            <option>Programs</option>
          </select>
        </div>

        <div className="right-nav">
          <img src={search_icon} />
          <p>Log in</p>
          <button id="join-btn">JOIN NOW</button>
        </div>
      </div>
    </>
  );
}
