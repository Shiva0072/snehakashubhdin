import React, { useState } from "react";
import { IoIosClose } from "react-icons/io";
import "./Gallery.css";
import getFiles from "../utils/getFiles.js";

// const data = getFiles();
const data = [
  require("../Assets/images/5.jpg"),
  require("./../Assets/images/1.jpg"),
  require("../Assets/images/2.jpg"),
  require("../Assets/images/3.jpg"),
  require("../Assets/images/4.jpg"),
  require("../Assets/images/6.jpg"),
  require("../Assets/images/7.jpg"),
  require("../Assets/images/8.jpg"),
  require("../Assets/images/9.jpg"),
  require("../Assets/images/10.jpg"),
  require("../Assets/images/11.jpg"),
  require("../Assets/images/12.jpg"),
  require("../Assets/images/13.jpg"),
];

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
        {data.map((img, index) => {
          //   console.log("im  -= ", img);
          // const img = require(`../Assets/images/${item.substr(2)}`);
          console.log("herer using : ", `"${img}"`);
          return (
            <div key={index} className="pics" onClick={() => displayImg(img)}>
              <img
                src={img}
                // src={require(`'${img}'`)}
                // src={require("./../Assets/images/3.jpg")}
                alt="wallpaper"
                style={{ width: "100%" }}
              />{" "}
            </div>
          );
        })}
      </div>
    </>
  );
}
