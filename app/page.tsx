import CheckoutJurney from "@/sections/home/CheckoutJurney";
import Header from "@/sections/home/Header";
import HowWeWork from "@/sections/home/HowWeWork";
import Speciality from "@/sections/home/Speciality";
import OfferSliders from "../src/sections/home/OfferSlider";
import MenuItems from "@/sections/home/MenuItems";
import PopularProducts from "@/sections/home/PopularProducts";

export default function Home() {
  return (
    <div>
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
