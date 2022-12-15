import React from "react";
import { FaPlay } from "react-icons/fa";

const Buttons = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
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

export default Buttons;
