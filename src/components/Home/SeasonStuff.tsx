import React from "react";
import { motion } from "framer-motion";

const SeasonStuff: React.FC = () => {

  return (
    <div className="flex flex-col w-[80%] lg:w-[65%] -translate-y-13">
        <div className="flex flex-col text-center">
            <img 
            src="https://cdn2.unrealengine.com/fortnite-chapter-2-season-8-a-new-war-takes-shape-1801x909-3b6cc3a2fa44.jpg" 
            className="w-full"
            alt="Fortnite Chapter 2 Season 8 A New War Takes Shape" 
            draggable={false}
            />

            <div className="py-4 md:py-10 flex flex-col text-center">
                <motion.h1 
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                    type: "tween",
                    duration: 0.5,
                }}
                className="uppercase text-[1.7em] sm:text-[3em] lg:text-[3.8em] text-[#781BB2] font-burbank-black leading-12 md:leading-20">
                    A New War Takes Shape
                </motion.h1>
                
                <motion.p 
                initial={{ y: 120, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                    type: "tween",
                    duration: 0.5,
                    delay: 0.1
                }}
                className="w-full md:w-[70%] uppercase m-auto text-[2.7vw] md:text-[1.2vw] leading-tight md:leading-normal text-black font-burbank-black">
                    After the Alien Mothership’s destruction, the Cubes that powered it crash-
                    landed on the Island. They’ve begun spreading corruption, as well as
                    portals to the dark, monster-filled “Sideways.” Fight for the survival of the
                    Island… before it’s too late.
                </motion.p>
            </div>
        </div>

        <div className="flex flex-col text-center mt-5 md:mt-8">
            <img 
            src="https://cdn2.unrealengine.com/fortnite-chapter-2-season-8-cross-into-the-sideways-1801x909-d108ec517883.jpg" 
            className="w-full"
            alt="Fortnite Chapter 2 Season 8 A New War Takes Shape"
            draggable={false} 
            />

            <div className="py-4 md:py-10 flex flex-col text-center">
                <motion.h1 
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                    type: "tween",
                    duration: 0.5,
                }}
                className="uppercase text-[1.7em] sm:text-[3em] lg:text-[3.8em] text-[#781BB2] font-burbank-black leading-12 md:leading-20">
                    Cross into The Sideways
                </motion.h1>
                
                <motion.p 
                initial={{ y: 120, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                    type: "tween",
                    duration: 0.5,
                    delay: 0.1
                }}
                className="w-full md:w-[70%] uppercase m-auto text-[2.7vw] md:text-[1.2vw] leading-tight md:leading-normal text-black font-burbank-black">
                    You’ll encounter a new location ensnared by The Sideways each match, or
                    come across Sideways Anomalies, gateways that will pull you in if you get
                    too close. Once pulled in, defeat waves of Cube Monsters for Sideways
                    Weapons and special crafting ingredients. The rules are different in this
                    mysterious world: gravity is low and building is non-existent.
                </motion.p>
            </div>
        </div>

        <div className="flex flex-col text-center mt-5 md:mt-8">
            <img 
            src="https://cdn2.unrealengine.com/fortnite-chapter-2-season-8-power-up-your-weapons-1801x909-fb0ffa0ae902.jpg" 
            className="w-full"
            alt="Fortnite Chapter 2 Season 8 A New War Takes Shape" 
            draggable={false}
            />

            <div className="py-4 md:py-10 flex flex-col text-center">
                <motion.h1 
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                    type: "tween",
                    duration: 0.5,
                }}
                className="uppercase text-[1.7em] sm:text-[3em] lg:text-[3.8em] text-[#781BB2] font-burbank-black leading-12 md:leading-20">
                    Power Up Your Weapons
                </motion.h1>
                
                <motion.p 
                initial={{ y: 120, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                    type: "tween",
                    duration: 0.5,
                    delay: 0.1
                }}
                className="w-full md:w-[70%] uppercase m-auto text-[2.7vw] md:text-[1.2vw] leading-tight md:leading-normal text-black font-burbank-black">
                    While defeating the Cube Monsters, open up Sideways Chests to acquire weapons from that world, like the Sideways Rifle and Sideways Minigun.
                    You’ll deal bonus damage by revving them to their superpowered state!
                    Use Cube Monster Parts from defeated monsters to upgrade them, 
                    then take them with you towards a Victory Royale.
                </motion.p>
            </div>
        </div>

        <div className="flex flex-col text-center mt-5 md:mt-8">
            <img 
            src="https://cdn2.unrealengine.com/fortnite-chapter-2-season-8-direct-the-war-effort-1801x909-bfab3cb01fd3.jpg" 
            className="w-full"
            alt="Fortnite Chapter 2 Season 8 A New War Takes Shape" 
            draggable={false}
            />

            <div className="py-4 md:py-10 flex flex-col text-center">
                <motion.h1 
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                    type: "tween",
                    duration: 0.5,
                }}
                className="uppercase text-[1.7em] sm:text-[3em] lg:text-[3.8em] text-[#781BB2] font-burbank-black leading-12 md:leading-20">
                    Direct the War Effort
                </motion.h1>
                
                <motion.p 
                initial={{ y: 120, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                    type: "tween",
                    duration: 0.5,
                    delay: 0.1
                }}
                className="w-full md:w-[70%] uppercase m-auto text-[2.7vw] md:text-[1.2vw] leading-tight md:leading-normal text-black font-burbank-black">
                    To fight back against the Cubes, the Island’s survivors need your help. 
                    Work together with the entire Fortnite community to build Turret Stations, 
                    to decide which new weapons to bring to the Island, 
                    which favorites to unvault, and more throughout the Season.
                </motion.p>
            </div>
        </div>

        <div className="flex flex-col text-center mt-5 md:mt-8">
            <img 
            src="https://cdn2.unrealengine.com/fortnite-chapter-2-season-8-paint-your-own-toona-fish-1801x909-50a3473c303f.jpg" 
            className="w-full"
            alt="Fortnite Chapter 2 Season 8 A New War Takes Shape" 
            draggable={false}
            />

            <div className="py-4 md:py-10 flex flex-col text-center">
                <motion.h1 
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                    type: "tween",
                    duration: 0.5,
                }}
                className="uppercase text-[1.4em] sm:text-[3em] lg:text-[3.8em] text-[#781BB2] font-burbank-black leading-12 md:leading-20">
                    Paint Your Very Own Toona Fish
                </motion.h1>
                
                <motion.p
                initial={{ y: 120, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                    type: "tween",
                    duration: 0.5,
                    delay: 0.1
                }}
                className="w-full md:w-[70%] uppercase m-auto text-[2.7vw] md:text-[1.2vw] leading-tight md:leading-normal text-black font-burbank-black">
                    Wanting to show his creativity in an increasingly cubical world, 
                    Toona Fish is ready to go beyond black-and-white. With the Chapter 2 Season 8 Battle Pass, 
                    you’re able to unlock the free-spirited Toona Fish. 
                    Collect Color Bottles and Rainbow Ink throughout the Season and color him your way!
                </motion.p>
            </div>
        </div>
    </div>
  );
};

export default SeasonStuff;