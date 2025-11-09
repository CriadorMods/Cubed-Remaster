import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Competitive: React.FC = () => {
  const navigate = useNavigate()

  return (
    <>
    <Helmet>
        <title>Fortnite Competitive</title>
    </Helmet>

    <div className="mt-[3.2rem] w-screen flex flex-col justify-start items-center min-h-[calc(100vh-51.2px)] bg-[#F1F4F6]">
      <div className="relative w-full h-[65vh] bg-center bg-cover bg-no-repeat bg-[url('https://cdn2.unrealengine.com/Fortnite+Esports%2FChapter-2-Season-2%2FMobile_Default-1920x766-5168a52437321b9bd12b0565610fc7de12269361.jpg')] sm:bg-[url('https://cdn2.unrealengine.com/Fortnite+Esports%2FChapter-2-Season-2%2FCarousel_Default-1920x766-ba580574cf0a2842ea3af9544677113584b94636.jpg')]" >
        <div className="absolute max-w-screen md:max-w-[35vw] text-center md:text-left top-1/2 translate-y-[-50%] translate-x-[-50%] md:translate-x-0 left-1/2 md:left-50 font-burbank-black text-white uppercase flex flex-col leading-10 lg:leading-18">
            <motion.h1 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
                type: "spring",
                stiffness: 70,
                damping: 10,
                delay: 0.1
            }}
            className="text-[2.5em] lg:text-[6em] italic">
               Competitive 
            </motion.h1>

            <motion.p 
            initial={{ y: 160, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
                type: "spring",
                stiffness: 70,
                damping: 11,
                delay: 0.3
            }}
            className="text-[2em] lg:text-[3em] text-[#FF342D] italic leading-8 lg:leading-13">
                Get Hype! Win prizes!
            </motion.p>

            <motion.button 
            initial={{  opacity: 0 }}
            animate={{  opacity: 1 }}
            whileHover={{ opacity: 0.7 }}
            transition={{
                type: "tween",
                duration: 0.8,
            }}
            onClick={() => navigate("/flux/competitive/hype/leaderboard")}
            className="bg-[#ff0] w-fit h-fit text-nowrap text-black transition-all text-[1.75em] mt-8 px-[2em] py-0 cursor-pointer uppercase leading-14 z-10">
                Hype leaderboard
            </motion.button>
        </div>
      </div>

      <div className="relative w-full h-auto bg-white grid grid-cols-2 gap-y-2 md:flex md:justify-evenly text-[#1b1b1b] py-2 font-burbank-black">
            <button className="relative uppercase text-[1.2em] md:text-[1.5em] lg:text-[2.1em] italic cursor-pointer group">
                Calendar
                <div className="absolute w-full h-1">
                    <div className="absolute group-hover:w-full bottom-0 md:bottom-1.5 w-0 h-full bg-[#9A41FF] transition-all duration-200 ease-in-out" />
                </div>
            </button>

            <button className="relative uppercase text-[1.2em] md:text-[1.5em] lg:text-[2.1em] italic cursor-pointer group">
                News
                <div className="absolute w-full h-1">
                    <div className="absolute group-hover:w-full bottom-0 md:bottom-1.5 w-0 h-full bg-[#9A41FF] transition-all duration-200 ease-in-out" />
                </div>
            </button>

            <button className="relative uppercase text-[1.2em] md:text-[1.5em] lg:text-[2.1em] italic cursor-pointer group">
                Ways to Play
                <div className="absolute w-full h-1">
                    <div className="absolute group-hover:w-full bottom-0 md:bottom-1.5 w-0 h-full bg-[#9A41FF] transition-all duration-200 ease-in-out" />
                </div>
            </button>

            <button className="relative uppercase text-[1.2em] md:text-[1.5em] lg:text-[2.1em] italic cursor-pointer group">
                Rules & Guidelines
                <div className="absolute w-full h-1">
                    <div className="absolute group-hover:w-full bottom-0 md:bottom-1.5 w-0 h-full bg-[#9A41FF] transition-all duration-200 ease-in-out" />
                </div>
            </button>
        </div>

    </div>
    </>
  );
};

export default Competitive;