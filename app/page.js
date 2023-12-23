import CheckoutJurney from "@/componants/home/CheckoutJurney";
import Header from "@/componants/home/Header";
import HowWeWork from "@/componants/home/HowWeWork";
import Speciality from "@/componants/home/Speciality";
import OfferSliders from "./OfferSlider";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header></Header>
      <HowWeWork></HowWeWork>
      <Speciality></Speciality>
      <OfferSliders></OfferSliders>
      <CheckoutJurney></CheckoutJurney>
    </>
  );
}
