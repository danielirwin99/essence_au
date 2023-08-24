import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TopSellers = () => {
  const [sneakers, setSneakers] = useState([]);
  const baseUrl = process.env.REACT_APP_API_URL;

  async function getSneakers() {
    const { data } = await axios.get(`${baseUrl}/Sneaker`);
    console.log(data);
    setSneakers(data);
  }

  useEffect(() => {
    getSneakers();
  }, []);
  return (
    <>
      <main className="my-5 max-w-6xl mx-auto w-full">
        <div className="mt-10">
          <h1 className="text-center underline text-5xl font-bold tracking-wide">
            Top Sellers
          </h1>
          <div className="my-10 flex flex-col items-center justify-center ">
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-8 gap-2 w-full">
              {sneakers.slice(0, 12).map((sneaker, index) => (
                <li
                  className=" text-center justify-center min-w-fit mb-4 mx-24 sm:mx-3 md:mx-10 lg:mx-5"
                  key={index}
                >
                  <Link className="w-full" to={`/sneaker/${sneaker.id}`}>
                    <figure className="flex items-end mt-5 transition-all duration-150 hover:scale-105 ease-in-out">
                      <img
                        className=" w-full h-36  object-fill "
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

export default TopSellers;
