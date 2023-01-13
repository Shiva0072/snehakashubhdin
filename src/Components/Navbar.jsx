import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div class="navbar">
      <a href="#hero">
        <img
          class="sticker"
          src={require("../Assets/imgs_misc/heart-sticker.png")}
          alt="heart"
        />
      </a>

      <ul>
        <li>
          <a href="#couple">Couple</a>
        </li>
        <li>
          <a href="#gallery">Gallery</a>
        </li>
        {/* <li>
          <a href="#engagement">Engagement</a>
        </li>
        <li>
          <a href="#haldi">Haldi</a>
        </li>
        <li>
          <a href="#shaadi">Shaadi</a>
        </li>
        <li>
          <a href="#venue">Venue</a>
        </li> */}
      </ul>
    </div>
  );
}
