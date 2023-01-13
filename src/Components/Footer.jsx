import React from "react";
import "./Footer.css";
import RSVP from "./RSVP";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <img
          src={require("../Assets/gifs/garland.gif")}
          alt="weddingGarland.gif"
          className="gif-garland"
        />
        {/* <h2 className="welcome">Hoping to celebrate with you!</h2>
        <div className="location">
          <h3>Time and Location</h3>
          <p>Jan 30, 2023, 6:00 PM IST onwards</p>
          <p>Bidhan Garden Banquet 2, Ultadanga, Kolkata</p>
        </div> */}
        <RSVP />
      </div>
      <small>#snehakashubhdin</small>
    </div>
  );
}
