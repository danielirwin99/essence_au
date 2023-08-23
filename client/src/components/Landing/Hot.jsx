import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Hot = () => {
  const [sneakers, setSneakers] = useState([]);
  const baseUrl = process.env.REACT_APP_API_URL;

  async function getSneakers() {
    const { data } = await axios.get(`${baseUrl}/Sneaker`);
    console.log(data);
    setSneakers(data);
  }

  useEffect(() => {
    getSneakers();
  },[]);

  return (
    <section
      id="hot"
      className="relative flex justify-center items-center flex-col mt-10 max-w-5xl mx-auto pb-5 "
    >
      <div className="absolute border-b border-gray-400 w-[90vw] lg:w-full -bottom-5 " />
      <h2 className="text-md tracking-widest mb-5 font-semibold">
        FEATURED COLLECTION
      </h2>
      <h1 className="text-3xl lg:text-3xl font-bold tracking-wider">
        WHATS HOT RIGHT NOW
      </h1>
      <div className="mt-5 flex flex-col items-center justify-center ">
        <ul className="grid grid-cols-2 lg:grid-cols-3 mx-8 gap-2 w-full">
          {sneakers.slice(0, 6).map((sneaker, index) => (
            <li
              className="flex flex-col items-center text-center justify-center mx-10 lg:mx-5"
              key={index}
            >
              <Link to={`/sneaker/${sneaker.id}`}>
                <h1 className="my-5 font-bold text-lg text-start lg:text-center h-10 capitalize">
                  {sneaker.brand}&nbsp;<span>{sneaker.name}</span>
                </h1>
                <figure className="flex items-end mt-5 transition-all duration-150 hover:scale-105 ease-in-out">
                  <img
                    className=" w-full h-40  object-contain"
                    src={sneaker.photo}
                    alt="Sneaker Items"
                  />
                </figure>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Hot;
