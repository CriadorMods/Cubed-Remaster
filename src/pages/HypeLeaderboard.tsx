import React from "react";

// Components
import Leaderboard from "@/components/HypeLeaderboard/Leaderboard";

const HypeLeaderboard: React.FC = () => {

  return (
    <div className="mt-[3.2rem] w-screen flex flex-col justify-start items-center min-h-[calc(100vh-51.2px)] font-burbank-black">
        <div className="w-full min-h-[40vh] sm:min-h-[52vh] bg-gradient-to-r from-[#290a7b] to-[#9a41ff] flex flex-col justify-center items-center lg:[clip-path:polygon(0_0,100%_0,100%_100%,0_90%)]">

            <i className="tracking-wide text-[2.8em] sm:text-[3.25em] uppercase text-white pt-2">
                Hype Leaderboard
            </i>

            <p className="text-[1em] md:text-[1.2em] text-[#00fffd] text-center max-w-[90%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-[40%] uppercase tracking-wide">
                Hype is earned by playing in Arena playlists and top earners are shown on the Leaderboard. 
                The more Hype you earn, the further you progress in the Arena divisions and leagues.
                Each league opens up opportunities to compete in events for rewards and participation
                in cash prize tournaments.
            </p>

            <img 
            src="https://cdn2.unrealengine.com/Fortnite+Esports%2Fhype-leaderboard%2F11BR_Web_HypeLeaderboard_Hype-Key-2-1868x177-582d1b2da47a2a3054f87b80148909dd57b7e0a9.png" 
            alt="Arena" 
            className="w-[90%] sm:w-[85%] md:w-[80%] lg:w-[50%] h-auto mt-4 sm:my-6 pb-3"
            />

        </div>

        <Leaderboard />
    </div>
  );
};

export default HypeLeaderboard;
