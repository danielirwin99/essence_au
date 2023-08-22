import React from "react";
import { motion } from "framer-motion";
import { BsTelephone } from "react-icons/bs";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="h-[calc(100vh-80px)] relative ">
        {/* FIXED BUTTON */}
        <div className="absolute w-full h-full -z-10">
          <img
            src="https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="Header Img"
            className="w-full h-full object-cover brightness-[.37]"
          />
        </div>
        <div className="flex h-full z-10 w-full flex-col justify-center items-center pb-52">
          <h1 className="text-white font-bold text-center text-6xl lg:text-7xl z-10 tracking-[0.15em] text-shadow">
            EssenceAu
          </h1>
          <div className="flex items-center justify-center mt-20">
            <h2 className="text-2xl lg:text-3xl font-bold text-cyan-300 text-shadow text-center">
              One Stop Shop For All Collectors And Sneakerheads
            </h2>
          </div>
          <Link to={"/top-sellers"} className="mt-20">
            <button
              type="button"
              class="template-shadow text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none  focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-2xl px-7 py-2.5 text-center mr-2 mb-2"
            >
              SHOP NOW
            </button>
          </Link>
        </div>
        <div className="absolute xs:bottom-10 bottom-10 w-full flex justify-center items-center">
          <a href="#hot">
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-white flex justify-center items-start p-2">
              <motion.div
                animate={{ y: [0, 24, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-2 h-3 rounded-full bg-white mb-1"
              />
            </div>
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;
