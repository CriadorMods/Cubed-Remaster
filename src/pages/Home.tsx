import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

// Components
import SeasonStuff from "@/components/Home/SeasonStuff";

const Home: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (

    <>
    <Helmet>
      <title>Fortnite Chapter 2 Season 8 Cubed</title>
    </Helmet>
    
    <div className="mt-[3.2rem] w-screen flex flex-col justify-start items-center min-h-[calc(100vh-51.2px)]">
      <div className="relative w-full h-[55vh] md:h-[69vh] xl:h-[93vh] bg-center bg-cover bg-no-repeat flex flex-col justify-end items-center" 
      style={{
        backgroundImage: `url(https://cdn2.unrealengine.com/fortnite-chapter-2-season-8-overview-page-key-art-desktop-3008x1692-cb54bedd0689.jpg)`
      }}
      >
        <img
        src="https://cdn2.unrealengine.com/en-200x200-baba6e29669b.png" 
        alt="C2S8"
        className="absolute h-10 xl:h-[3.8em] top-[2em] xl:top-[2.8em] left-[3em] xl:left-[5.8em]"
        draggable={false}
        />

        <div className="flex flex-col mb-24 gap-1.25 items-center drop-shadow-[0_0_44px_rgba(255,3,238,0.8)]">
          <motion.img 
          initial={{ y: 45, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
              type: "spring",
              stiffness: 50,
              damping: 10,
              delay: 0.3
          }}
          src="https://cdn2.unrealengine.com/fortnite-logo-white-300x96-2755c6dc9d19.png" 
          className="h-[2.7rem] w-auto"
          alt="Fortnite" 
          draggable={false}
          />

          <motion.h3 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
              type: "spring",
              stiffness: 60,
              damping: 10,
              delay: 0.45
          }}
          className="text-white text-[1.45em] md:text-[1.65em] uppercase tracking-[6px] font-burbank-black italic">
            Season 8
          </motion.h3>

          <motion.img 
          initial={{ y: 160, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
              type: "spring",
              stiffness: 50,
              damping: 10,
          }}
          src="https://cdn2.unrealengine.com/cubed-logo-en-763x198-d5dba1d1f717.png" 
          className="w-[65%] h-auto max-w-200"
          alt="Cubed"
          draggable={false}
          />
        </div>
      </div>

      <SeasonStuff />

      <div className="relative w-full h-[120vh] flex flex-col justify-end items-center bg-cover bg-center bg-no-repeat bg-[url('https://cdn2.unrealengine.com/fortnite-chapter-2-season-8-home-page-battle-pass-promo-footer-bg-mobile-1500x2099-9970aa99d810.png')] md:bg-[url('https://cdn2.unrealengine.com/fortnite-chapter-2-season-8-home-page-battle-pass-promo-footer-bg-desktop-2880x1777-16aa73600f8e.png')]">
        <div className="flex flex-col mb-40 items-center">
          <img 
          src="https://cdn2.unrealengine.com/fortnite-logo-white-300x96-2755c6dc9d19.png" 
          className="h-[4rem] w-auto mb-5"
          alt="Fortnite" 
          draggable={false}
          />

          <img 
          src="https://cdn2.unrealengine.com/cubed-logo-en-763x198-d5dba1d1f717.png" 
          className="w-[65%] h-auto max-w-200"
          alt="Cubed"
          draggable={false}
          />

          <motion.h3 
          initial={{ y: 120, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            type: "tween",
            duration: 0.5,
          }}
          className="text-black italic text-4xl sm:text-5xl font-burbank-black uppercase pt-6">
            Battle Pass
          </motion.h3>

          <button 
          onClick={() => navigate("/battle-pass/cubed")}
          className="bg-[#ffda0b] text-black font-burbank-black uppercase pt-2.5 pb-1.25 px-3 text-[1.5em] mt-4 [clip-path:polygon(0%_16%,100%_6%,98%_100%,2%_90%)] cursor-pointer">
            Play free now!
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;