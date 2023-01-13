import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <section class="yel">
      <div class="name">
        <div>Shubham</div>
        <div>&</div>
        <div>Sneha</div>
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
