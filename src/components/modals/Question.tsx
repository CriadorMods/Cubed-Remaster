import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Assets
import Cuts from "@/assets/CutsThingy.png";

// Icons
import Close from "@/assets/Icons/Close.svg";

// Zustand
import { useModalsStore } from "@/zustand/ModalStore";

const Question: React.FC = () => {
  const { setQuestion } = useModalsStore();
  const navigate = useNavigate();
    
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{
        type: "tween",
        duration: 0.3
    }}
    className="fixed inset-0 bg-[#106EA0F9] bg-center bg-cover bg-no-repeat flex justify-center items-center z-100" style={{ backgroundImage: `url(${Cuts})` }}>
        <motion.div 
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        transition={{
            type: "spring",
            stiffness: 350,
            damping: 20,
        }}
        className="relative w-150 h-114 p-3 flex flex-col gap-1.25 justify-center items-center"
        >
            <button 
            onClick={() => setQuestion(false)}
            className="absolute right-0 top-0 p-2 bg-[#1ac5d9] cursor-pointer"
            >
                <img src={Close} alt="Close" className="scale-110" draggable={false} />
            </button>

            <h1 className="font-burbank uppercase text-white text-7xl text-center">Do you already play Fortnite?</h1>
            <p className="text-center text-white">If so, then we can find your progress and <br /> purchases.</p>
            <div className="flex flex-row gap-4 mt-8">
                <button 
                onClick={() => { setQuestion(false); navigate("/sign-in"); }}
                className="flex flex-col justify-center items-center w-[8em] h-[4em] bg-[#ffff00] text-black cursor-pointer hover:brightness-85 transition">
                    <span className="uppercase text-3xl font-burbank font-bold tracking-wide mt-2">Yes</span>
                </button>
                
                <button 
                onClick={() => { setQuestion(false); navigate("/register"); }}
                className="flex flex-col justify-center items-center w-[8em] h-[4em] bg-[#ffff00] text-black cursor-pointer hover:brightness-85 transition">
                    <span className="uppercase text-3xl font-burbank font-bold tracking-wide mt-2">No</span>
                </button>
            </div>
        </motion.div>
    </motion.div>
  );
};

export default Question;