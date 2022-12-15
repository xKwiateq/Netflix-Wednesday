import React from "react";

import Buttons from "./Buttons";

import { SiNetflix } from "react-icons/si";
import { FaPlay } from "react-icons/fa";

const Text = () => {
  return (
    <div className="flex flex-col items-start justify-end  h-[80%]  text-white ">
      <div className="flex justify-center items-center pb-2 sm:pb-4 lg:pb-2">
        <SiNetflix className="text-4xl text-red-600" />
        <p className=" text-2xl tracking-[0.3em] pl-4">SERIES</p>
      </div>
      <p className=" font-semibold md:text-8xl sm:text-7xl text-5xl font-serif flex  items-center">
        <span className="text-6xl sm:text-8xl md:text-9xl mr-1">W</span>
        <p className="lg:mt-[-5px]">EDNESDAY</p>
      </p>
      <p className=" lg:w-[580px] md:w-[540px] sm:w-[400px] w-[300px] mt-5 sm:mt-10">
        Wednesday is an American supernatural mystery comedy horror television
        series based upon the character Wednesday Addams from The Addams Family.
      </p>
      <div className="flex items-center mt-6 gap-4">
        <button className="bg-red-600 text-white px-6 py-2  text-lg font-semibold  hover:bg-red-900 transition-all duration-300 ease-in-out">
          <a
            href="https://www.youtube.com/watch?v=Di310WS8zLk&ab_channel=Netflix"
            className="flex justify-center items-center gap-3"
            target={"_blank"}
            rel="noreferrer"
          >
            <FaPlay className=" text-base" /> Play
          </a>
        </button>
        <button className="bg-gray-500 text-white px-6 py-2  text-lg font-semibold hover:bg-gray-600 transition-all duration-300 ease-in-out">
          Episodes
        </button>
      </div>
    </div>
  );
};

export default Text;
