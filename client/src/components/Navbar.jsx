import React from "react";
import { Link } from "react-router-dom";
import { BiShoppingBag } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import BestSellers from "./UI/Best Sellers";
import BurgerBar from "./UI/BurgerBar";
import Sneakers from "./UI/Sneakers";
import NewArrivals from "./UI/New Arrivals";

const Navbar = () => {
  return (
    <nav className="sticky z-[999] top-0 w-full h-20 bg-[#111] flex items-center justify-between px-4 sm:px-8">
      <div className="flex items-center justify-center space-x-5 ">
        <Link to={"/"} className="flex items-center justify-center" href="/">
          <h1 className="text-white text-2xl mr-5 lg:mr-0 xl:text-4xl tracking-wider font-bold text-shadowWhite">
            EssenceAu
          </h1>
        </Link>
      </div>
      <div className="items-center justify-center hidden lg:flex space-x-14 pt-1 mr-0 ml-14 lg:ml-0 transition-all duration-300 ease-in">
        <div>
          <Sneakers />
        </div>
        <div>
          <NewArrivals />
        </div>
        <div>
          <BestSellers />
        </div>

        <Link to="/about">
          <h1 className="navBar__headers hidden xl:inline">ABOUT</h1>
        </Link>
      </div>
      <div>
        <ul className="flex space-x-6 items-center">
          <li className="flex">
            <button>
              <BsPerson className=" h-7 w-7 md:h-8 md:w-8 text-white" />
            </button>
          </li>
          <li className="hidden lg:flex">
            <button>
              <AiOutlineSearch className=" h-7 w-7 md:h-8 md:w-8 text-white" />
            </button>
          </li>
          <li>
            <Link to="/cart">
              <BiShoppingBag className=" h-7 w-7 md:h-8 md:w-8 text-white" />
            </Link>
          </li>
          <li className="flex lg:hidden">
            <button>
              <BurgerBar className=" h-7 w-7 md:h-8 md:w-8 text-white" />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
