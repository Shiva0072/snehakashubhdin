import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="yel">
      <div className="name">
        <span>Shubham</span>
        <span>Weds</span>
        <span>Sneha</span>
      </div>
      <div className="invite-heading">
        <p>Together with their parents</p>
        <p>Invite you to celebrate their wedding</p>
      </div>
      <a href="#footer">
        <button type="submit" class="btn btn-primary">
          RSVP
        </button>
      </a>
    </section>
  );
}
