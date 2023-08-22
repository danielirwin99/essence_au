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
  });

  return (
    <section
      id="hot"
      className="relative flex justify-center items-center flex-col mt-10 max-w-5xl mx-auto mb-5 "
    >
      <div className="absolute border-b border-gray-400 w-[90vw] lg:w-full -bottom-5 " />
      <h2 className="text-md tracking-widest mb-5 font-semibold">
        FEATURED COLLECTION
      </h2>
      <h1 className="text-3xl lg:text-3xl font-bold tracking-wider">
        WHATS HOT RIGHT NOW
      </h1>
      <div className="mt-10 flex flex-col items-center">
        <ul className="grid grid-cols-2 lg:grid-cols-4 mx-8 gap-5">
          <li className="flex flex-col text-center mx-5">
            <Link href={`/sneaker/id`}>
              <h1 className="my-5 font-bold text-lg text-start lg:text-center h-10">
                Nike Air Jordan 1
              </h1>
              <figure className="flex items-end mt-10 transition-all duration-150 hover:scale-110 ease-in">
                <img
                  className="lg:h-36 h-40  object-contain"
                  src="https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                  alt="Sneaker Items"
                />
              </figure>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Hot;
