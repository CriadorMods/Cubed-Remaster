import React from "react";

// Assets
import BattlePass from "@/assets/Icons/BattlePass.png";

const Skins: React.FC = () => {
  return (
    <div className="relative w-full h-[125vh] -mt-62.5 z-10">

      <img 
        src={BattlePass}
        className="absolute top-5 md:top-0 right-12 md:right-30 w-auto h-[8em] md:h-[10em] z-50"
        alt="Battle Pass"
        draggable={false}
      />

      <div
        className="absolute inset-0 bg-cover bg-no-repeat [clip-path:polygon(0%_4%,0%_94%,34%_96%,27%_93%,100%_97%,100%_8%,69%_6%,74%_9%)]"
        style={{
          backgroundImage:
            "url('https://cdn2.unrealengine.com/fortnite-chapter-2-season-8-battle-pass-characters-bg-2880x2241-f4710adffd1b.jpg')",
        }}
      />
    </div>
  );
};

export default Skins;