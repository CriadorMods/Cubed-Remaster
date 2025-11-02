import React from "react";

const Leaderboard: React.FC = () => {
  return (
    <div className="w-[95%] md:w-[70%] h-auto flex flex-col justify-center items-center font-burbank-black">
      <table className="w-full border-separate table-fixed border-spacing-y-1.25 border-spacing-x-1.25">
        <thead>
          <tr className="uppercase text-[#c2c8cb] text-[1em] md:text-[1.15em]">
            <th className="w-[25%] md:w-[20%] p-3 md:p-5 text-center">Rank</th>
            <th className="w-[60%] p-3 md:p-5 text-center">Name</th>
            <th className="w-[35%] md:w-[20%] p-3 md:p-5 text-center">Hype</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-[#f3f8f9]">
            <td className="text-[#1b073e] text-[1.2em] md:text-[1.5em] text-center p-6 break-words">1</td>
            <td className="text-[#1b073e] text-[1.2em] md:text-[1.5em] text-start p-6 truncate">HunterLH YT</td>
            <td className="text-[#9a41ff] text-[1.2em] md:text-[1.5em] text-center p-6 break-words">271620</td>
          </tr>
          <tr className="bg-[#f3f8f9]">
            <td className="text-[#1b073e] text-[1.2em] md:text-[1.5em] text-center p-6 break-words">2</td>
            <td className="text-[#1b073e] text-[1.2em] md:text-[1.5em] text-start p-6 truncate">YT Devour Prox</td>
            <td className="text-[#9a41ff] text-[1.2em] md:text-[1.5em] text-center p-6 break-words">278189</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;