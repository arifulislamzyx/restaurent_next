"use client";
import React from "react";
import img1 from "../../../public/slider/offerSlider1.png";
import img2 from "../../../public/slider/offerSlider2.png";
import img3 from "../../../public/slider/offerSlider3.png";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OfferSlider: React.FC = () => {
  const slider = [img1, img2, img3];
  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="max-w-5xl mx-5 md:mx-auto lg:mx-auto">
      <Slider {...settings}>
        {slider.map((sliderImage, index) => (
          <div key={index}>
            <Image className="rounded-lg" src={sliderImage} alt="offerImage" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default OfferSlider;
