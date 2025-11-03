import React, { useState, useRef, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

// Utils
import { createSlug } from "@/utils/string";

// Icons
import { FaFacebookF, FaTwitter, FaVk } from "react-icons/fa";
import { ImReddit } from "react-icons/im";

interface INewsPost {
  _id: string;
  author: string;
  blurhash: string;
  body: string;
  created_at: string;
  header: string;
  image: string;
}

const NewsPost: React.FC = () => {
  const { header } = useParams();
  const [newsPost, setNewsPost] = useState<INewsPost | null>(null);
  const navigate = useNavigate();
  const idkRef = useRef<HTMLDivElement | null>(null);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const news = async () => {
      try {
        const response = await fetch(
          "" // your news endpoint here too
        );
        const data = await response.json();
        const array: INewsPost[] = data.map((post: any) => ({
          _id: post._id,
          author: post.author,
          header: post.header,
          image: post.image,
          blurhash: post.blurhash,
          body: post.body,
          created_at: post.created_at,
        }));

        const found = array.find(p => createSlug(p.header) === header);
        if (found) setNewsPost(found); 
        else{
          navigate("/news")
        }
      } catch (error) {
        console.error("error fetching news:", error);
      }
    };
    news();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!idkRef.current) return;
      const rect = idkRef.current.getBoundingClientRect();
      const shouldBeFixed = rect.bottom <= 0;
      
      setIsFixed(prev => (prev !== shouldBeFixed ? shouldBeFixed : prev));
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll)
  }, []);

  return (
    <div className="mt-[3.2rem] flex flex-col w-screen min-h-[calc(100vh-51.2px)] justify-start items-center">
      <div className="relative w-full">

        <div
        ref={idkRef}
        style={{ backgroundImage: `url('${newsPost?.image}')`, }}
        className="w-full h-[80vh] bg-center bg-no-repeat bg-fixed bg-cover -translate-y-[1.75em]"
        />

      </div>

            <div className="relative w-full max-w-[55%] md:max-w-[65%] my-6 leading-normal font-OpenSans text-black text-md">

                <div className={`${isFixed ? "fixed" : "absolute"} top-[11.5em] ml-[-6em] flex flex-col gap-1.75`}>
                <i className="bg-[#236293] text-white w-[2em] h-[2em] flex justify-center items-center rounded-full cursor-pointer hover:brightness-130 transition-all ease duration-300">
                  <FaFacebookF/>
                </i>

                <i className="bg-[#38ace0] text-white w-[2em] h-[2em] flex justify-center items-center rounded-full cursor-pointer hover:brightness-130 transition-all ease duration-300">
                  <FaTwitter/>
                </i>

                <i className="bg-[#456890] text-white w-[2em] h-[2em] flex justify-center items-center rounded-full cursor-pointer hover:brightness-130 transition-all ease duration-300">
                  <FaVk/>
                </i>

                <i className="bg-[#ff8558] text-white w-[2em] h-[2em] flex justify-center items-center rounded-full cursor-pointer hover:brightness-130 transition-all ease duration-300">
                  <ImReddit/>
                </i>
              </div>

              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  h1: ({ node, ...props }) => (
                    <h1
                      className="text-[2.8em] font-burbank-black uppercase mt-6 mb-4"
                      {...props}
                    />
                  ),
                  h2: ({ node, ...props }) => (
                    <h2
                      className="text-[1.875em] font-burbank-black uppercase mt-6 mb-3"
                      {...props}
                    />
                  ),
                  h3: ({ node, ...props }) => (
                    <h3
                      className="text-[1.25em] font-burbank-black mt-4 mb-2"
                      {...props}
                    />
                  ),
                  p: ({ node, ...props }) => (
                    <p
                      className="leading-[2] text-[1em] font-normal"
                      {...props}
                    />
                  ),
                  ul: ({ node, ...props }) => (
                    <ul className="list-disc list-inside mb-4" {...props} />
                  ),
                  ol: ({ node, ...props }) => (
                    <ol className="list-decimal list-inside mb-4" {...props} />
                  ),
                  li: ({ node, ...props }) => (
                    <li className="mb-1 leading-relaxed" {...props} />
                  ),
                  a: ({ node, ...props }) => (
                    <a
                      className="text-[#337ab7] hover:underline hover:text-[#3be1ff] transition-colors duration-300 ease-in-out"
                      {...props}
                    />
                  ),
                  hr: ({ node, ...props }) => (
                    <div
                      className="my-5 h-0.75 w-full bg-[#b3b3b3]"
                      {...props}
                    />
                  ),
                  strong: ({ node, ...props }) => (
                    <strong
                      className="font-bold"
                      {...props}
                    />
                  ),
                  b: ({ node, ...props }) => (
                    <b
                      className="font-bold"
                      {...props}
                    />
                  ),
                  img: ({ node, ...props }) => (
                    <img
                      draggable={false}
                      alt="Image!"
                      className="my-3.5 w-full max-w-full mx-auto"
                      {...props}
                    />
                  ),
                }}
              >
                {newsPost?.body}
              </ReactMarkdown>
        </div>
    </div>
  );
};

export default NewsPost;
