import React from "react";
import { Outlet, Route, Routes, useParams } from "react-router-dom";
import Nike from "./Nike";
import Adidas from "./Adidas";
import NewBalance from "./NewBalance";
import Puma from "./Puma";

const Categories = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="nike" element={<Nike />} />
          <Route path="adidas" element={<Adidas />} />
          <Route path="new-balance" element={<NewBalance />} />
          <Route path="puma" element={<Puma />} />
        </Routes>
        <Outlet />
      </div>
    </>
  );
};

export default Categories;
