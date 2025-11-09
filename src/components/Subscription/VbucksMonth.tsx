import React from "react";
import { motion } from "framer-motion";

const VbucksMonth: React.FC = () => {
  return (
    <div className="relative flex justify-between md:justify-evenly items-center w-full py-10 md:py-2">
        <motion.div 
        initial={{ x: -150, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ 
            type: "spring",
            stiffness: 70,
            damping: 12,
        }}
        className="relative basis-1/3"
        >
            <img 
            src="https://cdn2.unrealengine.com/vbucks-left-796x722-503453116.png" 
            alt="VbucksLeft" 
            className="w-full"
            draggable={false}
            />
        </motion.div>

        <motion.div 
        initial={{ y: 130, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ 
            type: "spring",
            stiffness: 70,
            damping: 11,
            delay: 0.3
        }}
        className="absolute md:relative z-20 flex flex-col gap-1 text-center items-center basis-1/3 font-burbank-black p-[2em] text-black uppercase"
        >
            <h2 className="text-[2em] md:text-[3.25em] leading-8 md:leading-13">
                1,000 Bonus V-Bucks Every Month
            </h2>

            <p className="text-[.9em] md:text-[1.1em] leading-tight">
                Each month you’ll receive 1,000 V-Bucks that you can put towards the hottest Outfits,
                Emotes and more. And with the included Battle Pass, you’ll be able to unlock even more V-Bucks!
            </p>
        </motion.div>

        <motion.div 
        initial={{ x: 150, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ 
            type: "spring",
            stiffness: 70,
            damping: 12,
        }}
        className="relative basis-1/3">
            <img 
            src="https://cdn2.unrealengine.com/vbucks-right-796x722-503453124.png" 
            alt="VbucksRight" 
            className="w-full"
            draggable={false}
            />
        </motion.div>
    </div>
  );
};

export default VbucksMonth;