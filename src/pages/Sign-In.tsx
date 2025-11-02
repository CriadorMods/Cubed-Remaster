import React from "react";
import { Link } from "react-router-dom";

// Assets
import RegisterBG from "@/assets/registerbg.jpg";

const SignIn: React.FC = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [rememberMe, setRememberMe] = React.useState(false);

  return (
    <div
      className="mt-[3.2rem] w-screen min-h-[calc(100vh-51.2px)] bg-cover bg-center flex items-center justify-center relative"
      style={{ backgroundImage: `url(${RegisterBG})` }}
    >
      <div className="absolute inset-0 bg-black/20" />
      <div className="flex flex-col items-center z-10">
        <div className="relative bg-white flex md:flex-row flex-col w-full md:w-[900px] min-h-fit py-10 transition-all">
          <div className="w-full md:w-1/2 px-8 flex flex-col justify-center items-center py-2 border-r border-gray-200">
            <span className="uppercase font-bold text-sm md:mb-4 mb-5 md:mt-0 mt-4">
              Sign in
            </span>

            <input
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full py-5 border border-gray-200 px-3 mb-5 text-sm"
            />
            <input
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full py-5 border border-gray-200 px-3 mb-5 text-sm"
            />

            <div className="w-full flex justify-between mb-1">
              <label className="flex gap-3 text-sm">
                <input
                  type="checkbox"
                  className="w-4 h-4 mt-1 cursor-pointer"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <span>Remember Me</span>
              </label>
              <a className="hover:underline opacity-65 hover:opacity-80 transition cursor-pointer">
                Password help
              </a>
            </div>

            <button
              className="w-full py-4.5 mt-8 bg-[#dc0a59] hover:bg-[#f40c63] text-white font-medium text-sm transition cursor-pointer"
            >
              SIGN IN
            </button>
          </div>

          <div className="w-1/2 hidden md:flex px-12 py-10 flex-col items-start text-left">
            <img
              src="https://web.archive.org/web/20180502132205im_/https://static-assets-prod.epicgames.com/fortnite/static/webpack/cb4399a7ee205610531057537937045e.png"
              alt="logo"
              className="w-11 mb-4"
            />
            <div className="uppercase font-bold text-sm mb-2">
              Don't have an Epic Games account?
            </div>
            <p className="text-sm text-gray-600 mb-6 max-w-[400px]">
              Your Epic Games Account allows you to participate in our growing
              community of gamers and creators.
            </p>
            <Link className="w-full" to={"/register"}>
              <button className="w-full py-4.5 border border-[#e61c64] text-[#e61c64] hover:bg-[#f40c63] hover:text-white transition ease-in-out duration-300 font-semibold text-sm cursor-pointer">
                SIGN UP
              </button>
            </Link>
          </div>

          <div className="w-full md:hidden flex px-8 py-5 flex-col items-center text-left">
            <hr className="w-full bg-[#3d3c3c] mb-3.5" />
            <div className="uppercase font-bold text-sm mb-2">
              Don't have an Epic Games account?
            </div>
            <p className="text-sm text-gray-600 mb-5 max-w-[400px]">
              Your Epic Games Account allows you to participate in our growing
              community of gamers and creators.
            </p>
            <Link className="w-full" to={"/register"}>
              <button className="w-full py-4.5 border border-[#e61c64] text-[#e61c64] hover:bg-[#f40c63] hover:text-white transition ease-in-out duration-300 font-semibold text-sm cursor-pointer">
                SIGN UP
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
