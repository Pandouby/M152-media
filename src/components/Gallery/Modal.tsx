import { log } from "console";
import { delay, motion } from "framer-motion";
import React, { useCallback, useEffect, useState } from "react";

interface ModalProps {
  isOpen: boolean;
  images: Array<Image>;
  imageIndex: number;
  changeIndex: (index: number) => void;
  closeModal: () => void;
}

interface Image {
  src: string;
  alt: string;
}

function Modal(props: ModalProps) {
  const { isOpen, images, imageIndex, changeIndex, closeModal } = props;
  const displayStyle = isOpen
    ? { display: "flex", opacity: 1}
    : { display: "none", opacity: 0};

    /*
    useEffect(() => {
      loopSlideshow();
    }, []);
    */

  function prev() {
    if (imageIndex >= 1) {
      //setIndex(index - 1);
      changeIndex(imageIndex - 1);
    } else {
      //setIndex(images.length - 1);
      changeIndex(images.length - 1);
    }
  }

  function next() {
    if (imageIndex < images.length - 1) {
      //setIndex(index + 1);
      changeIndex(imageIndex + 1);
    } else {
      //setIndex(0);
      changeIndex(0);
    }
  }

  /*
  async function loopSlideshow() {
    if (isOpen) {
      next()
      await delay(3000);
      loopSlideshow()
    }
  }
  */

  const handleKeyDown = (event: any) => {
    if (event.key === 'Escape') {
        closeModal();
      }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const close = (event: any) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  }

  useCallback(() => {
    console.log(imageIndex);
  }, [imageIndex])

  //393 - (imageIndex * 100)


  return (
    <div id="modal" style={displayStyle} onClick={(event) =>close(event)}>
      <div id="modal-content" style={{ transform: `translate3d(${((images.length - 1) / 2 * 100) - imageIndex * 100}%, 0, 0)` }}>
        {images.map((image: Image, index: number) => (
          <img src={images[index].src} alt={images[index].alt}/>
        ))}
      </div>

      <a className="prev" onClick={() => prev()}>
          &#10094;
        </a>
        <a className="next" onClick={() => next()}>
          &#10095;
        </a>

      <div className="dotContainer">
        {images.map((image, i) => (
          <span
            key={i}
            className={`dot ${imageIndex === i ? "active" : ""}`}
            onClick={() => changeIndex(i)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Modal;
