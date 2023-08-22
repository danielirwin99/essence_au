import React from "react";
import { Link } from "react-router-dom";
import { BiShoppingBag } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import Hamburger from "../UI/Hamburger";

const Navbar = () => {
  return (
    <nav className="sticky z-[999] top-0 w-full h-20 bg-[#111] flex items-center justify-between px-8">
      <div className="flex items-center justify-center space-x-5 ">
        <Link className="flex items-center justify-center" href="/">
          <h1 className="text-white text-2xl mr-5 lg:mr-0 lg:text-4xl font-bold">
            EssenceAu
          </h1>
        </Link>
      </div>
      <div className="items-center hidden md:flex space-x-14 pt-1 lg:mr-10 ml-14 lg:ml-0 transition-all duration-300 ease-in">
        <Link href="/TopSellers">
          <h1 className="navBar__headers">Top Sellers</h1>
        </Link>
        <Link href="/arrivals">
          <h1 className="navBar__headers">New Arrivals</h1>
        </Link>
        <Link href="/sales">
          <h1 className="navBar__headers">On Sale</h1>
        </Link>
        <Link href="/about">
          <h1 className="navBar__headers hidden lg:inline">About</h1>
        </Link>
      </div>
      <div>
        <ul className="flex space-x-6 items-center">
          <li>
            <button className="flex">
              <AiOutlineSearch className="h-8 w-8 text-white" />
            </button>
          </li>

          <li>
            <Link href="/cart">
              <BiShoppingBag className="h-8 w-8 text-white" />
            </Link>
          </li>
          <li className="flex md:hidden">
            <button>
              <Hamburger className="h-8 w-8 text-white" />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
