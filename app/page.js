import CheckoutJurney from "@/componants/home/CheckoutJurney";
import Header from "@/componants/home/Header";
import HowWeWork from "@/componants/home/HowWeWork";
import Speciality from "@/componants/home/Speciality";
import OfferSliders from "./OfferSlider";
import MenuItems from "@/componants/home/MenuItems";
import PopularProducts from "@/componants/home/PopularProducts";

export default function Home() {
  return (
    <>
      <Header></Header>
      <MenuItems></MenuItems>
      <HowWeWork></HowWeWork>
      <Speciality></Speciality>
      <OfferSliders></OfferSliders>
      <PopularProducts></PopularProducts>
      <CheckoutJurney></CheckoutJurney>
    </>
  );
}
