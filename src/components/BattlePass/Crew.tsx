import React from "react";
import { motion } from "framer-motion";

const Crew: React.FC = () => {
  return (
    <div 
    className="
    relative w-full h-[50vh] bg-cover bg-top bg-no-repeat min-h-200 sm:min-h-240 md:min-h-330 lg:min-h-200 flex justify-center -mt-12.5
    items-center overflow-hidden [clip-path:polygon(0%_0%,_0%_100%,_100%_100%,_100%_8%,_64%_4%,_70%_7%)] md:[clip-path:polygon(0%_0%,0%_100%,100%_100%,100%_8%,67%_3%,73%_8%)]
    "
    >
      <div className="absolute inset-0 w-full h-full" style={{ backgroundImage: "url('https://cdn2.unrealengine.com/fortnite-crew-subscription-bg-2881x2729-c4e87c2c5f4d.jpg')"}}/>
      <div className="absolute inset-0 w-full h-full flex flex-col-reverse lg:flex-row justify-start lg:justify-between items-center z-10">

        <motion.img
        initial={{ x: -80, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ 
          type: "spring",
          stiffness: 75,
          damping: 9,
          delay: 0.1
        }}
        src="https://cdn2.unrealengine.com/fortnite-chapter-2-season-8-crew-featured-character-2066x1952-0f2cadd9a3af.png" 
        className="w-full lg:w-auto lg:h-full"
        alt="Crew" 
        draggable={false}
        />

        <div className="flex flex-col max-w-[65%] justify-center items-center uppercase font-burbank-black">
          <motion.img
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ 
            type: "spring",
            stiffness: 70,
            damping: 10,
            delay: 0.1
          }}
          src="https://cdn2.unrealengine.com/en-1743x759-fcffcc487f40.png"
          alt="Crew"
          className="w-[80%] lg:w-[60%]"
          draggable={false}
          />

          <motion.span 
          initial={{ y: 70, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ 
            type: "spring",
            stiffness: 70,
            damping: 10,
            delay: 0.25
          }}
          className="text-[0.9em] md:text-[1.1em] text-[#F7FF00] text-center mt-3.5">
            Also Available with the Fortnite Crew
          </motion.span>

          <motion.p 
          initial={{ y: 70, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ 
            type: "spring",
            stiffness: 70,
            damping: 9,
            delay: 0.35
          }}
          className="text-[0.9em] leading-4.75 text-center max-w-full md:max-w-[60%] text-white mt-1">
            The Fortnite Crew is the ultimate subscription offer that 
            includes the Battle Pass, 1,000 monthly V-Bucks, and an 
            exclusive monthly Fortnite Crew Pack.
          </motion.p>

          <motion.div 
          initial={{ y: 70, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ 
            type: "spring",
            stiffness: 70,
            damping: 9,
            delay: 0.5
          }}
          className="relative">
            
            <motion.button 
            initial={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
            whileHover={{ clipPath: "polygon(4% 0, 100% 0, 98% 100%, 2% 100%)" }}
            className="
            font-burbank-black text-black text-[1.5em] uppercase bg-[#F7FF00] hover:bg-[#e6e600] 
            cursor-pointer transition-c mt-5 py-1.25 px-7.5">
              Learn More
            </motion.button>

            <svg id="left" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" className="absolute w-[4em] h-[4em] right-[85%] top-[45%] rotate-y-180 scale-80">
            <path d="M7.558 39.687a29.865 29.865 0 004.52-1.268 45.386 45.386 0 004.7-2.147s.738-1.662 1.382-3.538c.716-2.085 1.347-4.407 1.347-4.407s-1.715.053-3.485-.078c-2.031-.15-4.155-.487-4.155-.487a14.441 14.441 0 01-2.773 1.417c-1.931.689-3.65 1.234-3.65 1.234a19.6 19.6 0 002.494 2.512c1.2.956 1.573 1.243 1.573 1.243zm6.224-13.09a34.8 34.8 0 004.146.27 19.7 19.7 0 003.468-.356s-.252 2.178-.7 4.163a40.284 40.284 0 01-1.347 4.407s2.119-1.643 3.976-3.279c1.458-1.285 2.751-2.649 2.751-2.649s.069-2.209.035-4.572c-.026-1.8-.173-4.346-.173-4.346a15.229 15.229 0 01-3.425 1.443c-2.084.5-4.1.817-4.1.817s-1 1.069-2.094 2.042c-1.217 1.069-2.537 2.055-2.537 2.055zm6.076-5.9s2.272-.733 4.294-1.478c1.565-.576 3-1.208 3-1.208a28.562 28.562 0 01.591 3.894 34.94 34.94 0 01-.035 4.572s1.076-1.531 2.052-3.129c1.239-2.031 2.442-4.233 2.442-4.233s-.823-2.565-1.72-4.937c-.641-1.692-1.444-3.425-1.444-3.425s-1.632 1.526-2.946 2.512a29.638 29.638 0 01-3.181 2.086zm3.616-7.545s1.485-1.03 2.955-2.295c1.577-1.357 3.146-2.955 3.146-2.955s1.02 1.86 1.895 3.842a69.88 69.88 0 011.7 4.285l1.391-8.761s-1.8-2.513-3.442-4.433a23.511 23.511 0 00-2.5-2.512 15.391 15.391 0 01-1.608 3.329 27.671 27.671 0 01-2.694 3.372 12.767 12.767 0 01-.113 2.617c-.21 1.518-.73 3.505-.73 3.505z" fill="#f7ff00" fill-rule="evenodd"></path>
            </svg>

            <svg id="left" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" className="absolute w-[4em] h-[4em] left-[84%] top-[40%]">
            <path 
            d="M7.558 39.687a29.865 29.865 0 004.52-1.268 45.386 45.386 0 004.7-2.147s.738-1.662 1.382-3.538c.716-2.085 1.347-4.407 1.347-4.407s-1.715.053-3.485-.078c-2.031-.15-4.155-.487-4.155-.487a14.441 14.441 0 01-2.773 1.417c-1.931.689-3.65 1.234-3.65 1.234a19.6 19.6 0 002.494 2.512c1.2.956 1.573 1.243 1.573 1.243zm6.224-13.09a34.8 34.8 0 004.146.27 19.7 19.7 0 003.468-.356s-.252 2.178-.7 4.163a40.284 40.284 0 01-1.347 4.407s2.119-1.643 3.976-3.279c1.458-1.285 2.751-2.649 2.751-2.649s.069-2.209.035-4.572c-.026-1.8-.173-4.346-.173-4.346a15.229 15.229 0 01-3.425 1.443c-2.084.5-4.1.817-4.1.817s-1 1.069-2.094 2.042c-1.217 1.069-2.537 2.055-2.537 2.055zm6.076-5.9s2.272-.733 4.294-1.478c1.565-.576 3-1.208 3-1.208a28.562 28.562 0 01.591 3.894 34.94 34.94 0 01-.035 4.572s1.076-1.531 2.052-3.129c1.239-2.031 2.442-4.233 2.442-4.233s-.823-2.565-1.72-4.937c-.641-1.692-1.444-3.425-1.444-3.425s-1.632 1.526-2.946 2.512a29.638 29.638 0 01-3.181 2.086zm3.616-7.545s1.485-1.03 2.955-2.295c1.577-1.357 3.146-2.955 3.146-2.955s1.02 1.86 1.895 3.842a69.88 69.88 0 011.7 4.285l1.391-8.761s-1.8-2.513-3.442-4.433a23.511 23.511 0 00-2.5-2.512 15.391 15.391 0 01-1.608 3.329 27.671 27.671 0 01-2.694 3.372 12.767 12.767 0 01-.113 2.617c-.21 1.518-.73 3.505-.73 3.505z" fill="#f7ff00" fill-rule="evenodd">
            </path>
            </svg>

          </motion.div>
        </div>
      </div>
      <div className="movingshit absolute top-0 left-0 w-[200%] h-[400%] bg-[url('https://cdn2.unrealengine.com/pattern-437x213-579684426.png')] bg-[0_0] bg-[length:250px] bg-repeat" />
    </div>
  );
};

export default Crew;