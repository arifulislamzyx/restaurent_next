"use client";
import CheckoutJurney from "@/sections/home/CheckoutJurney";
import Header from "@/sections/home/Header";
import HowWeWork from "@/sections/home/HowWeWork";
import Speciality from "@/sections/home/Speciality";
import OfferSliders from "../src/sections/home/OfferSlider";
import MenuItems from "../app/menus/page";
import PopularProducts from "@/sections/home/PopularProducts";
import Menu from "../src/sections/menus/Menus";
import FeaturedItems from "@/sections/home/FeaturedItems";
// import { MenuItemProps } from "../app/menus/page";
// initialItemsShow={8} showOfferSlider={false}

export default function Home() {
  return (
    <div className="container">
      <Header></Header>
      <MenuItems></MenuItems>
      <HowWeWork></HowWeWork>
      <Speciality></Speciality>
      <OfferSliders></OfferSliders>
      <PopularProducts></PopularProducts>
      <CheckoutJurney></CheckoutJurney>
    </div>
  );
}
