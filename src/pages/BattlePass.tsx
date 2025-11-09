import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

// Components
import Skins from "@/components/BattlePass/Skins";
import Vbucks from "@/components/BattlePass/Vbucks";
import Crew from "@/components/BattlePass/Crew";

const BattlePass: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <Helmet>
      <title>Fortnite Battle Pass | Cubed Season</title>
      <meta name="title" content="Get the Chapter 2 Season 8 Fortnite Battle Pass for 950 V-Bucks!" />
      <meta name="description" content="The Fortnite Season 8 Battle Pass is available for 950 V-Bucks and you immediately unlock Charlotte. Earn levels to unlock dozens of in-game items and up to 1,500 V-Bucks! Play the Cubed Season!"/>
      <meta property="og:type" content="website"/>
      <meta property="og:url" content="https://www.epicgames.com/fortnite/battlepass"/>
      <meta property="og:title" content="Get the Chapter 2 Season 8 Fortnite Battle Pass for 950 V-Bucks!"/>
      <meta property="og:description" content="The Fortnite Season 8 Battle Pass is available for 950 V-Bucks and you immediately unlock Charlotte. Earn levels to unlock dozens of in-game items and up to 1,500 V-Bucks! Play the Cubed Season!"/>
      <meta property="og:image" content="https://cdn2.unrealengine.com/18br-lineup-social-social-1920x1080-dd5febe82f19.jpg"/>
      <meta property="og:site_name" content="Epic Games' Fortnite" />
    </Helmet>

    <div className="mt-[3.2rem] w-screen flex flex-col justify-start items-center min-h-[calc(100vh-51.2px)]">
        <div className="relative w-full aspect-[9/9] md:aspect-[9/9] lg:aspect-[12/9] xl:aspect-[17/9] flex justify-center items-center overflow-hidden">
            <div className="absolute inset-0 z-1 bg-[#00000066]" 
            style={{ 
            /* ts long asf */    backgroundImage: "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAADCAYAAABWKLW/AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1zbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1zbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1zbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1zbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjkxNjgyMDA2NjJBNzExRTBCNjU1QzhBRDY1RUJCOUU4IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjkxNjgyMDA3NjJBNzExRTBCNjU1QzhBRDY1RUJCOUU4Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTE2ODIwMDQ2MkE3MTFFMEI2NTVDOEFENjVFQkI5RTgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OTE2ODIwMDU2MkE3MTFFMEI2NTVDOEFENjVFQkI5RTgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7UWbiJAAAAHUlEQVR42mJiYGD4DwQggoEJSDAyQAETAxIACDAAJMMJ/r07h+kAAAAASUVORK5CYII=')"
            }} 
            />
            <video loop autoPlay muted playsInline className="absolute inset-0 w-full h-full object-cover">
                <source src="https://cdn2.unrealengine.com/211071-fnbr-c2s8-battlepass-websiteheader-2ee8251897e1.mp4" />
            </video>

            <motion.img
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
              type: "spring", 
              stiffness: 80,
              damping: 10,
              delay: 0.1
            }}
            src="https://cdn2.unrealengine.com/en-200x200-baba6e29669b.png"
            className="absolute h-9 xl:h-[3em] top-[1.2em] left-[1.2em] md:top-[2.5em] md:left-[3.5em] z-10" 
            alt="C2S8"
            draggable={false} 
            />

            <motion.div 
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
              type: "spring", 
              stiffness: 80,
              damping: 10,
              delay: 0.1
            }}
            className="relative z-20 flex flex-col text-center mb-45 sm:mb-38 text-white font-burbank-black uppercase leading-15 sm:leading-20 md:leading-25">
              <h3 className="text-[1.3em] sm:text-[1.7em] md:text-[1.8em] xl:text-[2em] tracking-[10px] italic">
                Season 8 - Cubed
              </h3>

              <h1 className="text-[4.1em] sm:text-[7em] md:text-[8em] lg:text-[9em] xl:text-[10em] [text-shadow:0_0_40px_rgba(0,0,0,.8),0_5px_8px_rgba(0,0,0,.3)]">
                Battle Pass
              </h1>

              <p className="leading-6 text-[1em] sm:text-[1.15em] md:text-[1.25em] lg:text-[1.35em] xl:text-[1.5em] sm:leading-15 italic [text-shadow:0_0_40px_rgba(0,0,0,.8),0_5px_8px_rgba(0,0,0,.3)] [word-spacing:3px]">
                Fight Monsters. Power Up Sideways <br className="visible sm:hidden" /> Weapons. Defend the Island.
              </p>

            </motion.div>
        </div>

        <Skins />

        <Vbucks />

        <Crew />

        <div 
        className="relative w-full h-[100vh] bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center font-burbank-black uppercase
        bg-[url('https://cdn2.unrealengine.com/fortnite-chapter-2-season-8-seasonal-details-bg-mobile-750x976-af9ab40a9b31.jpg')]
        md:bg-[url('https://cdn2.unrealengine.com/fortnite-chapter-2-season-8-seasonal-details-bg-2881x1625-fe82d635e0c8.jpg')]"
        >
          <motion.h3 
          initial={{ y: 70, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ 
            type: "spring",
            stiffness: 70,
            damping: 9,
            delay: 0.05
          }}
          className="text-[#333] tracking-[10px] text-[2em]">
            Season 8
          </motion.h3>

          <motion.img 
          initial={{ y: 80, scale: 1.1, opacity: 0 }}
          whileInView={{ y: 0, scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ 
            type: "spring",
            stiffness: 70,
            damping: 9,
            delay: 0.25
          }}
          src="https://cdn2.unrealengine.com/cubed-logo-en-763x198-d5dba1d1f717.png" 
          alt="Cubed" 
          className="w-[38%]"
          draggable={false}
          />

          <motion.p 
          initial={{ y: 70, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ 
            type: "spring",
            stiffness: 70,
            damping: 9,
            delay: 0.4
          }}
          className="text-white text-center max-w-[80%] md:max-w-[75%] lg:max-w-[50%] italic mt-10 leading-8 text-[1.15em] sm:text-[1.25em]">
            the Cube has returned, but now there’s… MORE OF THEM. From the smoldering wreckage of 
            the Mothership a new threat arises. Cubes are waking up, spreading corruption, and
             creating Rifts to “The Sideways”. Enter The Sideways to take on monsters and find 
             Sideways Weapons. Join the community effort to build defensive measures against the 
             Cubes. It’s up to you - all of you - to fight for the Island’s survival.
          </motion.p>

          <button 
          onClick={() => navigate("/")}
          className="bg-[#ffda0b] text-black font-burbank-black uppercase pt-3 pb-1.5 px-5 text-[1.5em] mt-6 [clip-path:polygon(0%_16%,100%_6%,98%_100%,2%_90%)] cursor-pointer">
            Play free now!
          </button>
        </div>
    </div>
    </>
  );
};

export default BattlePass;
