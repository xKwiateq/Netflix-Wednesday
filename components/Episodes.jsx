import React from "react";
import Image from "next/image";

import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { IoIosStarHalf } from "react-icons/io";

const Episodes = () => {
  return (
    <div className="flex flex-col items-start justify-center w-[80%] gap-5">
      <h3 className="text-white text-xl mb-4">New Episodes - Season 1</h3>
      {/* first episode card */}
      <div className="flex px-6 justify-start items-center w-full h-32 rounded-md bg-[rgba(0,0,0,0.3)] hover:bg-[rgba(0,0,0,0.4)] cursor-pointer gap-5">
        <div className=" w-[150px] h-[84.38px] overflow-hidden rounded-md example">
          <Image
            src="/episodes/odc1.jpg"
            width={150}
            height={0}
            alt="cover episode 1"
            className=" hover:scale-110 transition-all duration-300 ease-in-out"
          />
        </div>

        <div className="flex flex-col items-start justify-center  text-white">
          <h5 className=" text-base">Episode 1</h5>
          <h4 className=" text-xl hidden sm:block">Unhappy child</h4>
          <h5 className=" text-base flex items-center mt-1">
            <AiFillStar className="text-red-600" />
            <AiFillStar className="text-red-600" />
            <AiFillStar className="text-red-600" />
            <IoIosStarHalf className="text-red-600" />
            <AiOutlineStar className="text-red-600" />
          </h5>
        </div>
      </div>
      {/* end of episode card */}

      {/* second episode card */}
      <div className="flex px-6 justify-start items-center w-full h-32 rounded-md bg-[rgba(0,0,0,0.3)] hover:bg-[rgba(0,0,0,0.4)] cursor-pointer gap-5">
        <div className=" w-[150px] h-[84.38px] overflow-hidden rounded-md">
          <Image
            src="/episodes/odc2.jpg"
            width={150}
            height={0}
            alt="cover episode 2"
            className=" hover:scale-110 transition-all duration-300 ease-in-out"
          />
        </div>

        <div className="flex flex-col items-start justify-center  text-white">
          <h5 className=" text-base">Episode 2</h5>
          <h4 className=" text-xl hidden sm:block">Lowner</h4>
          <h5 className=" text-base flex items-center mt-1">
            <AiFillStar className="text-red-600" />
            <AiFillStar className="text-red-600" />
            <AiFillStar className="text-red-600" />
            <AiFillStar className="text-red-600" />
            <AiOutlineStar className="text-red-600" />
          </h5>
        </div>
      </div>
      {/* end of episode card */}

      {/* third episode card */}
      <div className="flex px-6 justify-start items-center w-full h-32 rounded-md bg-[rgba(0,0,0,0.3)] hover:bg-[rgba(0,0,0,0.4)] cursor-pointer gap-5">
        <div className=" w-[150px] h-[84.38px] overflow-hidden rounded-md">
          <Image
            src="/episodes/odc3.png"
            width={150}
            height={0}
            alt="cover episode 3"
            className=" hover:scale-110 transition-all duration-300 ease-in-out"
          />
        </div>

        <div className="flex flex-col items-start justify-center  text-white">
          <h5 className=" text-base">Episode 3</h5>
          <h4 className=" text-xl hidden sm:block">Friend or enemy?</h4>
          <h5 className=" text-base flex items-center mt-1">
            <AiFillStar className="text-red-600" />
            <AiFillStar className="text-red-600" />
            <AiFillStar className="text-red-600" />
            <AiFillStar className="text-red-600" />
            <AiFillStar className="text-red-600" />
          </h5>
        </div>
      </div>
      {/* end of episode card */}

      {/* 4th episode card */}
      <div className="flex px-6 justify-start items-center w-full h-32 rounded-md bg-[rgba(0,0,0,0.3)] hover:bg-[rgba(0,0,0,0.4)] cursor-pointer gap-5">
        <div className=" w-[150px] h-[84.38px] overflow-hidden rounded-md">
          <Image
            src="/episodes/odc4.jpg"
            width={150}
            height={0}
            alt="cover episode 4"
            className=" hover:scale-110 transition-all duration-300 ease-in-out"
          />
        </div>

        <div className="flex flex-col items-start justify-center  text-white">
          <h5 className=" text-base">Episode 4</h5>
          <h4 className=" text-xl hidden sm:block">Unforgetable evening</h4>
          <h5 className=" text-base flex items-center mt-1">
            <AiFillStar className="text-red-600" />
            <AiFillStar className="text-red-600" />
            <AiFillStar className="text-red-600" />
            <AiOutlineStar className="text-red-600" />
            <AiOutlineStar className="text-red-600" />
          </h5>
        </div>
      </div>
      {/* end of episode card */}

      {/* 5th episode card */}
      <div className="flex px-6 justify-start items-center w-full h-32 rounded-md bg-[rgba(0,0,0,0.3)] hover:bg-[rgba(0,0,0,0.4)] cursor-pointer gap-5">
        <div className=" w-[150px] h-[84.38px] overflow-hidden rounded-md">
          <Image
            src="/episodes/odc5.jpg"
            width={150}
            height={0}
            alt="cover episode 5"
            className=" hover:scale-110 transition-all duration-300 ease-in-out"
          />
        </div>

        <div className="flex flex-col items-start justify-center  text-white">
          <h5 className=" text-base">Episode 5</h5>
          <h4 className=" text-xl hidden sm:block">Reap the storm</h4>
          <h5 className=" text-base flex items-center mt-1">
            <AiFillStar className="text-red-600" />
            <AiFillStar className="text-red-600" />
            <AiFillStar className="text-red-600" />
            <IoIosStarHalf className="text-red-600" />
            <AiOutlineStar className="text-red-600" />
          </h5>
        </div>
      </div>
      {/* end of episode card */}

      {/* 6th episode card */}
      <div className="flex px-6 justify-start items-center w-full h-32 rounded-md bg-[rgba(0,0,0,0.3)] hover:bg-[rgba(0,0,0,0.4)] cursor-pointer gap-5">
        <div className=" w-[150px] h-[84.38px] overflow-hidden rounded-md">
          <Image
            src="/episodes/odc6.jpg"
            width={150}
            height={0}
            alt="cover episode 6"
            className=" hover:scale-110 transition-all duration-300 ease-in-out"
          />
        </div>

        <div className="flex flex-col items-start justify-center  text-white">
          <h5 className=" text-base">Episode 6</h5>
          <h4 className=" text-xl hidden sm:block">Thing for thing</h4>
          <h5 className=" text-base flex items-center mt-1">
            <AiFillStar className="text-red-600" />
            <AiFillStar className="text-red-600" />
            <AiFillStar className="text-red-600" />
            <AiFillStar className="text-red-600" />
            <IoIosStarHalf className="text-red-600" />
          </h5>
        </div>
      </div>
      {/* end of episode card */}

      {/* 7th episode card */}
      <div className="flex px-6 justify-start items-center w-full h-32 rounded-md bg-[rgba(0,0,0,0.3)] hover:bg-[rgba(0,0,0,0.4)] cursor-pointer gap-5">
        <div className=" w-[150px] h-[84.38px] overflow-hidden rounded-md">
          <Image
            src="/episodes/odc7.jpg"
            width={150}
            height={0}
            alt="cover episode 7"
            className=" hover:scale-110 transition-all duration-300 ease-in-out"
          />
        </div>

        <div className="flex flex-col items-start justify-center  text-white">
          <h5 className=" text-base">Episode 7</h5>
          <h4 className=" text-xl hidden sm:block">Who you really are?</h4>
          <h5 className=" text-base flex items-center mt-1">
            <AiFillStar className="text-red-600" />
            <AiFillStar className="text-red-600" />
            <AiFillStar className="text-red-600" />
            <AiFillStar className="text-red-600" />
            <AiOutlineStar className="text-red-600" />
          </h5>
        </div>
      </div>
      {/* end of episode card */}

      {/* 8th episode card */}
      <div className="flex px-6 justify-start items-center w-full h-32 rounded-md bg-[rgba(0,0,0,0.3)] hover:bg-[rgba(0,0,0,0.4)] cursor-pointer gap-5">
        <div className=" w-[150px] h-[84.38px] overflow-hidden rounded-md">
          <Image
            src="/episodes/odc8.jpg"
            width={150}
            height={0}
            alt="cover episode 8"
            className=" hover:scale-110 transition-all duration-300 ease-in-out"
          />
        </div>

        <div className="flex flex-col items-start justify-center  text-white">
          <h5 className=" text-base">Episode 8</h5>
          <h4 className=" text-xl hidden sm:block">Deadly confrontation</h4>
          <h5 className=" text-base flex items-center mt-1">
            <AiFillStar className="text-red-600" />
            <AiFillStar className="text-red-600" />
            <AiFillStar className="text-red-600" />
            <AiFillStar className="text-red-600" />
            <AiFillStar className="text-red-600" />
          </h5>
        </div>
      </div>
      {/* end of episode card */}
    </div>
  );
};

export default Episodes;
