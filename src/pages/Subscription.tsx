import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

// Components
import BattlePassInfo from "@/components/Subscription/BattlePassInfo";
import VbucksMonth from "@/components/Subscription/VbucksMonth";

const Subscription: React.FC = () => {
  
  return (
    <>
    <Helmet>
      <title>Fortnite Crew | Monthly Subscription</title>
    </Helmet>
    
    <div className="mt-[3.2rem] w-screen min-h-[calc(100vh-51.2px)] flex flex-col justify-start">
      <div
        className="w-full flex items-start md:items-center justify-center md:justify-end p-12.5 min-h-[90vh] sm:min-h-[43vh] md:min-h-[57vh] lg:min-h-[73vh] xl:min-h-[90vh] bg-no-repeat bg-cover bg-[url('https://cdn2.unrealengine.com/fn-subs-web-ninjawolf-mobile-750x1760-1eb4f00a08c4.jpg')] sm:bg-[url('https://cdn2.unrealengine.com/fn-subs-web-ninjawolf-desktop-1920x1080-8bbdff9f6229.jpg')] transition-all"
      >

        <div className="flex flex-col text-center items-center md:basis-[50%] font-burbank-black text-white uppercase">
          <motion.img 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            type: "tween",
            duration: 1.5,
            delay: 0.3
          }}
          src="https://cdn2.unrealengine.com/en-subscriptions-fn-crew-png-wordmark-2200x1400-582022337.png" 
          alt="subscriptions" 
          className="w-[75%]"
          draggable={false}
          />

          <div className="-translate-y-8 lg:-translate-y-18 flex flex-col items-center">
            <motion.h2 
            initial={{ x: 150, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 70,
              damping: 12.5,
            }}
            className="text-[1.5em]"
            >
              The Ultimate Fortnite Offer
            </motion.h2>
            <motion.p 
            initial={{ x: 150, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 70,
              damping: 12.5,
              delay: 0.45
            }}
            className="text-[1em] lg:w-1/2"
            >
              The best way to maximize your Fortnite experience. 
              Joining the Fortnite Crew gets members everything 
              below for only $11.99 each month.
            </motion.p>

            <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              type: "tween",
              duration: 1.5,
              delay: 0.3
            }}
            className="relative">
            
            <motion.button 
            initial={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
            whileHover={{ clipPath: "polygon(4% 0, 100% 0, 98% 100%, 2% 100%)" }}
            className="
            font-burbank-black text-black text-[1.5em] uppercase bg-[#F7FF00] hover:bg-[#e6e600] 
            cursor-pointer transition-c mt-5 py-1.25 px-7.5">
              Join Now
            </motion.button>

            <svg id="left" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" className="absolute w-[4em] h-[4em] right-[79%] top-[40%] rotate-y-180 scale-80">
            <path d="M7.558 39.687a29.865 29.865 0 004.52-1.268 45.386 45.386 0 004.7-2.147s.738-1.662 1.382-3.538c.716-2.085 1.347-4.407 1.347-4.407s-1.715.053-3.485-.078c-2.031-.15-4.155-.487-4.155-.487a14.441 14.441 0 01-2.773 1.417c-1.931.689-3.65 1.234-3.65 1.234a19.6 19.6 0 002.494 2.512c1.2.956 1.573 1.243 1.573 1.243zm6.224-13.09a34.8 34.8 0 004.146.27 19.7 19.7 0 003.468-.356s-.252 2.178-.7 4.163a40.284 40.284 0 01-1.347 4.407s2.119-1.643 3.976-3.279c1.458-1.285 2.751-2.649 2.751-2.649s.069-2.209.035-4.572c-.026-1.8-.173-4.346-.173-4.346a15.229 15.229 0 01-3.425 1.443c-2.084.5-4.1.817-4.1.817s-1 1.069-2.094 2.042c-1.217 1.069-2.537 2.055-2.537 2.055zm6.076-5.9s2.272-.733 4.294-1.478c1.565-.576 3-1.208 3-1.208a28.562 28.562 0 01.591 3.894 34.94 34.94 0 01-.035 4.572s1.076-1.531 2.052-3.129c1.239-2.031 2.442-4.233 2.442-4.233s-.823-2.565-1.72-4.937c-.641-1.692-1.444-3.425-1.444-3.425s-1.632 1.526-2.946 2.512a29.638 29.638 0 01-3.181 2.086zm3.616-7.545s1.485-1.03 2.955-2.295c1.577-1.357 3.146-2.955 3.146-2.955s1.02 1.86 1.895 3.842a69.88 69.88 0 011.7 4.285l1.391-8.761s-1.8-2.513-3.442-4.433a23.511 23.511 0 00-2.5-2.512 15.391 15.391 0 01-1.608 3.329 27.671 27.671 0 01-2.694 3.372 12.767 12.767 0 01-.113 2.617c-.21 1.518-.73 3.505-.73 3.505z" fill="#f7ff00" fill-rule="evenodd"></path>
            </svg>

            <svg id="right" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" className="absolute w-[4em] h-[4em] left-[79%] top-[40%] scale-80">
            <path 
            d="M7.558 39.687a29.865 29.865 0 004.52-1.268 45.386 45.386 0 004.7-2.147s.738-1.662 1.382-3.538c.716-2.085 1.347-4.407 1.347-4.407s-1.715.053-3.485-.078c-2.031-.15-4.155-.487-4.155-.487a14.441 14.441 0 01-2.773 1.417c-1.931.689-3.65 1.234-3.65 1.234a19.6 19.6 0 002.494 2.512c1.2.956 1.573 1.243 1.573 1.243zm6.224-13.09a34.8 34.8 0 004.146.27 19.7 19.7 0 003.468-.356s-.252 2.178-.7 4.163a40.284 40.284 0 01-1.347 4.407s2.119-1.643 3.976-3.279c1.458-1.285 2.751-2.649 2.751-2.649s.069-2.209.035-4.572c-.026-1.8-.173-4.346-.173-4.346a15.229 15.229 0 01-3.425 1.443c-2.084.5-4.1.817-4.1.817s-1 1.069-2.094 2.042c-1.217 1.069-2.537 2.055-2.537 2.055zm6.076-5.9s2.272-.733 4.294-1.478c1.565-.576 3-1.208 3-1.208a28.562 28.562 0 01.591 3.894 34.94 34.94 0 01-.035 4.572s1.076-1.531 2.052-3.129c1.239-2.031 2.442-4.233 2.442-4.233s-.823-2.565-1.72-4.937c-.641-1.692-1.444-3.425-1.444-3.425s-1.632 1.526-2.946 2.512a29.638 29.638 0 01-3.181 2.086zm3.616-7.545s1.485-1.03 2.955-2.295c1.577-1.357 3.146-2.955 3.146-2.955s1.02 1.86 1.895 3.842a69.88 69.88 0 011.7 4.285l1.391-8.761s-1.8-2.513-3.442-4.433a23.511 23.511 0 00-2.5-2.512 15.391 15.391 0 01-1.608 3.329 27.671 27.671 0 01-2.694 3.372 12.767 12.767 0 01-.113 2.617c-.21 1.518-.73 3.505-.73 3.505z" fill="#f7ff00" fill-rule="evenodd">
            </path>
            </svg>
            
            </motion.div>

            <motion.a
            href="" 
            initial={{ x: 150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 70,
              damping: 12.5,
            }}
            className="mt-7 text-[#ffff00] hover:text-white transition-colors duration-300 text-[1.5em]">
              {"> SEE THIS MONTH'S BENEFITS <"}
            </motion.a>
          </div>
        </div>
      </div>

      <BattlePassInfo />
      <VbucksMonth />
    </div>
    </>
  );
};

export default Subscription;