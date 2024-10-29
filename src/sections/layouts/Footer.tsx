"use client";
import Image from "next/image";
import React from "react";
import foodKing from "../../../public/foodKing.png";
import Link from "next/link";
import google from "../../../public/HomePageImg/googlePlay.png";
import appstore from "../../../public/HomePageImg/AppStore.png";
import {
  Facebook,
  Instagram,
  Mail,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import Button from "@/components/buttons/Button";

const Footer: React.FC = () => {
  return (
    <footer className=" py-4 bg-gradient-to-r from-orange-500 to-violet-700 animate-slideBackground  ">
      <div className="container">
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
                  className="p-3 rounded-lg w-full text-black"
                  type="text"
                  placeholder="Your Email Address"
                />
                <Button className="absolute nset-y-0 right-1 bg-violet-800 hover:bg-purple-600 hover:shadow-lg  mt-1 p-2 rounded">
                  Subscribe
                </Button>
              </div>
            </div>
            <div className="flex gap-5 text-violet-900 mt-4 mb-2 ">
              <a href={"https://www.facebook.com"}>
                <Facebook
                  size={16}
                  className="bg-white rounded w-6 h-6 p-1 cursor-pointer"
                ></Facebook>
              </a>
              <a href={"https://www.youtube.com"}>
                <Youtube
                  size={16}
                  className="bg-white rounded w-6 h-6 p-1 cursor-pointer"
                ></Youtube>
              </a>
              <a href={"https://www.twitter.com"}>
                <Twitter
                  size={16}
                  className="bg-white rounded w-6 h-6 p-1 cursor-pointer"
                ></Twitter>
              </a>
              <a href={"https://www.instagram.com"}>
                <Instagram
                  size={16}
                  className="bg-white rounded w-6 h-6 p-1 cursor-pointer"
                ></Instagram>
              </a>
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
              <Image
                src={appstore}
                width={100}
                height={100}
                alt="appleS"
              ></Image>
            </div>
            <div>
              <a
                href="mailto:info@foodking.net"
                className="flex items-center gap-2 mt-3 mb-3"
              >
                <Mail size={16} />
                info@foodking.net
              </a>
              <div className="flex items-center gap-2">
                <Phone size={16} /> +8802984757291
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
