import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import Gallery from "./components/Gallery/Gallery";
import reportWebVitals from "./reportWebVitals";
import Video from "./components/Video/Video";
import Container from "./components/Container";
import Animation from "./components/Animation/Animation"

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const images = [
  { src: "./images/IMG_0030.JPG", alt: "White flower" },
  { src: "./images/IMG_0039.JPG", alt: "Green moss" },
  { src: "./images/IMG_0032.JPG", alt: "Dryed up flower" },
  { src: "./images/IMG_0034.JPG", alt: "Dryed up flowers" },
  { src: "./images/IMG_0029.JPG", alt: "Strain of hay" },
  { src: "./images/IMG_0038.JPG", alt: "Bundle of dryed hay" },
  { src: "./images/IMG_0037.JPG", alt: "Sunny path" },
  { src: "./images/IMG_0039.JPG", alt: "Green moss" },
  { src: "./images/IMG_0027.JPG", alt: "Flowers blooming" },
  { src: "./images/IMG_0031.JPG", alt: "Macro flower" },
];

root.render(
  <React.StrictMode>
    <Container>
      <Video videoScr="./videos/Timeline 6.mov" posterSrc={'./images/IMG_0027.JPG'}/>
    </Container>

    <Container>
      <Gallery images={images} />
    </Container>

    <Container>
      <Animation />
    </Container>
  </React.StrictMode>
);

reportWebVitals();
