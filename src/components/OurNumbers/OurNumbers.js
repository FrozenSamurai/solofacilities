import React, { useState } from "react";
import AnimatedNumbers from "react-animated-numbers";

const OurNumbers = () => {
  const [num, setNum] = useState(310);
  const [num2, setNum2] = useState(2050);
  const [num3, setNum3] = useState(5);
  const [num4, setNum4] = useState(2);
  return (
    <div className="flex justify-center items-center md:flex-row flex-col text-white font-bold md:space-x-12 space-y-2 md:space-y-0">
      <div
        className="flex flex-col justify-center items-center rounded-full h-44 w-44  bg-fit bg-center backdrop-filter backdrop-sepia "
        style={{
          backgroundImage: "url('/projects.png')",
          //   backgroundFilter: "grayscale(90%)",
        }}
      >
        {/* <img src="/projects.png" alt="Projects" className="w-16" /> */}
        <AnimatedNumbers
          includeComma
          animateToNumber={num}
          fontStyle={{ fontSize: 32, fontStyle: "bold" }}
          configs={[
            { mass: 1, tension: 220, friction: 100 },
            { mass: 1, tension: 180, friction: 130 },
            { mass: 1, tension: 280, friction: 90 },
            { mass: 1, tension: 180, friction: 135 },
            { mass: 1, tension: 260, friction: 100 },
            { mass: 1, tension: 210, friction: 180 },
          ]}
        ></AnimatedNumbers>
        <h1 className="">Project Complete</h1>
      </div>
      <div
        className="flex flex-col justify-center items-center rounded-full h-44 w-44  bg-fit bg-center backdrop-filter backdrop-sepia "
        style={{
          backgroundImage: "url('/Happyclient.png')",
          //   backgroundFilter: "grayscale(90%)",
        }}
      >
        {/* <img src="/projects.png" alt="Projects" className="w-16" /> */}
        <AnimatedNumbers
          includeComma
          animateToNumber={num2}
          fontStyle={{ fontSize: 32, fontStyle: "bold" }}
          configs={[
            { mass: 1, tension: 220, friction: 100 },
            { mass: 1, tension: 180, friction: 130 },
            { mass: 1, tension: 280, friction: 90 },
            { mass: 1, tension: 180, friction: 135 },
            { mass: 1, tension: 260, friction: 100 },
            { mass: 1, tension: 210, friction: 180 },
          ]}
        ></AnimatedNumbers>
        <h1 className="">Happy Clients</h1>
      </div>
      <div
        className="flex flex-col justify-center items-center rounded-full h-44 w-44  bg-cover bg-center backdrop-filter backdrop-sepia "
        style={{
          backgroundImage: "url('/awards.png')",
          //   backgroundFilter: "grayscale(90%)",
        }}
      >
        {/* <img src="/projects.png" alt="Projects" className="w-16" /> */}
        <AnimatedNumbers
          includeComma
          animateToNumber={num3}
          fontStyle={{ fontSize: 32, fontStyle: "bold" }}
          configs={[
            { mass: 1, tension: 220, friction: 100 },
            { mass: 1, tension: 180, friction: 130 },
            { mass: 1, tension: 280, friction: 90 },
            { mass: 1, tension: 180, friction: 135 },
            { mass: 1, tension: 260, friction: 100 },
            { mass: 1, tension: 210, friction: 180 },
          ]}
        ></AnimatedNumbers>
        <h1 className="">Win Awards</h1>
      </div>
      <div
        className="flex flex-col justify-center items-center rounded-full h-44 w-44  bg-fit bg-center backdrop-filter backdrop-sepia "
        style={{
          backgroundImage: "url('/location.png')",
          //   backgroundFilter: "grayscale(90%)",
        }}
      >
        {/* <img src="/projects.png" alt="Projects" className="w-16" /> */}
        <AnimatedNumbers
          includeComma
          animateToNumber={num4}
          fontStyle={{ fontSize: 32, fontStyle: "bold" }}
          configs={[
            { mass: 1, tension: 220, friction: 100 },
            { mass: 1, tension: 180, friction: 130 },
            { mass: 1, tension: 280, friction: 90 },
            { mass: 1, tension: 180, friction: 135 },
            { mass: 1, tension: 260, friction: 100 },
            { mass: 1, tension: 210, friction: 180 },
          ]}
        ></AnimatedNumbers>
        <h1 className="">Branches</h1>
      </div>
    </div>
  );
};

export default OurNumbers;
