import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

const Adidas = () => {
  const [sneakers, setSneakers] = useState([]);
  const baseUrl = process.env.REACT_APP_API_URL;

  function yeezyOnly() {
    const spread = [...sneakers];
    if (!sneakers.brand === "yeezy") {
      return;
    }
  }

  async function getSneakers() {
    const { data } = await axios.get(`${baseUrl}/Sneaker`);
    setSneakers(data);
  }

  function onSelectionChange(e) {
    const sortDirection = e.target.value;
    const copyArray = [...sneakers]; // create a new array & not mutate state

    copyArray.sort((a, b) => {
      if (sortDirection === "HIGH_TO_LOW") {
        return sortDirection === "0" ? a.price - b.price : b.price - a.price;
      } else if (sortDirection === "LOW_TO_HIGH") {
        return sortDirection === "0" ? b.price - a.price : a.price - b.price;
      } else if (sortDirection === "NEW_TO_OLD") {
        return sortDirection === "0"
          ? b.releaseYear - a.releaseYear
          : a.releaseYear - b.releaseYear;
      } else if (sortDirection === "OLD_TO_NEW") {
        return sortDirection === "0"
          ? a.releaseYear - b.releaseYear
          : b.releaseYear - a.releaseYear;
      }
    });
    setSneakers(copyArray); //re-render
  }

  useEffect(() => {
    getSneakers();
    yeezyOnly();
  }, []);

  return (
    <>
      <main className="my-5  mx-auto w-full">
        <div className="mt-10">
          <h1 className="text-center text-5xl font-bold tracking-wide pb-2">
            ADIDAS
          </h1>
          <div className="px-3 mt-3 border-t border-b flex items-center justify-between">
            <Link className="rounded-sm flex items-center hover:bg-black hover:text-white duration-150 transition-all ease-out space-x-2  h-full px-3 py-3 border-r border-l ">
              <BsArrowLeft />
              <p>Home</p>
            </Link>
            <h3 className="text-center text-sm font-semibold ml-24 text-gray-500 uppercase tracking-wider">
              {sneakers.length} Products Found
            </h3>
            <select
              defaultValue={0}
              onChange={onSelectionChange}
              id="filter"
              className=" text-gray-500 p-3 border-l border-r "
            >
              <option value="" disabled selected>
                Sort
              </option>
              <option value="LOW_TO_HIGH">Price (Lowest First)</option>
              <option value="HIGH_TO_LOW">Price (Highest First)</option>
              <option value="NEW_TO_OLD">Date, New to Old</option>
              <option value="OLD_TO_NEW">Date, Old to New</option>
            </select>
          </div>
          <div className="max-w-6xl mx-auto my-10 flex flex-col items-center justify-center ">
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 w-full">
              {sneakers.slice(0, 12).map((sneaker, index) => (
                <li
                  className=" text-center justify-center min-w-fit mb-4 mx-24 sm:mx-3 md:mx-10 lg:mx-5"
                  key={index}
                >
                  <Link className="w-full" to={`/sneaker/${sneaker.id}`}>
                    <figure className="flex items-end mt-5 transition-all duration-150 hover:scale-105 ease-in-out">
                      <img
                        className=" w-full h-36 object-fill "
                        src={sneaker.photo}
                        alt="Sneaker Items"
                      />
                    </figure>
                    <h1 className="h-10 mt-10 mb-2 font-bold text-base text-center capitalize">
                      {sneaker.brand}&nbsp;<span>{sneaker.name}</span>
                    </h1>
                    <p className="text-sm tracking-wider font-semibold text-gray-600 text-center">
                      ${sneaker.price}.00 AUD
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </>
  );
};

export default Adidas;
