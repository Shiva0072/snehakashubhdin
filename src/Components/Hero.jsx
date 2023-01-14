import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <section class="yel">
      <div class="name">
        <span>Shubham</span>
        <span>&</span>
        <span>Sneha</span>
      </div>
      <p>Invite you to celebrate their wedding</p>
      <a href="#footer">
        <button type="submit" class="btn btn-primary">
          RSVP
        </button>
      </a>
    </section>
  );
}
