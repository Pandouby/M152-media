import { useEffect, useState } from "react";
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
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setModalIsOpen(false);
    document.body.style.overflow = "auto";
  };

  const changeIndex = (index: number) => {
    setImageIndex(index);
  };
  
  useEffect(() => {
    const automatic = () => {
      console.log(imageIndex);
  
      if (imageIndex + 1 >= 10) {
        changeIndex(0);
      } else {
        changeIndex(imageIndex + 1);
      }
    };
  
    const intervalId = setInterval(automatic, 3000);
  
    return () => {
      clearInterval(intervalId);
    };
  }, [imageIndex]);

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
          key={index}
          image={image}
          index={index}
          openModal={() => openModal(index)}
        />
      ))}
    </div>
  );
}

export default Gallery;
