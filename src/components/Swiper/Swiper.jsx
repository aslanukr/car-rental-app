import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

import { HeroButton, SwiperHero, SwiperImg } from "./Swiper.styled";

import initialImg from "assets/images/initial.png";
import img1 from "assets/images/1.png";
import img2 from "assets/images/2.png";
import img3 from "assets/images/3.png";
import img4 from "assets/images/4.png";
import lastImg from "assets/images/last.png";

const HeroSwiper = () => {
  const images = [initialImg, img1, img2, img3, img4, lastImg];

  return (
    <SwiperHero
      spaceBetween={30}
      centeredSlides={true}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      autoHeight={true}
      modules={[Autoplay, Pagination, Navigation]}>
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <SwiperImg src={image} alt={`Slide ${index + 1}`} />
        </SwiperSlide>
      ))}
      <HeroButton>Pick a car</HeroButton>
    </SwiperHero>
  );
};

export default HeroSwiper;
