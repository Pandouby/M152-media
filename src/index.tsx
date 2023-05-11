import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import Gallery from "./components/Gallery/Gallery";
import Modal from "./components/Gallery/Modal";
import reportWebVitals from "./reportWebVitals";
import Video from "./components/Video/Video";
import Container from "./components/Container";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const images = [
  { src: "./images/IMG_0030.JPG", alt: "" },
  { src: "./images/IMG_0039.JPG", alt: "" },
  { src: "./images/IMG_0032.JPG", alt: "" },
  { src: "./images/IMG_0034.JPG", alt: "" },
  { src: "./images/IMG_0029.JPG", alt: "" },
  { src: "./images/IMG_0038.JPG", alt: "" },
  { src: "./images/lake.jpeg", alt: "" },
  { src: "./images/lake.jpeg", alt: "" },
  { src: "./images/IMG_0027.JPG", alt: "" },
  { src: "./images/IMG_0031.JPG", alt: "" },
];

root.render(
  <React.StrictMode>
    <Container>
      <Video videoScr="./videos/Timeline 6.mov" posterSrc={""}/>
    </Container>

    <Container>
      <Gallery images={images} />
    </Container>

    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
