import React from "react";
import { SiNetflix } from "react-icons/si";
import { FiMenu } from "react-icons/fi";
import Episodes from "./Episodes";

import { FaSearch } from "react-icons/fa";
import { HiArrowNarrowRight } from "react-icons/hi";

import { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
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
    </div>
  );
};

export default Nav;
