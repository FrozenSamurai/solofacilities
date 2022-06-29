import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

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

const Slideshow = () => {
  return (
    <div className="h-full w-full">
      <Slide className="w-full">
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
