import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Icons
import { FaUserLarge } from "react-icons/fa6";
import { BsGlobe } from "react-icons/bs";

// Zustand
import { useModalsStore } from "@/zustand/ModalStore";

const MobileSidebar: React.FC = () => {
  const { setMobileSidebar, setDownloads } = useModalsStore();
  const navigate = useNavigate();
  
  useEffect(() => {
    document.body.classList.add("dontScroll");
    
    return () => {
        document.body.classList.remove("dontScroll");
    };
  }, []);
    
  return (
    <div 
    onClick={() => setMobileSidebar(false)}
    className="fixed inset-0 sm:hidden mt-[3.2rem] w-screen bg-black/40 min-h-[calc(100vh-51.2px)] z-50">
        <motion.div 
        initial={{ x: 600 }}
        animate={{ x: 0 }}
        exit={{ x: 600 }}
        transition={{
            type: "tween",
            duration: 0.25
        }}
        className="absolute right-0 top-0 w-[90%] h-full flex flex-col justify-between items-center bg-[#2a2a2a]"
        onClick={(e) => e.stopPropagation()}
        >
            <div className="flex flex-col w-full">
                <div 
                onClick={() => {
                    navigate("/");
                    setMobileSidebar(false);
                }}
                className="w-full flex px-6.5 py-2.5 cursor-pointer border-b border-[#333333] text-sm font-medium tracking-wider text-white/70 justify-start items-center uppercase">
                    Get Fortnite
                </div>
                
                <div 
                onClick={() => {
                    navigate("/battle-pass/cubed");
                    setMobileSidebar(false);
                }}
                className="w-full flex px-6.5 py-2.5 cursor-pointer border-b border-[#333333] text-sm font-medium tracking-wider text-white/70 justify-start items-center uppercase">
                    Battle Pass
                </div>

                <div 
                onClick={() => {
                    navigate("/news");
                    setMobileSidebar(false);
                }}
                className="w-full flex px-6.5 py-2.5 cursor-pointer border-b border-[#333333] text-sm font-medium tracking-wider text-white/70 justify-start items-center uppercase">
                    News
                </div>

                <div 
                onClick={() => {
                    navigate("/flux/competitive");
                    setMobileSidebar(false);
                }}
                className="w-full flex px-6.5 py-2.5 cursor-pointer border-b border-[#333333] text-sm font-medium tracking-wider text-white/70 justify-start items-center uppercase">
                    Competitive
                </div>
            </div>

            <div className="w-full">
            <div className="flex flex-row-reverse w-full text-[#ccc]">
                <button className="flex w-[35%] justify-center items-center hover:text-white/95 py-3 border-t border-[#434343] bg-[#2f2f2f] min-h-10 cursor-pointer">
                    <BsGlobe className="text-xl" />
                </button>
                <button 
                className="flex w-[65%] gap-2 justify-center items-center hover:text-white/95 py-3 bg-[#2f2f2f] border-t border-r border-[#434343] min-h-10 cursor-pointer">
                    <FaUserLarge className="text-xl" />
                    <span>Sign In</span>
                </button>
            </div>
            <button
            onClick={() => setDownloads(true)} 
            className="w-full bg-[#ffff00] hover:bg-[#ebeb01] py-3 transition font-medium text-sm uppercase cursor-pointer">
                Download
            </button>
            </div>
        </motion.div>
    </div>
  );
};

export default MobileSidebar;