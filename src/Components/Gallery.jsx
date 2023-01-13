import React, { useState } from "react";
import { IoIosClose } from "react-icons/io";
import "./Gallery.css";
import getFiles from "../utils/getFiles.js";

const data = getFiles();

export default function Gallery() {
  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempimgSrc] = useState("");

  const displayImg = (imgSrc) => {
    setTempimgSrc(imgSrc);
    setModel(true);
  };

  return (
    <>
      <div className={model ? "model open" : "model"}>
        <div style={{ opacity: 1 }}>
          <img src={tempimgSrc} alt="clickedImg" className="img-opened" />
          <IoIosClose
            className="svg"
            style={{ color: "white", width: "3rem", height: "3rem" }}
            onClick={() => {
              setTimeout(() => {
                setModel(false);
              }, 5);
            }}
          />
        </div>
      </div>
      <div className="gallery">
        {data.map((item, index) => {
          const img = require(`../Assets/images/${item.substr(2)}`);
          return (
            <div key={index} className="pics" onClick={() => displayImg(img)}>
              <img src={img} alt="wallpaper" style={{ width: "100%" }} />{" "}
            </div>
          );
        })}
      </div>
    </>
  );
}
