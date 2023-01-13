import React from "react";
import useViewport from "../Hooks/useViewport.js";
import "./Couple.css";

const VenueDay = () => {
  return (
    <>
      <h2>When : </h2>
      <span>Monday</span>
      <span> 30 Jan. 2023</span>
    </>
  );
};
const VenuePlace = () => {
  return (
    <>
      <h2>Where : </h2>
      <span>Bhidan Garder 2</span>
      <span> Ultatanga, Kolkata</span>
    </>
  );
};

export default function Couple() {
  const width = useViewport().width;
  const breakPoint = width > 900;

  return (
    <div id="venue-bg">
      <section id="venue" style={{ display: breakPoint ? "flex" : null }}>
        {breakPoint && (
          <div className="venue-add">
            <VenueDay />
          </div>
        )}
        <div className="venue-img-container">
          <img
            className="venue-img"
            alt="couple"
            src={require("../Assets/imgs_misc/couple.jpg")}
          />
        </div>
        {breakPoint && (
          <div className="venue-add">
            <VenuePlace />
          </div>
        )}
        {!breakPoint && (
          <div className="venue-add-mobile">
            <div className="venue-add">
              <VenueDay />
            </div>
            <div className="venue-add">
              <VenuePlace />
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
