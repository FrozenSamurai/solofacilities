import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";

// import React from "react";

const slideImages = [
  {
    url: "/assets/slides/1.jpeg",
    caption: "Slide 1",
  },
  {
    url: "/assets/slides/2.jpeg",
    caption: "Slide 2",
  },
  {
    url: "/assets/slides/3.jpeg",
    caption: "Slide 3",
  },
  {
    url: "/assets/slides/4.jpeg",
    caption: "Slide 4",
  },
  {
    url: "/assets/slides/5.jpeg",
    caption: "Slide 5",
  },
];

const buttonStyle = {
  width: "30px",
  background: "none",
  border: "0px",
};

const properties = {
  prevArrow: (
    <button style={{ ...buttonStyle }} className="nav default-nav">
      <AiOutlineDoubleLeft size={100} />
    </button>
  ),
  nextArrow: (
    <button style={{ ...buttonStyle }} className="nav default-nav">
      <AiOutlineDoubleRight size={100} />
    </button>
  ),
};

const Slideshow = () => {
  return (
    <div className="h-full w-full">
      <Slide className="w-full" {...properties}>
        {slideImages.map((slideImage, index) => (
          <div
            className="flex flex-col h-full items-center justify-center"
            key={index}
          >
            <img src={slideImage.url} alt={slideImage.caption} />

            <br />
            <h1>{slideImage.caption}</h1>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Slideshow;
