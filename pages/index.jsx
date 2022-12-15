import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

// import Navbar from "../components/Navbar";
// import Text from "../components/Text";
import Episodes from "../components/Episodes";

import { SiNetflix } from "react-icons/si";
import { FiMenu } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
import { HiArrowNarrowRight } from "react-icons/hi";
import { FaPlay } from "react-icons/fa";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" overflow-hidden w-full h-screen">
      <Head>
        <title>Netflix - Wednesday</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Generated by create next app" />
      </Head>

      {/* site begining */}
      <div>
        {/* bottom black gradient */}
        <div className="w-full h-screen lg:bg-bg-image bg-bg-image-mobile bg-cover relative">
          <div className="absolute bottom-0 w-full  bg-gradient-to-t from-[#111] h-[800px] sm:h-[650px] md:h-96"></div>
        </div>
        {/* end of bottom black gradient */}

        {/*  */}
        {/* REAL SITE */}
        <div className="w-full h-screen px-8 sm:px-12 lg:px-16 z-10 top-0 left-0 absolute overflow-hidden">
          {/* navbar */}
          <div className="flex items-center justify-between py-8 text-4xl">
            <SiNetflix className=" text-red-600" />
            <FiMenu
              className="cursor-pointer text-white hover:text-red-600 transition-all duration-300 ease-in-out"
              onClick={() => setIsOpen(true)}
            />

            {/* sidebar */}
            <div
              className={
                isOpen
                  ? "absolute right-0 top-0 lg:w-[600px] w-full bg-[rgba(83,61,119,0.5)] h-screen flex flex-col justify-start pt-36 pb-12 items-center gap-2 backdrop-blur-xl overflow-y-scroll transition-all duration-500 linear animate-slide-in"
                  : " hidden "
              }
            >
              <HiArrowNarrowRight
                className="absolute top-8 left-16 text-white cursor-pointer hover:text-red-600 transition-all duration-300 ease-in-out "
                onClick={() => setIsOpen(false)}
              />
              <div className=" w-[80%] bg-white rounded-md sm:text-xl text-base pl-6 text-gray-800  focus:outline-none flex items-center justify-between mb-20">
                <input
                  type="text"
                  className="focus:outline-none outline-none w-[80%] h-14"
                  placeholder="Looking for something? "
                />
                <FaSearch className="text-red-600 pr-4 text-4xl cursor-pointer sm:block hidden" />
              </div>
              <Episodes />
            </div>
            {/* end of sidebar */}
          </div>
          {/* end of navbar */}

          {/* text section */}
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
              Wednesday is an American supernatural mystery comedy horror
              television series based upon the character Wednesday Addams from
              The Addams Family.
            </p>

            {/* button component */}
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
              <button
                className="bg-gray-500 text-white px-6 py-2  text-lg font-semibold hover:bg-gray-600 transition-all duration-300 ease-in-out"
                onClick={() => setIsOpen(true)}
              >
                Episodes
              </button>
            </div>
            {/* end of button component */}
          </div>
          {/* end of text section */}
        </div>
        {/* end of REAL SITE */}
      </div>
      {/* end of whole site */}
    </div>
  );
}
