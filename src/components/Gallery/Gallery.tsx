import React, { useState } from "react";
import Figure from "./Figure";
import Modal from "./Modal";

function Gallery(props: any) {
  const { images } = props;

  interface Image {
    src: string;
    alt: string;
  }

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  const openModal = (index: number) => {
    setModalIsOpen(true);
    changeIndex(index);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const changeIndex = (index: number) => {
    setImageIndex(index);
  };

  return (
    <div id="gallery">
      <Modal
        images={images}
        isOpen={modalIsOpen}
        imageIndex={imageIndex}
        changeIndex={changeIndex}
        closeModal={closeModal}
      />
      {images.map((image: Image, index: number) => (
        <Figure
          image={image}
          index={index}
          openModal={() => openModal(index)}
        ></Figure>
      ))}
    </div>
  );
}

export default Gallery;
