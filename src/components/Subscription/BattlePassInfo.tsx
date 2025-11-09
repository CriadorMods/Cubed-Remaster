import React from "react";
import { motion } from "framer-motion";

const BattlePassInfo: React.FC = () => {
  return (
    <div className="relative w-full py-4 mask-b-from-84%">
        <div 
        className="w-[200%] h-25 bg-center bg-cover bg-repeat-x moveright"
        style={{ backgroundImage: "url('https://cdn2.unrealengine.com/bpitems-4103x129-514255876.png')" }}
        />

        <div 
        className="w-[200%] ml-[-100%] h-25 bg-center bg-cover bg-repeat-x moveleft"
        style={{ backgroundImage: "url('https://cdn2.unrealengine.com/bpitems-4103x129-514255876.png')" }}
        />

        <div 
        className="w-[200%] h-25 bg-center bg-cover bg-repeat-x moveright"
        style={{ backgroundImage: "url('https://cdn2.unrealengine.com/bpitems-4103x129-514255876.png')" }}
        />

        <div 
        className="w-[200%] ml-[-100%] h-25 bg-center bg-cover bg-repeat-x moveleft"
        style={{ backgroundImage: "url('https://cdn2.unrealengine.com/bpitems-4103x129-514255876.png')" }}
        />

        <div 
        className="w-[200%] h-25 bg-center bg-cover bg-repeat-x moveright"
        style={{ backgroundImage: "url('https://cdn2.unrealengine.com/bpitems-4103x129-514255876.png')" }}
        />

        <div 
        className="w-[200%] ml-[-100%] h-25 bg-center bg-cover bg-repeat-x moveleft"
        style={{ backgroundImage: "url('https://cdn2.unrealengine.com/bpitems-4103x129-514255876.png')" }}
        />

        <div 
        className="w-[200%] h-25 bg-center bg-cover bg-repeat-x moveright"
        style={{ backgroundImage: "url('https://cdn2.unrealengine.com/bpitems-4103x129-514255876.png')" }}
        />

        <div 
        className="w-[200%] ml-[-100%] h-25 bg-center bg-cover bg-repeat-x moveleft"
        style={{ backgroundImage: "url('https://cdn2.unrealengine.com/bpitems-4103x129-514255876.png')" }}
        />

        <div 
        className="w-[200%] h-25 bg-center bg-cover bg-repeat-x moveright"
        style={{ backgroundImage: "url('https://cdn2.unrealengine.com/bpitems-4103x129-514255876.png')" }}
        />

        <motion.div 
        initial={{ x: 160, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ 
          type: "spring",
          stiffness: 70,
          damping: 11,
        }}
        className="absolute text-center xl:text-left z-20 right-1/2 xl:right-0 top-1/2 -translate-y-1/2 p-0 xl:p-[7em] w-4/5 xl:w-2/5 text-black font-burbank-black uppercase translate-x-1/2 xl:translate-x-0"
        >
          <h2 className="text-[2.8em] md:text-[3.5em] leading-10.5 md:leading-12.5">
            Battle Pass Included for the Full Season
          </h2>

          <p className="text-[.9em]">
            Member of the Fortnite Crew? Congrats, you have full access to the current seasons’ Battle Pass,
            and you’ll continue to receive future Battle Passes with your subscription. 
            Unlock 100 awesome Battle Pass rewards just by playing Fortnite.
          </p>
        </motion.div>

        <motion.img 
        initial={{ x: -80, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ 
          type: "spring",
          stiffness: 70,
          damping: 11,
        }}
        src="https://cdn2.unrealengine.com/battlepass-1920x1171-512732341.png" 
        alt="BP"
        className="absolute w-[90%] top-0"
        draggable={false}
        />
    </div>
  );
};

export default BattlePassInfo;