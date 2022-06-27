import React from "react";

const Logo = ({ clientt }) => {
  return (
    console.log(clientt),
    (
      <div
        data-aos="zoom-out"
        className=" w-44 border-2 h-24 rounded-xl  shadow-xl m-2 hover:animate-fadeUp inline-block "
      >
        <div className="flex m-3 h-16 w-40 items-center justify-center pr-2">
          <img src={clientt} alt="altt" className="w-fit h-full" />
        </div>
      </div>
    )
  );
};

export default Logo;
