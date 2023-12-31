import { Rating } from "@mui/material";
import React from "react";
import SizeMenu from "../UI/SizeMenu";

const MonthlyDeal = () => {
  return (
    <section className="flex flex-col items-center  max-w-4 mx-auto mb-10">
      <div className="text-center">
        <div className="mb-20">
          <h2 className=" font-semibold text-md text-gray-500 tracking-widest">
            OUR PICK
          </h2>
          <h1 className="font-bold text-3xl lg:text-4xl mt-1 text-black tracking-widest">
            Sneaker of the Month
          </h1>
        </div>
        <div className="max-w-5 xl:px-5 sm:px-10 flex flex-col lg:flex-row">
          <figure className="w-[60vw] lg:w-2/5 mx-auto mb-5 lg:mb-0">
            <img
              className="w-full"
              src="https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/080/953/403/original/1004215_01.jpg.jpeg?action=crop&width=950"
              alt="Monthly Shoe"
            />
          </figure>
          <div className="w-full lg:w-3/5 flex flex-col justify-center items-center transition-all duration-150 ease-in">
            <h1 className="font-bold text-lg tracking-widest mb-2">
              Nike SB Dunk Low 'Orange Lobster'
            </h1>
            <div className="flex items-center justify-center">
              <Rating
                className="mr-4"
                name="read-only"
                value={4.5}
                precision={0.5}
                readOnly
              />
              <p>(15 Reviews)</p>
            </div>
            <div className="flex justify-center w-full mt-3 space-x-5 tracking-[0.2rem]">
              <h2 className="font-bold text-xl text-red-600">$550</h2>
              <h2 className="font-semi-bold text-black/60 text-xl">
                <del>$700</del>
              </h2>
            </div>
            <div className=" border-b border-gray-300 w-[80%] mx-auto mt-4" />
            <div className="my-2">
              <SizeMenu />
            </div>
            <button className="py-2 px-4 active:bg-black rounded-sm bg-black/10 tracking-[0.15rem] font-bold w-[47.5%] hover:opacity-70 transition-all duration-100 ease-in">
              ADD TO CART
            </button>
            <button className="py-2 px-4 rounded-sm active:bg-white bg-black text-white tracking-[0.15rem] font-bold w-[47.5%] mt-2 hover:opacity-70 duration-100 ease-in ">
              BUY NOW
            </button>
            <h2 className="mt-3 border-b border-black cursor-not-allowed ">
              More payment options
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MonthlyDeal;
