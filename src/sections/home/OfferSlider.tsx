"use client";
import React from "react";
import img1 from "../../../public/slider/offerSlider1.png";
import img2 from "../../../public/slider/offerSlider2.png";
import img3 from "../../../public/slider/offerSlider3.png";
import Image, { StaticImageData } from "next/image";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

const OfferSlider: React.FC = () => {
  const slider = [img1, img2, img3];
  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: { perView: 1, spacing: 10 },
  });

  return (
    <div className="max-w-5xl mx-5 md:mx-auto lg:mx-auto">
      <div ref={sliderRef} className="keen-slider">
        {slider.map((sliderImage: StaticImageData, index: number) => (
          <div key={index}>
            <Image
              className="rounded-lg keen-slider__slide"
              src={sliderImage}
              alt="offerImage"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfferSlider;
