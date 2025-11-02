import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Assets
import CutsNews from "@/assets/CutsNews.png";

// Zustand
import { useNewsStore } from "@/zustand/NewsStore";

// Utils
import { createSlug } from "@/utils/string";

const News: React.FC = () => {
  const { news } = useNewsStore();

  return (
    <div className="mt-[3.2rem] w-screen flex flex-col justify-start items-center bg-[#f1f4f6] min-h-[calc(100vh-51.2px)]">
      <div className="w-[90%] lg:w-[62%] grid grid-cols-1 lg:grid-cols-2 gap-8 my-10">

        {news.map((post, index) => (
        <Link 
        key={index}
        to={`/news/${createSlug(post.header)}`}
        className={index === 0 ? "lg:col-span-2" : ""}
        >
          <motion.div
            key={index}
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ 
              type: "tween",
              duration: 0.35
            }}
            style={{ backgroundImage: `url(${post.image})` }}
            className="relative w-full bg-center bg-cover bg-no-repeat hover:bg-[#106EA0F9] cursor-pointer group overflow-hidden h-126"
          >
            <div
              style={{ backgroundImage: `url(${CutsNews})` }} 
              className="absolute inset-0 bg-[#1db8f3e6] opacity-0 scale-200 bg-center bg-cover bg-no-repeat group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-in-out" 
            />

            <div
            className={`absolute flex flex-col gap-2 left-0 -bottom-8 leading-0 
              ${index !== 0 ? 'p-[1.8em] group-hover:-translate-y-5' : 'p-[3em] sm:p-[4em] group-hover:-translate-y-7'} 
              transition-all ease-in-out duration-300`}
            >
              <div className="flex font-burbank-black uppercase text-[1.15em] gap-3 text-white text-center">
                {new Date(post.created_at).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </div>
              <h1 
              className={`font-burbank-black text-white tracking-wide uppercase
                ${index !== 0 ? 'text-[2.8em] leading-14' : 'text-[3.5em] leading-18'}
              `}
              >
                {post.header}
              </h1>
            </div>
          </motion.div>
        </Link> 
        ))}

      </div>
    </div>
  );
};

export default News;