import React from "react";

const Vbucks: React.FC = () => {
  return (
    <div className="relative bg-white w-full min-h-[50vh] flex justify-center items-center">
      <img 
      src="https://cdn2.unrealengine.com/v-bucks-coins-left-1184x1234-2f1319541651.png" 
      alt="Vbucks"
      className="absolute left-0 top-44 sm:-top-22 z-30 h-52 sm:h-60 md:h-75 lg:h-90 xl:h-130"
      draggable={false}
      />

      <img 
      src="https://cdn2.unrealengine.com/v-bucks-coins-right-1230x1296-5853f818e449.png" 
      alt="Vbucks"
      className="absolute right-0 top-44 sm:-top-22 z-30 h-52 sm:h-60 md:h-75 lg:h-90 xl:h-130"
      draggable={false}
      />

      <div className="flex flex-col font-burbank-black uppercase justify-center items-center text-center mb-15 text-[#333] z-50"> 
        <h1 className="text-[2.5em] sm:text-[3em] md:text-[3.8em]">
          1500 V-Bucks Back
        </h1>

        <p className="w-[90%] sm:w-[70%] md:w-[35%] text-[1em] sm:text-[1.1em] leading-5.5">
          Get the Battle Pass for only 950 V-Bucks and earn
          up to 1500 V-Bucks by playing. Use them to buy the
          next Battle Pass or items from the Item Shop.
        </p>
      </div>
      
    </div>
  );
};

export default Vbucks;