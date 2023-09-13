import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

import image1 from "../../assets/images/rent-cars1.jpg";
import image2 from "../../assets/images/rent-cars2.jpg";
import image3 from "../../assets/images/rent-cars3.png";
import { SwiperImg } from "./Home.styled";

const HeroSwiper = () => {
  const images = [image1, image2, image3];

  return (
    <Swiper
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
    </Swiper>
  );
};

export default HeroSwiper;
