"use client";
import Image from "next/image";
import React from "react";
import foodKing from "../../../public/foodKing.png";
import { Button } from "@/components/ui/button";
import {
  FaFacebook,
  FaInstagram,
  FaMailBulk,
  FaMobile,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import Link from "next/link";
import google from "../../../public/HomePageImg/googlePlay.png";
import appstore from "../../../public/HomePageImg/AppStore.png";

const Footer: React.FC = () => {
  return (
    <footer className="py-4 bg-gradient-to-r from-orange-500 to-violet-700 animate-slideBackground ">
      <div className="flex-row ml-8 items-center md:flex  md:justify-around md:h-72 lg:flex lg:justify-around ">
        <div>
          <Image
            src={foodKing}
            width={150}
            height={100}
            alt="foodKingProfile"
          ></Image>
          <div className="mt-3 text-white">
            <p> Subscribe to our newsletter to get latest updates</p>
            <div className="relative w-72 mt-2">
              <input
                className="p-3 rounded-lg w-full"
                type="text"
                placeholder="Your Email Address"
              />
              <button className="absolute nset-y-0 right-1 bg-violet-800 hover:bg-black  mt-1">
                Subscribe
              </button>
            </div>
          </div>
          <div className="flex gap-5 text-violet-900 mt-4 mb-2 ">
            <FaFacebook className="bg-white rounded w-6 h-6 p-1"></FaFacebook>
            <FaYoutube className="bg-white rounded w-6 h-6 p-1"></FaYoutube>
            <FaTwitter className="bg-white rounded w-6 h-6 p-1"></FaTwitter>
            <FaInstagram className="bg-white rounded w-6 h-6 p-1"></FaInstagram>
          </div>
        </div>
        <div className="text-white ">
          <h3 className="text-2xl font-bold">Useful Links</h3>
          <div className="grid grid-cols-1 gap-y-3 mt-5">
            <Link href="/cookie-policy">Cookies Policy</Link>
            <Link href="/about-us">About Us</Link>
            <Link href="/contact-us">Contact Us</Link>
          </div>
        </div>
        <div className="text-white">
          <h4 className="text-2xl font-bold">Download Our Apps</h4>
          <div className="flex gap-3 mt-5 ">
            <Image src={google} width={100} height={100} alt="gooleP"></Image>
            <Image src={appstore} width={100} height={100} alt="appleS"></Image>
          </div>
          <div>
            <div className="flex items-center gap-2 mt-3 mb-3">
              <FaMailBulk></FaMailBulk>info@foodking.net
            </div>
            <div className="flex items-center gap-2">
              <FaMobile></FaMobile>+8802984757291
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
