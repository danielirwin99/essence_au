import React from "react";
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col items-center justify-center pt-14 pb-10 bg-[#111]">
      <div className="flex flex-col justify-center items-center md:w-[80vw]">
        <div className="grid grid-cols-4 w-full mb-10 text-center">
          <div>
            <h2 className="footerHeader">Products</h2>
            <div className="flex flex-col space-y-3">
              <Link to={"categories/nike"} className="footerLink">
                Nike
              </Link>
              <Link to={"/categories/adidas"} className="footerLink">
                Adidas
              </Link>
              <Link to={"/categories/new-balance"} className="footerLink">
                New Balance
              </Link>
              <Link to={"/categories/Puma"} className="footerLink">
                Puma
              </Link>
            </div>
          </div>
          <div>
            <h2 className="footerHeader">Categories</h2>
            <div className="flex flex-col space-y-3">
              <Link to={"/womens"} className="footerLink">
                Womens
              </Link>
              <Link to={"/mens"} className="footerLink">
                Mens
              </Link>
              <Link to={"/youth"} className="footerLink">
                Youth
              </Link>
              <h2 className="footerLink cursor-not-allowed">Infant</h2>
            </div>
          </div>
          <div>
            <h2 className="footerHeader">Company</h2>
            <div className="flex flex-col space-y-3">
              <Link to={"/about"} className="footerLink">
                About
              </Link>
              <h2 to={"/contact-us"} className="footerLink">
                Contact Us
              </h2>
              <Link to={"/policy"} className="footerLink">
                T's & C's
              </Link>
              <Link to={"/shipping-policy"} className="footerLink">
                Shipping Policy
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="footerHeader">Social</h2>
            <div className="flex flex-col space-y-3">
              <div className="footerSocial">
                <BsFacebook />
              </div>
              <div className="footerSocial">
                <BsInstagram />
              </div>
              <div className="footerSocial">
                <BsTwitter />
              </div>
              <div className="footerSocial">
                <BsYoutube />
              </div>
            </div>
          </div>
        </div>
        <h2 className="text-white mt-4">
          Copyright Sneaker Vault © {new Date().getFullYear()}
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
