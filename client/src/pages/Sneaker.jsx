import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Sneaker = () => {
  const [sneakers, setSneakers] = useState({});
  const baseUrl = process.env.REACT_APP_API_URL;
  const params = useParams();

  async function getSneakers() {
    const { data } = await axios.get(`${baseUrl}/Sneaker/${params.id}`);
    console.log(data);
    setSneakers(data);
  }

  useEffect(() => {
    getSneakers();
  }, []);
  return (
    <div>
      <h1 className="capitalize">
        {sneakers.brand}&nbsp;<span>{sneakers.name}</span>
      </h1>
    </div>
  );
};

export default Sneaker;
