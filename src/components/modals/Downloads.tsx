import React from "react";
import { motion } from "framer-motion";

// Assets
import Cuts from "@/assets/CutsThingy.png";

// Icons
import { SiPlaystation } from "react-icons/si";
import { FaApple } from "react-icons/fa";
import { PiDesktopTowerDuotone } from "react-icons/pi";
import { DiAndroid } from "react-icons/di";
import Close from "@/assets/Icons/Close.svg";

// Zustand
import { useModalsStore } from "@/zustand/ModalStore";

const Downloads: React.FC = () => {
  const { setDownloads } = useModalsStore();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        type: "tween",
        duration: 0.3,
      }}
      className="fixed inset-0 bg-[#106EA0F9] bg-center bg-cover bg-no-repeat flex justify-center items-center z-100"
      style={{ backgroundImage: `url(${Cuts})` }}
    >
      <motion.div
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        transition={{
          type: "spring",
          stiffness: 350,
          damping: 20,
        }}
        className="relative w-150 h-114 p-3 flex flex-col gap-4 justify-center items-center"
      >
        <button
          onClick={() => setDownloads(false)}
          className="absolute right-0 top-0 p-2 bg-[#1ac5d9] cursor-pointer"
        >
          <img
            src={Close}
            alt="Close"
            className="scale-110"
            draggable={false}
          />
        </button>

        <h1 className="font-burbank uppercase text-white text-5xl sm:text-7xl text-center">
          How would you like to play?
        </h1>
        <div className="flex flex-row-reverse gap-4">
          <a href="" target="_blank" rel="noopener noreferrer">
            <button className="flex flex-col justify-center items-center w-[8em] sm:w-[10em] h-[8em] sm:h-[10em] bg-[#ffff00] text-black cursor-pointer hover:opacity-85 transition">
              <SiPlaystation className="text-7xl" />
              <span className="uppercase text-sm font-bold tracking-wide mt-2">
                Playstation
              </span>
            </button>
          </a>

          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="flex flex-col justify-center items-center w-[8em] sm:w-[10em] h-[8em] sm:h-[10em] bg-[#ffff00] text-black cursor-pointer hover:opacity-85 transition">
              <FaApple className="text-7xl" />
              <span className="uppercase text-sm font-bold tracking-wide mt-2">
                IOS
              </span>
            </button>
          </a>

          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="flex flex-col justify-center items-center w-[8em] sm:w-[10em] h-[8em] sm:h-[10em] bg-[#ffff00] text-black cursor-pointer hover:opacity-85 transition">
              <PiDesktopTowerDuotone className="text-7xl scale-x-[-1]" />
              <span className="uppercase text-sm font-bold tracking-wide mt-2">
                Desktop
              </span>
            </button>
          </a>
        </div>
        <div className="flex flex-row-reverse gap-4">
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="flex flex-col justify-center items-center w-[8em] sm:w-[10em] h-[8em] sm:h-[10em] bg-[#ffff00] text-black cursor-pointer hover:opacity-85 transition">
              <DiAndroid className="text-7xl scale-x-[-1]" />
              <span className="uppercase text-sm font-bold tracking-wide mt-2">
                Android
              </span>
            </button>
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Downloads;
