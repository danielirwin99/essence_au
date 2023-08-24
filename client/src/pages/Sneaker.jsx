import { Rating } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import SizeMenu from "../components/UI/SizeMenu";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { PiAirplaneTiltLight } from "react-icons/pi";
import { AiOutlineCheck } from "react-icons/ai";
import Testimonials from "../components/Landing/Testimonials";

const Sneaker = () => {
  const [sneakers, setSneakers] = useState({});
  const baseUrl = process.env.REACT_APP_API_URL;
  const params = useParams();
  const { pathname } = useLocation();

  async function getSneakers() {
    const { data } = await axios.get(`${baseUrl}/Sneaker/${params.id}`);
    setSneakers(data);
  }

  useEffect(() => {
    getSneakers();
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <main className="max-w-[1500px] mx-auto w-full">
      <div className="pt-10 mx-4">
        <div className="lg:grid lg:grid-cols-2 gap-20 space-x-3">
          <figure className="w-full flex items-center">
            <img className="w-full" src={sneakers.photo} alt="" />
          </figure>
          <div>
            <h1 className="text-xl mt-8 lg:mt-0 lg:text-3xl font-bold uppercase">
              {sneakers.brand}&nbsp;<span>{sneakers.name}</span>
            </h1>
            <h3 className="text-lg mt-3">
              SKU:{" "}
              <span className="font-semibold tracking-wider">
                {sneakers.sku}
              </span>
            </h3>
            <h3 className="capitalize text-lg my-2 text-gray-500">
              {sneakers.gender} Shoe
            </h3>
            <h2 className="text-2xl font-bold ">${sneakers.price} AUD</h2>
            <div className="my-5 flex justify-center items-center space-x-4">
              <Rating name="read-only" value={5} readOnly />
              <span className="font-semibold">25 Reviews</span>
            </div>
            <div className="flex justify-between">
              <span>Size:</span>
              <span className="underline underline-offset-4">Size Chart</span>
            </div>
            <div className="my-2">
              <SizeMenu />
            </div>
            <div className="flex flex-col space-y-2">
              <button className="py-2 w-full px-4 active:bg-black rounded-sm bg-black/10 tracking-[0.15rem] font-bold hover:opacity-70 transition-all duration-100 ease-in">
                ADD TO CART
              </button>
              <button className="py-2 px-4 rounded-sm active:bg-white bg-black text-white tracking-[0.15rem] font-bold mt-2 hover:opacity-70 duration-100 ease-in ">
                BUY NOW
              </button>
            </div>
            <div className="flex flex-col lg:flex-row lg:space-x-5 mt-5">
              <div className="flex items-center space-x-2">
                <BsFillPatchCheckFill className="text-sky-500 w-7 lg:text-xl" />
                <p className="text-gray-500 text-sm lg:text-base whitespace-nowrap">
                  Authenticity Guaranteed
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <PiAirplaneTiltLight className="text-gray-500 w-7 mt-2 lg:mt-0 text-2xl" />
                <p className="text-gray-500 text-sm lg:text-base whitespace-nowrap">
                  Fast N' Free Shipping
                </p>
              </div>
            </div>
            <p className="text-green-500 text-lg italic font-semibold mt-5">
              In stock
            </p>
            <div className="w-full h-[2.5px] bg-green-500 rounded-md mt-2 stock"></div>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 w-full px-5 lg:px-0 gap-5 lg:gap-20 mt-5 lg:mt-0">
          <div className="space-y-4">
            <h2 className="uppercase tracking-wide text-sm font-semibold">
              Description
            </h2>
            <h1 className="capitalize lg:text-xl font-bold lg:font-semibold">
              {sneakers.brand}&nbsp;<span>{sneakers.name}</span>
            </h1>
            <p className="lg:text-lg">- Brand New / True to size</p>
            <p className="lg:text-lg">- Items are 100% authentic</p>
            <p className="lg:text-lg">
              - Check your size{" "}
              <span className="font-semibold underline cursor-pointer">
                here
              </span>{" "}
            </p>
            <p className="lg:text-lg">- Released in {sneakers.releaseYear}</p>
            <p className="lg:text-lg capitalize">- {sneakers.gender} Shoe</p>
            <p className="lg:text-lg">SKU: {sneakers.sku}</p>
          </div>
          <div className="space-y-1 ml-5 mt-5">
            <div className="flex space-x-4 items-center">
              <AiOutlineCheck className="text-sky-500 text-xl" />
              <h3>Pickup available at Footlocker Sydney HQ</h3>
            </div>
            <div className="flex space-x-4 items-center">
              <AiOutlineCheck className="text-sky-500 text-xl" />
              <p>Shipping Available</p>
            </div>
            <div className="flex space-x-4 items-center pb-2">
              <AiOutlineCheck className="text-sky-500 text-xl" />
              <p>Usually ready in 24 hours</p>
            </div>
            <Link
              to={"/policy"}
              className="underline hover:opacity-75 underline-offset-2"
            >
              View store information
            </Link>
          </div>
        </div>
        <div className="border-b border-gray-400 mt-10 -mb-10  " />
        <Testimonials />
      </div>
    </main>
  );
};

export default Sneaker;
