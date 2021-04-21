import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@material-ui/core";
import Homesection from "../Homesection/Homesection";

// react-id-swiper
// import "swiper/css/swiper.css";
// import { Autoplay } from "react-id-swiper";
import Swiper from "react-id-swiper";

import { SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFade } from "swiper";

// custom css
import "./styles.css";
// import "swiper/components/effect-fade/effect-fade.scss";

// images
import image1 from "./images/image-1.jpg";
import image2 from "./images/image-5.jpg";
import image3 from "./images/image-2.jpg";
const images = [image1, image2, image3];

// slider configuration

// slider component
SwiperCore.use([EffectFade]);
const Herosection = () => {
  const HeroSliderConfigs = {
    // modules: [Autoplay],
    slidesPerView: "auto",
    containerClass: "swiper-container hero-slider",
    parallax: true,
    //initialSlide: 3,
    centeredSlides: true,
    grabCursor: true,
    allowTouchMove: true,
    speed: 1000,
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  };

  const location = useLocation();
  const [parallaxSwiper, setParallaxSwiper] = useState(null);
  const parallaxAmount = parallaxSwiper ? parallaxSwiper.width * 0.95 : 0;
  const parallaxOpacity = 0.5;

  return (
    <>
      {location.pathname === "/" && (
        <Swiper
          {...HeroSliderConfigs}
          getSwiper={setParallaxSwiper}
          effect="fade"
        >
          {images.map((image) => (
            <SwiperSlide className="hero-slide " key={image}>
              <div
                className="slide-image"
                data-swiper-parallax={parallaxAmount}
                data-swiper-parallax-opacity={parallaxOpacity}
              >
                <img src={image} alt="image1" />
              </div>
              <div className="col-md-6 offset-md-3 my-auto text-center text-white">
                <h1 className="text-uppercase mb-2 font-weight-bold">
                  The care you've always needed
                </h1>
                <h2 className="mb-5 small text-uppercase">
                  A range of products for you
                </h2>
                <Button
                  component={Link}
                  to="/products"
                  variant="contained"
                  color="primary"
                >
                  Shop Now
                </Button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
      <Homesection />
    </>
  );
};

export default Herosection;
