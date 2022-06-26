import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

// import React from "react";

const slideImages = [
  {
    url: "/logo512.png",
    caption: "Slide 1",
  },
  {
    url: "/cleaning_image.png",
    caption: "Slide 2",
  },
  {
    url: "images/slide_4.jpg",
    caption: "Slide 3",
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
